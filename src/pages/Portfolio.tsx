import { motion } from "motion/react";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { useSEO } from "@/hooks/useSEO";
import { useData } from "@/context/DataContext";

export function Portfolio() {
  const { portfolioItems, shopInfo } = useData();

  useSEO({
    title: `Our Portfolio | ${shopInfo.name}`,
    description: "Explore our creative design portfolio featuring event posters, business pamphlets, and professional photo editing.",
    keywords: "Graphic Design Portfolio, Poster Design, Pamphlet Design, Photo Editing, Repalle Designers"
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
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600"
          >
            A showcase of our creative design and editing work.
          </motion.p>
        </div>

        <GalleryGrid items={portfolioItems} />
      </div>
    </div>
  );
}
