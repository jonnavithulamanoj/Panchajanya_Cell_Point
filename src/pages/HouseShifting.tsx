import { motion } from "motion/react";
import { Truck, Home, Sparkles, CheckCircle2, PhoneCall, ShieldCheck, Clock, MapPin } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useData } from "@/context/DataContext";
import houseShiftingImg from "@/assets/portfolio/house-shifting.png";

export function HouseShifting() {
  const { shopInfo } = useData();

  useSEO({
    title: `Sri Vinayaka House Shifting & Cleaning | ${shopInfo.name}`,
    description: "Professional house shifting and deep cleaning services. Reliable, efficient, and stress-free moving solutions.",
    keywords: "House Shifting, Moving Services, Deep Cleaning, Sri Vinayaka, Packing and Moving, Repalle"
  });

  const features = [
    {
      icon: Truck,
      title: "Safe Shifting",
      description: "Careful handling of all your belongings with professional packing and secure transportation."
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Complete house cleaning services before you move in or after you move out."
    },
    {
      icon: ShieldCheck,
      title: "Insured Moving",
      description: "Rest easy knowing your valuables are handled with the utmost care and responsibility."
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "We respect your time. Our team ensures punctual arrival and efficient completion of shifting."
    }
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-24 text-white lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={houseShiftingImg} 
            alt="Background" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full bg-blue-500/30 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm">
                Sri Vinayaka House Shifting & Cleaning
              </span>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Stress-Free Shifting <br />
                <span className="text-blue-400">Pristine Cleaning</span>
              </h1>
              <p className="mb-8 text-lg text-blue-100 sm:text-xl">
                Experience a smooth transition to your new home. From expert packing and moving to professional deep cleaning, we handle it all with care.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${shopInfo.phone}`}
                  className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                  <PhoneCall className="h-5 w-5" />
                  Book Now
                </a>
                <a
                  href="#features"
                  className="flex items-center gap-2 rounded-full border border-blue-400/50 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img 
                  src={houseShiftingImg} 
                  alt="Professional House Shifting Service"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 text-gray-900 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2 text-green-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Trusted By</p>
                    <p className="text-lg font-bold">500+ Families</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Our Shifting Service?</h2>
            <p className="mt-4 text-lg text-gray-600">We provide end-to-end solutions for your moving needs.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:bg-white hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">Our Seamless Moving Process</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Inspection & Quote", desc: "We visit your location to assess the shifting needs and provide a fair quote." },
                  { step: "02", title: "Professional Packing", desc: "Our team uses high-quality materials to pack your belongings securely." },
                  { step: "03", title: "Transport & Cleaning", desc: "We move your items and perform a deep clean of your new/old space." },
                  { step: "04", title: "Unpacking & Setup", desc: "We help you settle in by careful unpacking and arranging items." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <span className="text-4xl font-black text-blue-200">{item.step}</span>
                    <div>
                      <h4 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full bg-blue-600/5 absolute -z-10 animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
                    <img src={houseShiftingImg} alt="Shifting" className="h-full w-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                     <div className="h-full w-full bg-blue-600 flex items-center justify-center p-6 text-white text-center">
                        <div>
                          <Home className="h-12 w-12 mx-auto mb-4" />
                          <p className="font-bold text-xl uppercase tracking-wider">Home Shifting</p>
                        </div>
                     </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                     <div className="h-full w-full bg-green-500 flex items-center justify-center p-6 text-white text-center">
                        <div>
                          <Sparkles className="h-12 w-12 mx-auto mb-4" />
                          <p className="font-bold text-xl uppercase tracking-wider">Deep Cleaning</p>
                        </div>
                     </div>
                  </div>
                  <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
                    <img src={houseShiftingImg} alt="Cleaning" className="h-full w-full object-cover grayscale" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-extrabold sm:text-4xl">Ready to Move to Your New Home?</h2>
          <p className="mb-10 text-xl text-blue-100">
            Let Sri Vinayaka House Shifting & Cleaning handle the hard work while you enjoy your new space.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${shopInfo.phone}`}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg transition-transform hover:scale-105 sm:w-auto"
            >
              <PhoneCall className="h-5 w-5" />
              Call For Free Quote
            </a>
            <a
              href={`https://wa.me/${shopInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
