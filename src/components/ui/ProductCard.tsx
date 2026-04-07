import { motion } from "motion/react";
import React from "react";

interface ProductCardProps {
  key?: React.Key;
  name: string;
  price: string;
  image: string;
  delay?: number;
}

export function ProductCard({ name, price, image, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-blue-600 font-medium">{price}</p>
      </div>
    </motion.div>
  );
}
