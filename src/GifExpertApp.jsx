import React, { useState } from "react";
import { AddCategorie, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Left 4 dead"]);
  const onAddCateogry = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif expert App</h1>

      <AddCategorie onNewCategory={onAddCateogry} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
