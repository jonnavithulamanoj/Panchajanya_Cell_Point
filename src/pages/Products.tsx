import { motion } from "motion/react";
import { ProductCard } from "@/components/ui/ProductCard";
import { useSEO } from "@/hooks/useSEO";
import { useData } from "@/context/DataContext";

export function Products() {
  const { products, shopInfo } = useData();

  useSEO({
    title: `Mobile Accessories | ${shopInfo.name}`,
    description: "Shop high-quality mobile accessories including earphones, chargers, power banks, and pouches at the best prices.",
    keywords: "Mobile Accessories, Earphones, Fast Chargers, Power Banks, Mobile Pouches, Repalle"
  });

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
          >
            Mobile Accessories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600"
          >
            High-quality accessories for all your devices at the best prices.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
