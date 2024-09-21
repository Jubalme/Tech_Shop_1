// Apple.jsx

import { useNavigate } from 'react-router-dom';


const products = [
  {
    id: 1,
    name: 'iPhone 13',
    description: 'Latest model with A15 Bionic chip.',
    price: '$799',
    imageUrl: 'path/to/iphone13.jpg',
  },
  {
    id: 2,
    name: 'iPhone 12',
    description: '5G capable with A14 Bionic chip.',
    price: '$699',
    imageUrl: '/iphone13.png',
  },
  // Add more products as needed
];

const Apple = () => {
 

  const navigate = useNavigate();

const handleBuyNow = () => {
  navigate('/register');
};


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Apple Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold">{product.price}</p>
              <button
                onClick={handleBuyNow}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Buy This Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apple;

