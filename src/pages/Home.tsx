import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import * as Icons from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { useSEO } from "@/hooks/useSEO";
import { useData } from "@/context/DataContext";

import heroImage from "@/assets/Panchajanya.jpeg";

export function Home() {
  const { products, services, portfolioItems, shopInfo } = useData();

  useSEO({
    title: `${shopInfo.name} | Mobile Repair & Digital Services`,
    description: "Trusted destination for expert mobile repair, ticket booking services, and digital design solutions in Repalle.",
    keywords: "Mobile Repair, Ticket Booking, Graphic Design, Repalle, Panchajanya Cell Point, Mobile Accessories"
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-blue-600 px-4 py-20 text-white sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 z-0 bg-blue-900/70 opacity-100">
          <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-blue-800/20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-blue-500/30 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm">
              All Digital & Mobile Services in One Place
            </span>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
              {shopInfo.name.split(' ')[0]} <span className="text-blue-200">{shopInfo.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100 sm:text-2xl">
              Your Trusted Mobile Repair & Digital Service Center in Repalle.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${shopInfo.phone}`}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg transition-transform hover:scale-105 sm:w-auto"
              >
                <PhoneCall className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${shopInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive solutions for all your digital needs.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => {
              const IconComponent = (Icons as any)[service.iconName] || Icons.Circle;
              return (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={IconComponent}
                  delay={index * 0.1}
                />
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
            >
              View all services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center sm:text-left">Featured Products</h2>
              <p className="mt-2 text-lg text-gray-600 text-center sm:text-left">Top quality accessories for your devices.</p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
            >
              Shop all <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.slice(0, 4).map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Recent Work</h2>
            <p className="mt-4 text-lg text-gray-600">A glimpse into our creative design portfolio.</p>
          </div>
          
          <GalleryGrid items={portfolioItems.slice(0, 3)} />
          
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
            >
              View full portfolio <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
