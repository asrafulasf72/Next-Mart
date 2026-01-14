"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProductsPreview() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99",
      description: "High-quality sound with noise cancellation.",
      image: "/Headphones.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199",
      description: "Track your fitness and notifications seamlessly.",
      image: "/watch.png",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$59",
      description: "Ergonomic design with RGB lighting.",
      image: "/mouse.png",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: "$129",
      description: "Tactile switches for smooth typing experience.",
      image: "/Keyboard.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground"
        >
          Products Preview
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16"
        >
          Take a look at some of the products you can manage and showcase with NextMart.
        </motion.p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-card rounded-2xl shadow-2xl overflow-hidden cursor-pointer transition-transform"
            >
              {/* Product Image */}
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Product Info */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">
                    {product.price}
                  </span>
                  <Button size="sm" className="px-4 rounded-full">
                    View
                  </Button>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
