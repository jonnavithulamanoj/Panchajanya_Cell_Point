import React, { createContext, useContext, useState, useEffect } from "react";
import earphonesImg from "@/assets/earphones.png";
import chargerImg from "@/assets/charger.png";
import powerbankImg from "@/assets/powerbank.png";
import pouchImg from "@/assets/pouch.png";
import EventPoster from "@/assets/portfolio/event-poster.png";
import BusinessPamphlet from "@/assets/portfolio/business-pamphlet.png";
import WeddingRetouch from "@/assets/portfolio/wedding-retouch.png";
import FestivalGreeting from "@/assets/portfolio/festival-greeting.png";
import RestaurantMenu from "@/assets/portfolio/restaurant-menu.png";
import BackgroundRemoval from "@/assets/portfolio/background-removal.png";
import VisitingCard from "@/assets/portfolio/visiting-card.png";
import Certificate from "@/assets/portfolio/certificate.png";
import LogoDesign from "@/assets/portfolio/logo-design.png";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ShopInfo {
  name: string;
  address: string;
  fullAddress: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekdays: string;
    sunday: string;
  };
}

export interface NavLink {
  name: string;
  path: string;
}

interface DataContextType {
  products: Product[];
  services: Service[];
  portfolioItems: PortfolioItem[];
  shopInfo: ShopInfo;
  navLinks: NavLink[];
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: string, product: Omit<Product, "id">) => void;
  deleteProduct: (id: string) => void;
  addService: (service: Omit<Service, "id">) => void;
  updateService: (id: string, service: Omit<Service, "id">) => void;
  deleteService: (id: string) => void;
}

const defaultProducts: Product[] = [
  { id: "1", name: "Premium Earphones", price: "₹499", image: earphonesImg },
  { id: "2", name: "Fast Charger 20W", price: "₹399", image: chargerImg },
  { id: "3", name: "Power Bank 10000mAh", price: "₹999", image: powerbankImg },
  { id: "4", name: "Designer Mobile Pouch", price: "₹199", image: pouchImg },
];

const defaultServices: Service[] = [
  { id: "1", title: "Screen Replacement", description: "High-quality display replacements for all major smartphone brands with warranty.", iconName: "MonitorSmartphone" },
  { id: "2", title: "Software Issues", description: "OS flashing, unlocking, data recovery, and performance optimization.", iconName: "Wrench" },
  { id: "3", title: "Battery Problems", description: "Original battery replacements to restore your phone's battery life.", iconName: "Battery" },
  { id: "4", title: "Train Ticket Booking", description: "Tatkal and general train ticket reservations across India.", iconName: "Train" },
  { id: "5", title: "Bus Ticket Booking", description: "AC, Non-AC, Sleeper, and Seater bus bookings for all routes.", iconName: "Bus" },
  { id: "6", title: "Poster Design", description: "Eye-catching posters for events, businesses, and promotions.", iconName: "Image" },
];

const defaultPortfolio: PortfolioItem[] = [
  { id: "1", title: "Grand Tech Event", category: "Poster Design", image: EventPoster },
  { id: "2", title: "Business Showcase", category: "Pamphlet Design", image: BusinessPamphlet },
  { id: "3", title: "Wedding Color Grading", category: "Photo Editing", image: WeddingRetouch },
  { id: "4", title: "Festival Celebration", category: "Poster Design", image: FestivalGreeting },
  { id: "5", title: "Luxe Menu Design", category: "Pamphlet Design", image: RestaurantMenu },
  { id: "6", title: "Product Focus", category: "Background Removal", image: BackgroundRemoval },
  { id: "7", title: "Premium Business Card", category: "Graphic Design", image: VisitingCard },
  { id: "8", title: "Merit Certificate", category: "Graphic Design", image: Certificate },
  { id: "9", title: "Minimalist Brand Logo", category: "Logo Design", image: LogoDesign },
];

const defaultShopInfo: ShopInfo = {
  name: "Panchajanya Cell Point",
  address: "12-17-87, 4, Sontivari St, Repalle, AP 522265",
  fullAddress: "12-17-87, 4, Sontivari St, Repalle, Andhra Pradesh 522265, India",
  phone: "8886527827",
  whatsapp: "918886527827",
  email: "1709dhanu@gmail.com",
  hours: {
    weekdays: "9:00 AM - 9:00 PM",
    sunday: "10:00 AM - 2:00 PM",
  },
};

const defaultNavLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("panchajanya_products_v2");
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem("panchajanya_services");
    return saved ? JSON.parse(saved) : defaultServices;
  });

  const [portfolioItems] = useState<PortfolioItem[]>(defaultPortfolio);
  const [shopInfo] = useState<ShopInfo>(defaultShopInfo);
  const [navLinks] = useState<NavLink[]>(defaultNavLinks);

  useEffect(() => {
    localStorage.setItem("panchajanya_products_v2", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("panchajanya_services", JSON.stringify(services));
  }, [services]);

  const addProduct = (product: Omit<Product, "id">) => {
    setProducts([...products, { ...product, id: Date.now().toString() }]);
  };

  const updateProduct = (id: string, updatedProduct: Omit<Product, "id">) => {
    setProducts(products.map((p) => (p.id === id ? { ...updatedProduct, id } : p)));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const addService = (service: Omit<Service, "id">) => {
    setServices([...services, { ...service, id: Date.now().toString() }]);
  };

  const updateService = (id: string, updatedService: Omit<Service, "id">) => {
    setServices(services.map((s) => (s.id === id ? { ...updatedService, id } : s)));
  };

  const deleteService = (id: string) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        products,
        services,
        portfolioItems,
        shopInfo,
        navLinks,
        addProduct,
        updateProduct,
        deleteProduct,
        addService,
        updateService,
        deleteService,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
