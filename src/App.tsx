/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { HouseShifting } from "./pages/HouseShifting";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { DataProvider } from "./context/DataContext";

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="house-shifting" element={<HouseShifting />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
