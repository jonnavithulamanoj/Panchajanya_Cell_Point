import { useState } from "react";
import { useData, Product, Service } from "@/context/DataContext";
import { Plus, Edit2, Trash2, Save, X } from "lucide-react";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"products" | "services">("products");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage your products and services here.</p>
      </div>

      <div className="mb-8 flex space-x-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("products")}
          className={`pb-4 text-sm font-medium ${
            activeTab === "products"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Manage Products
        </button>
        <button
          onClick={() => setActiveTab("services")}
          className={`pb-4 text-sm font-medium ${
            activeTab === "services"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Manage Services
        </button>
      </div>

      {activeTab === "products" ? <ProductsManager /> : <ServicesManager />}
    </div>
  );
}

function ProductsManager() {
  const { products, addProduct, updateProduct, deleteProduct } = useData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", price: "", image: "" });
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData({ name: product.name, price: product.price, image: product.image });
    setIsAdding(false);
  };

  const handleSave = (id?: string) => {
    if (id) {
      updateProduct(id, formData);
      setEditingId(null);
    } else {
      addProduct(formData);
      setIsAdding(false);
    }
    setFormData({ name: "", price: "", image: "" });
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ name: "", price: "", image: "" });
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => {
            setIsAdding(true);
            setEditingId(null);
            setFormData({ name: "", price: "", image: "" });
          }}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" /> Add Product
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-700">
            <tr>
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isAdding && (
              <tr className="bg-blue-50/50">
                <td className="whitespace-nowrap px-6 py-4 align-middle">
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 align-middle">
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 align-middle">
                  <input
                    type="text"
                    placeholder="Price (e.g. ₹499)"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right align-middle">
                  <button onClick={() => handleSave()} className="mr-3 text-green-600 transition-colors hover:text-green-800">
                    <Save className="h-5 w-5" />
                  </button>
                  <button onClick={handleCancel} className="text-gray-500 transition-colors hover:text-gray-700">
                    <X className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            )}
            {products.map((product) => (
              <tr key={product.id} className="transition-colors hover:bg-blue-50/50 even:bg-gray-50/50">
                {editingId === product.id ? (
                  <>
                    <td className="whitespace-nowrap px-6 py-4 align-middle">
                      <input
                        type="text"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 align-middle">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 align-middle">
                      <input
                        type="text"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right align-middle">
                      <button onClick={() => handleSave(product.id)} className="mr-3 text-green-600 transition-colors hover:text-green-800">
                        <Save className="h-5 w-5" />
                      </button>
                      <button onClick={handleCancel} className="text-gray-500 transition-colors hover:text-gray-700">
                        <X className="h-5 w-5" />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="whitespace-nowrap px-6 py-4 align-middle">
                      <img src={product.image} alt={product.name} className="h-12 w-12 rounded-lg border border-gray-100 object-cover shadow-sm" />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 align-middle font-medium text-gray-900">{product.name}</td>
                    <td className="whitespace-nowrap px-6 py-4 align-middle">{product.price}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-right align-middle">
                      <button onClick={() => handleEdit(product)} className="mr-4 text-blue-600 transition-colors hover:text-blue-800">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button onClick={() => deleteProduct(product.id)} className="text-red-600 transition-colors hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ServicesManager() {
  const { services, addService, updateService, deleteService } = useData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: "", description: "", iconName: "" });
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (service: Service) => {
    setEditingId(service.id);
    setFormData({ title: service.title, description: service.description, iconName: service.iconName });
    setIsAdding(false);
  };

  const handleSave = (id?: string) => {
    if (id) {
      updateService(id, formData);
      setEditingId(null);
    } else {
      addService(formData);
      setIsAdding(false);
    }
    setFormData({ title: "", description: "", iconName: "" });
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ title: "", description: "", iconName: "" });
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => {
            setIsAdding(true);
            setEditingId(null);
            setFormData({ title: "", description: "", iconName: "Star" });
          }}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" /> Add Service
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-700">
            <tr>
              <th className="px-6 py-4">Icon Name (Lucide)</th>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isAdding && (
              <tr className="bg-blue-50/50">
                <td className="whitespace-nowrap px-6 py-4 align-middle">
                  <input
                    type="text"
                    placeholder="e.g. Smartphone"
                    value={formData.iconName}
                    onChange={(e) => setFormData({ ...formData, iconName: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 align-middle">
                  <input
                    type="text"
                    placeholder="Service Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 align-middle">
                  <input
                    type="text"
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right align-middle">
                  <button onClick={() => handleSave()} className="mr-3 text-green-600 transition-colors hover:text-green-800">
                    <Save className="h-5 w-5" />
                  </button>
                  <button onClick={handleCancel} className="text-gray-500 transition-colors hover:text-gray-700">
                    <X className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            )}
            {services.map((service) => (
              <tr key={service.id} className="transition-colors hover:bg-blue-50/50 even:bg-gray-50/50">
                {editingId === service.id ? (
                  <>
                    <td className="whitespace-nowrap px-6 py-4 align-middle">
                      <input
                        type="text"
                        value={formData.iconName}
                        onChange={(e) => setFormData({ ...formData, iconName: e.target.value })}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 align-middle">
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 align-middle">
                      <input
                        type="text"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right align-middle">
                      <button onClick={() => handleSave(service.id)} className="mr-3 text-green-600 transition-colors hover:text-green-800">
                        <Save className="h-5 w-5" />
                      </button>
                      <button onClick={handleCancel} className="text-gray-500 transition-colors hover:text-gray-700">
                        <X className="h-5 w-5" />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="whitespace-nowrap px-6 py-4 align-middle font-mono text-xs text-blue-600">{service.iconName}</td>
                    <td className="whitespace-nowrap px-6 py-4 align-middle font-medium text-gray-900">{service.title}</td>
                    <td className="px-6 py-4 align-middle">{service.description}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-right align-middle">
                      <button onClick={() => handleEdit(service)} className="mr-4 text-blue-600 transition-colors hover:text-blue-800">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button onClick={() => deleteService(service.id)} className="text-red-600 transition-colors hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
