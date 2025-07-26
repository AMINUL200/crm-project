import React from "react";

interface Product {
  name: string;
  price: string;
  date: string;
  image?: string;
  sold?: string;
  revenue?: string;
}

const ProductsCompo3 = () => {
  const newProducts: Product[] = [
    { name: "Air Conditioner", price: "$655", date: "24 Apr 2021", image: "./images/profile/pic555.jpg" },
    { name: "Air Conditioner", price: "$655", date: "24 Apr 2021", image: "./images/profile/pic555.jpg" },
    { name: "Bag Pack", price: "$699", date: "24 Apr 2021", image: "./images/profile/pic555.jpg" },
    { name: "Block Dress", price: "$955", date: "24 Apr 2021", image: "./images/profile/pic555.jpg" },
    { name: "Air Conditioner", price: "$655", date: "24 Apr 2021", image: "./images/profile/pic555.jpg" },
  ];

  const topSellingProducts: Product[] = [
    { name: "Air Conditioner", price: "$655", sold: "55", revenue: "$5,956", date: "24 Apr 2021", image: "./images/profile/pic555.jpg" },
    { name: "Bag Pack", price: "$585", sold: "485", revenue: "$9,956", date: "24 Apr 2021", image: "./images/profile/pic555.jpg" },
    { name: "Bag Pack", price: "$852", sold: "5525", revenue: "$8,525", date: "24 Apr 2021", image: "./images/profile/pic555.jpg" },
    { name: "Block Dress", price: "$852", sold: "5985", revenue: "$8,525", date: "24 Apr 2021", image: "./images/profile/pic555.jpg" },
    { name: "Air Conditioner", price: "$182", sold: "525", revenue: "$6,525", date: "24 Apr 2021", image: "./images/profile/pic555.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 bg-gray-50">
      {/* 📦 New Products (Table) */}
      <div className="lg:col-span-4 bg-white rounded-xl shadow-md py-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-5 border-b pb-3 px-6">🆕 New Products</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[#452B90] bg-current/10 uppercase text-xs tracking-wide border-b">
                <th className="p-4 pl-4">Product Name</th>
                <th className="">Price</th>
              </tr>
            </thead>
            <tbody>
              {newProducts.map((product, idx) => (
                <tr
                  key={idx}
                  className="border-b last:border-none hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-3 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-gray-800 truncate">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 font-semibold text-gray-500">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 📈 Top Selling Products */}
      <div className="lg:col-span-8 bg-white rounded-xl shadow-md py-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-5 border-b pb-3 px-6">🔥 Top Selling Products</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[#452B90] bg-current/10 uppercase text-xs tracking-wide border-b">
                <th className="p-4 pl-4">Product Name</th>
                <th className="">Price</th>
                <th className="">Sold</th>
                <th className="">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topSellingProducts.map((product, idx) => (
                <tr
                  key={idx}
                  className="border-b last:border-none hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-3 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-gray-800 truncate">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 ">{product.price}</td>
                  <td className="py-3">{product.sold}</td>
                  <td className="py-3 font-semibold text-gray-500">{product.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsCompo3;
