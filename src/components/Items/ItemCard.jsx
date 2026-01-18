"use client";

import Image from "next/image";
import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Price */}
        <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-1 rounded-full text-sm">
          ${item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">
          {item.name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {item.description}
        </p>

        {/* 👉 Navigate to details page */}
        <Link href={`/items/${item._id}`}>
          <button className="w-full py-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
