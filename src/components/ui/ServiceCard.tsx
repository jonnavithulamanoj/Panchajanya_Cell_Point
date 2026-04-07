import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  key?: React.Key;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
