import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { useData } from "@/context/DataContext";
import logo from "@/assets/Panchajanya.jpeg";

export function Footer() {
  const { navLinks, shopInfo } = useData();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white">
              <img src={logo} alt={`${shopInfo.name} Logo`} className="h-10 w-10 rounded-lg object-cover shadow-sm" />
              <span className="text-xl font-bold tracking-tight">{shopInfo.name.split(' ')[0]}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your trusted destination for expert mobile repair, ticket booking services, and digital design solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 flex flex-col space-y-3">
              <li className="text-sm">Mobile Repair</li>
              <li className="text-sm">Ticket Booking</li>
              <li className="text-sm">Graphic Design</li>
              <li className="text-sm">Accessories</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="mt-4 flex flex-col space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-blue-500" />
                <span className="text-sm">{shopInfo.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-blue-500" />
                <a href={`tel:${shopInfo.phone}`} className="text-sm hover:text-white transition-colors">
                  {shopInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-blue-500" />
                <a href={`mailto:${shopInfo.email}`} className="text-sm hover:text-white transition-colors">
                  {shopInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center md:flex md:items-center md:justify-between md:text-left">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {shopInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
