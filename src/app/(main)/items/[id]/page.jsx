import Image from "next/image";
import { notFound } from "next/navigation";

async function getItem(id) {
  if (!id) return null;

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/items/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function ItemDetailsPage({ params }) {
  const { id } =await params;

  if (!id) notFound();

  const item = await getItem(id);

  if (!item) notFound();

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative h-96 md:h-[500px] rounded-3xl shadow-2xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {item.name}
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {item.description}
          </p>

          <div className="text-3xl md:text-4xl font-bold text-indigo-600">
            ${item.price}
          </div>

          <button className="w-full md:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
