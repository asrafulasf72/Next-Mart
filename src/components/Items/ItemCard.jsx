import Image from "next/image";

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

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-1 rounded-full text-sm">
          $ {item.price}
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

        <button className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition">
          View Details
        </button>
      </div>

      {/* Soft Glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 pointer-events-none" />
    </div>
  );
}