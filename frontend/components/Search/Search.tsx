import { Selector } from "./Selector";

export const Search = () => {
  return (
    <div className=" ">
      <Selector
        items={[
          { value: "all", label: "All" },
          { value: "furniture", label: "Furniture" },
          { value: "glassware", label: "Glassware" },
          { value: "postcards", label: "Postcards" },
          { value: "stamps", label: "Stamps" },
          { value: "collectables", label: "Collectables" },
        ]}
      />
    </div>
  );
};
