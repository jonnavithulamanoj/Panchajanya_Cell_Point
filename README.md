# Panchajanya Cell Point & Sri Vinayaka House Shifting

Panchajanya Cell Point is a premium, modern, and feature-rich web application designed for a multi-service business hub in Repalle, Andhra Pradesh. The platform serves as a digital storefront for mobile services, electronic products, graphic design, and now, specialized professional moving and cleaning services through **Sri Vinayaka House Shifting & Cleaning**.

## 🚀 Key Features

- **Service Showcase**: Comprehensive listing of mobile repair services, software solutions, and travel booking services (Train/Bus).
- **Professional Moving Services**: Dedicated section for **Sri Vinayaka House Shifting & Cleaning**, offering stress-free relocation and deep cleaning solutions.
- **Dynamic Product Catalog**: A curated display of mobile accessories with pricing and real-time availability.
- **Graphic Design Portfolio**: A professional gallery showcasing high-quality design work, including logos, posters, and photo editing.
- **Instant Communication**: Integrated WhatsApp support for quick inquiries and a professional contact form for detailed requests.
- **Full Admin Dashboard**: A secure management interface to perform CRUD operations on products and services.
- **Persistent Data**: Uses React Context API combined with LocalStorage for seamless data persistence during development.
- **Ultra-Responsive UI**: A mobile-first, high-performance design built for quality across all screen sizes.

## 🛠️ Tech Stack & Libraries

### Frontend Core
- **React 19**: Leveraging the latest features of the React library for building a robust component-based architecture.
- **Vite 6**: Providing an ultra-fast development environment and optimized production builds.
- **Tailwind CSS 4**: Utilizing the cutting-edge utility-first CSS framework for modern, scalable styling.
- **Framer Motion**: Powering smooth, premium animations and interactive transitions.
- **Lucide React**: Providing a consistent and beautiful icon system.
- **React Router Dom 7**: Managing complex client-side routing and navigation.

### Logic & State
- **React Context API**: Centralized state management for products, services, and portfolio data.
- **LocalStorage**: Ensuring user changes and admin updates persist across sessions.
- **TypeScript**: Enforcing strict type safety and improving developer productivity.

## 📋 Requirements

- **Node.js**: Version 18.x or higher.
- **npm**: Version 9.x or higher.
- **Modern Browser**: Support for ES Modules and advanced CSS Grid/Flexbox.

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jonnavithulamanoj/Panchajanya_Cell_Point.git
   cd Panchajanya_Cell_Point
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:
   Create a `.env` file from the template:
   ```bash
   cp .env.example .env
   ```

4. **Launch Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

## 🔄 Application Architecture

### 1. Entry & Providers
The app entry point is `main.tsx`, which renders the `App` component wrapped in `DataProvider` and `BrowserRouter`.

### 2. Centralized Data Management (`DataContext.tsx`)
- **Initialization**: Loads default data or retrieves the latest state from `localStorage`.
- **Global Hooks**: The `useData` hook provides components with access to products, services, and shop information.
- **Synchronization**: Automatically persists any admin-driven CRUD operations to the local storage.

### 3. Specialized Service Pages
- **House Shifting**: A dedicated module (`HouseShifting.tsx`) specifically designed for the moving and cleaning service vertical.
- **Portfolio**: A filtered grid displaying professional creative work.
- **Admin**: A dedicated dashboard for managing business offerings in real-time.

## 📂 Project Structure

```text
src/
├── assets/             # Images, icons, and static media
├── components/         # Component library
│   ├── layout/         # Persistent UI (Navbar, Footer, Root Layout)
│   ├── ui/             # Reusable atomic components
│   └── whatsapp/       # Interactive communication components
├── context/            # Business logic and global state
├── hooks/              # Custom React hooks for data access
├── lib/                # Configs and utility scripts
├── pages/              # Primary route components
│   ├── admin/          # Business management tools
│   └── HouseShifting.tsx # Specialized service module
├── App.tsx             # Routing and layout orchestration
└── main.tsx            # Application entry point
```

---

*This project is built and maintained for **Panchajanya Cell Point & Sri Vinayaka House Shifting**.*
