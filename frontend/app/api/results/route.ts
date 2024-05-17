import { NextResponse } from "next/server";

const items = [
  {
    name: "Antique Wooden Chair",
    category: "furniture",
    circa: "pre-1700s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Vintage Glass Vase",
    category: "glassware",
    circa: "1800s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Victorian Sofa",
    category: "furniture",
    circa: "1800s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Classic China Set",
    category: "glassware",
    circa: "1900s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Edwardian Armchair",
    category: "furniture",
    circa: "1900s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Modern Glass Table",
    category: "glassware",
    circa: "2000s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Baroque Cabinet",
    category: "furniture",
    circa: "1700s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Crystal Chandelier",
    category: "glassware",
    circa: "pre-1700s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Rustic Dining Table",
    category: "furniture",
    circa: "1800s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Art Deco Mirror",
    category: "glassware",
    circa: "1900s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Minimalist Sofa",
    category: "furniture",
    circa: "2000s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Gothic Candle Holder",
    category: "glassware",
    circa: "1700s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Renaissance Dresser",
    category: "furniture",
    circa: "pre-1700s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Antique Crystal Bowl",
    category: "glassware",
    circa: "1800s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Georgian Sideboard",
    category: "furniture",
    circa: "1700s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Vintage Wine Glass",
    category: "glassware",
    circa: "1900s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Contemporary Bed",
    category: "furniture",
    circa: "2000s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Medieval Goblet",
    category: "glassware",
    circa: "pre-1700s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "French Provincial Wardrobe",
    category: "furniture",
    circa: "1700s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Art Nouveau Lamp",
    category: "glassware",
    circa: "1800s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Modern Bookshelf",
    category: "furniture",
    circa: "2000s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Colonial Desk",
    category: "furniture",
    circa: "1800s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Rococo Mirror",
    category: "glassware",
    circa: "1700s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Regency Dining Set",
    category: "furniture",
    circa: "1800s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Classic Tea Set",
    category: "glassware",
    circa: "1900s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  if (!page) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
  const pageNum = parseInt(page, 10);
  const itemsPerPage = 15;
  const startIndex = (pageNum - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  if (endIndex > items.length) {
    endIndex = items.length;
  }
  const paginatedItems = items.slice(startIndex, endIndex);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(paginatedItems, { status: 200 });
}
