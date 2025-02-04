// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation"; // Updated for Next.js App Router
// import { createClient } from "@sanity/client";

// // Sanity client setup
// const client = createClient({
//   projectId: "i3e6wc65",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2025-01-13",
//   token: "skCWa25Ucr0mhO4hlIipCOUiajAHkQ4oX3k2owSE3vPazC36yCHmn4W01igjSkVuwt47C0J92nvgaMb64neXVcPfTxovU05bTeObA3iusr4uKiVs88GxrnS7oHKiYffOQqmdDi179vsa87Hd0mLOUbwLDZMBLWaoKvDT1vjvZ0FZpxa00dVG",
// });

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   productImage: {
//     asset: {
//       _id: string;
//       url: string;
//     };
//   };
//   tags: string[];
//   discountPercentage: number;
//   isNew: boolean;
//   category: string;
// }

// const ProductDetails = () => {
//   const { productId } = useParams(); // Use useParams to get the product ID from the route

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     if (productId) {
//       const fetchProductDetails = async () => {
//         try {
//           const fetchedProduct = await client.fetch(
//             `*[_type == "product" && _id == $productId][0]{
//               _id,
//               title,
//               price,
//               description,
//               productImage {
//                 asset -> {
//                   _id,
//                   url
//                 }
//               },
//               tags,
//               discountPercentage,
//               isNew,
//               category
//             }`,
//             { productId }
//           );

//           setProduct(fetchedProduct);
//           setLoading(false);
//         } catch (error) {
//           setError("Error fetching product details. Please try again.");
//           setLoading(false);
//         }
//       }

//       fetchProductDetails();
//     }
//   }, [productId]);

//   if (loading) {
//     return <p className="text-center text-lg font-semibold">Loading product details...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-lg font-semibold text-red-500">{error}</p>;
//   }

//   if (!product) {
//     return <p className="text-center text-lg font-semibold">Product not found.</p>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div>
//           <img
//             src={product.productImage.asset.url}
//             alt={product.title}
//             className="w-full h-auto object-cover rounded-lg shadow-md"
//           />
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
//           <p className="text-2xl text-green-600 font-semibold mb-4">${product.price}</p>

//           {/* Discount */}
//           {product.discountPercentage > 0 && (
//             <p className="text-xl text-red-500 font-semibold mb-4">
//               {product.discountPercentage}% OFF
//             </p>
//           )}

//           {/* Product Description */}
//           <p className="text-lg text-gray-700 mb-6">{product.description}</p>

//           {/* Tags */}
//           {product.tags.length > 0 && (
//             <p className="text-sm text-gray-500 mb-4">
//               Tags: {product.tags.join(", ")}
//             </p>
//           )}

//           {/* Add more details like availability, etc. */}
//           <p className={`text-sm ${product.isNew ? "text-blue-500 font-semibold" : "text-gray-500"}`}>
//             {product.isNew ? "New Arrival!" : "Available Now"}
//           </p>

//           {/* Add to Cart Button */}
//           <button className="mt-4 w-full bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
