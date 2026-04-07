import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useData } from "@/context/DataContext";

export function Contact() {
  const { shopInfo } = useData();

  useSEO({
    title: `Contact Us | ${shopInfo.name}`,
    description: `Get in touch with ${shopInfo.name} for mobile repairs, ticket bookings, or design services. Visit our store in Repalle.`,
    keywords: `Contact ${shopInfo.name}, Mobile Repair Shop Repalle, Repalle Ticket Booking, Store Location`
  });

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600"
          >
            Get in touch for repairs, bookings, or design services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Visit Our Store</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <p className="mt-1 text-gray-600">
                    {shopInfo.fullAddress.split(', ').slice(0, 2).join(', ')},<br />
                    {shopInfo.fullAddress.split(', ').slice(2).join(', ')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">
                    <a href={`tel:${shopInfo.phone}`} className="hover:text-blue-600">{shopInfo.phone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">
                    <a href={`mailto:${shopInfo.email}`} className="hover:text-blue-600">{shopInfo.email}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Saturday: {shopInfo.hours.weekdays}<br />
                    Sunday: {shopInfo.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map and Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Map */}
            <div className="h-64 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-md sm:h-80">
              <iframe
                title="Panchajanya Cell Point Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.49386348602!2d80.8358485!3d16.0125637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49f5005822e171%3A0x6b6999676579d1c!2sSontivari%20St%2C%20Repalle%2C%20Andhra%20Pradesh%20522265!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100 sm:p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form> 
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
