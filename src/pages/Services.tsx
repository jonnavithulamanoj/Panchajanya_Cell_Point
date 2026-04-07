import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useData } from "@/context/DataContext";

export function Services() {
  const { services, shopInfo } = useData();

  useSEO({
    title: `Our Services | ${shopInfo.name}`,
    description: "Professional mobile repair, train/bus ticket booking, and graphic design services in Repalle.",
    keywords: "Mobile Repair Services, Ticket Booking Repalle, Graphic Design, Poster Design, Screen Replacement"
  });

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600"
          >
            Professional solutions for your digital and mobile needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = (Icons as any)[service.iconName] || Icons.Circle;
            return (
              <ServiceDetailCard 
                key={service.id}
                title={service.title} 
                description={service.description}
                icon={IconComponent}
                delay={index * 0.1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ServiceDetailCard({ title, description, icon: Icon, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
