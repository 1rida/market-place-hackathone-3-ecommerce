"use client";

import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
  items: string[];
}

const CategoryComponent = () => {
  const [categories] = useState<Category[]>([
    {
      id: 1,
      name: "Living Room",
      items: ["Sofa", "Chair", "Coffee Table"],
    },
    {
      id: 2,
      name: "Bedroom",
      items: ["Bed", "Wardrobe", "Nightstand"],
    },
    {
      id: 3,
      name: "Dining Room",
      items: ["Dining Table", "Chair", "Sideboard"],
    },
  ]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border p-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <ul className="list-disc list-inside">
              {category.items.map((item, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
