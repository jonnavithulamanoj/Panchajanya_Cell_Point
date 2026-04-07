import { motion } from "motion/react";

interface GalleryItem {
  id: string | number;
  title: string;
  category: string;
  image: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-md"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-blue-200">{item.category}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
