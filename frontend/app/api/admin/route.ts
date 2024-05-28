import { ethers } from "ethers";
import { NextResponse } from "next/server";
import crypto from "crypto";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

let nonce: string | null;
const certificationBodyAddress = "0x29f9146174aaed443eec9cc3f43aac190c29f9f4";

export async function GET() {
  nonce = crypto.randomBytes(16).toString("hex");
  return NextResponse.json([nonce]);
}

export async function POST(request: Request) {
  if (!request.body) {
    return NextResponse.json({ status: 400, message: "Bad request" });
  }
  const body = await request.json();
  const { signData, image } = body;

  if (!nonce) {
    return NextResponse.json({ status: 401, message: "Nonce is missing" });
  }

  const message = `${nonce}Signing as Authentication Body`;
  const recoveredAddress = ethers.utils.verifyMessage(message, signData);

  if (
    recoveredAddress.toLowerCase() !== certificationBodyAddress.toLowerCase()
  ) {
    return NextResponse.json({ status: 403, message: "Not authorised" });
  }

  const buffer = Buffer.from(
    image.replace(/^data:image\/\w+;base64,/, ""),
    "base64",
  );

  if (!process.env.AWS_BUCKET_NAME) {
    return NextResponse.json({ status: 503, message: "Internal server error" });
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${crypto.randomBytes(16).toString("hex")}.jpg`,
    Body: buffer,
    ContentEncoding: "base64",
    ContentType: "image/jpeg",
  };

  try {
    const data = await s3.upload(params).promise();
    return NextResponse.json({ status: 200, message: "OK", data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      error,
    });
  }
}
