# Panchajanya Cell Point

Panchajanya Cell Point is a modern, responsive, and feature-rich web application designed for a local multi-service shop in India. The platform showcases a wide range of services including mobile repairs, ticket bookings, and graphic design, while also providing an integrated product catalog and portfolio showcase.

## 🚀 Key Features

- **Service Showcase**: Detailed listing of mobile repair services, software solutions, and booking services (Train/Bus).
- **Product Catalog**: A curated display of mobile accessories with pricing and high-quality images.
- **Portfolio Gallery**: A dedicated section to showcase graphic design work, photo editing, and creative projects.
- **Interactive Contact**: Integration with WhatsApp for direct communication and a professional contact form.
- **Admin Dashboard**: A management interface to add, update, or delete products and services dynamically.
- **Persistence**: Data management using React Context with LocalStorage for persistent user data during development.
- **Responsive Design**: Mobile-first approach ensuring a premium experience across all devices.

## 🛠️ Tech Stack & Libraries

### Frontend
- **React 19**: Core UI library for building the component-based architecture.
- **Vite 6**: Next-generation frontend tooling for fast development and optimized builds.
- **Tailwind CSS 4**: A utility-first CSS framework for rapid and consistent styling.
- **Framer Motion**: A powerful animation library for creating smooth, premium transitions and interactions.
- **Lucide React**: A collection of beautiful, consistent icons for enhanced visual storytelling.
- **React Router Dom 7**: Dynamic routing for seamless navigation between pages.

### Logic & Data
- **React Context API**: For centralized state management (Products, Services, Portfolio).
- **LocalStorage**: To persist data changes across browser sessions.
- **TypeScript**: Ensuring type safety and better developer experience.

### Backend/Tooling (Optional/Contextual)
- **Express**: Integrated for potential server-side operations or proxying.
- **Google Generative AI**: SDK included for potential AI-enhanced features or content generation.

## 📋 Requirements

To run this project locally, you need:
- **Node.js**: Version 18.x or higher.
- **npm**: Version 9.x or higher.
- **Modern Browser**: Supporting ES modules and advanced CSS features.

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Panchajanya_Cell_Point
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file based on `.env.example` if you plan to use AI features or external APIs.

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 🔄 Application Flow

### 1. Initialization
- The application starts at `main.tsx`, which renders the `App` component.
- `App.tsx` wraps the entire application with the `DataProvider` (Context API) and `BrowserRouter`.

### 2. Data Layer (`DataContext.tsx`)
- On mounting, the `DataProvider` initializes state for products and services.
- It first checks `localStorage` for any existing data; if none is found, it loads the `defaultProducts` and `defaultServices`.
- Any changes made through the Admin Dashboard are automatically synced back to `localStorage`.

### 3. Navigation & Layout
- The `Layout` component provides a persistent `Navbar` and `Footer`.
- React Router manages the transition between different pages (`Home`, `Services`, `Products`, `Portfolio`, `Contact`, `Admin`).

### 4. User Interaction
- Users can browse services and products on their respective pages.
- The `Contact` page allows users to send messages via a form or jump directly to WhatsApp.
- The `Portfolio` section uses a grid layout with category filtering for a professional showcase.

### 5. Admin Flow
- Navigating to `/admin` opens the management dashboard.
- Admins can perform CRUD operations on the product and service lists, which immediately updates the global state and local storage.

## 📂 Project Structure

```text
src/
├── assets/             # Static assets (images, icons)
├── components/         # Reusable UI and Layout components
│   ├── layout/         # Base Layout, Navbar, Footer
│   └── ui/             # Atomic UI components
├── context/            # Global state management (DataProvider)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and library configs
├── pages/              # Main page components
│   └── admin/          # Admin-specific pages
├── App.tsx             # Main routing and provider setup
└── main.tsx            # Entry point
```

---

