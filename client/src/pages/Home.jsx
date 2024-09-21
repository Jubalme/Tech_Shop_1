import  { useState } from 'react';
import {Link} from "react-router-dom"

const Home = () => {
  // State to control visibility of each section
  const [showPhones, setShowPhones] = useState(false);
  const [showLaptops, setShowLaptops] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left side: Vertical navigation */}
      <aside className="w-1/4 bg-gray-100 p-6">
        {/* Phone Brands Section */}
        <div className="mb-6">
          <h2 
            className="text-lg font-bold text-gray-700 cursor-pointer" 
            onClick={() => setShowPhones(!showPhones)}
          >
            Phone Brands {showPhones ? '▼' : '▶'}
          </h2>
          {showPhones && (
            <nav className="space-y-3 mt-2">
              <Link to="/phones/apple" className="text-green-600 hover:text-purple-800 block"> Apple</Link>
              <Link to="/phones/samsung" className="text-green-600 hover:text-purple-800 block"> Samsung</Link>
              <Link to="/phones/motorola" className="text-green-600 hover:text-purple-800 block"> Motorola</Link>
              <Link to="/phones/huawie" className="text-green-600 hover:text-purple-800 block"> Huawie </Link>
              <Link to="/phones/techno" className="text-green-600 hover:text-purple-800 block"> Techno </Link>
              <Link to="/phones/infinix" className="text-green-600 hover:text-purple-800 block"> Infinix</Link>
            </nav>
          )}
        </div>

        {/* Laptop Brands Section */}
        <div className="mb-6">
          <h2 
            className="text-lg font-bold text-gray-700 cursor-pointer" 
            onClick={() => setShowLaptops(!showLaptops)}
          >
            Laptop Brands {showLaptops ? '▼' : '▶'}
          </h2>
          {showLaptops && (
            <nav className="space-y-3 mt-2">
              <a href="#dell" className="text-blue-600 hover:text-violet-800 block">Dell</a>
              <a href="#hp" className="text-blue-600 hover:text-violet-800 block">HP</a>
              <a href="#lenovo" className="text-blue-600 hover:text-violet-800 block">Lenovo</a>
              <a href="#asus" className="text-blue-600 hover:text-violet-800 block">Asus</a>
              <a href="#microsoft" className="text-blue-600 hover:text-violet-800 block">Microsoft</a>
            </nav>
          )}
        </div>

        {/* Accessories Section */}
        <div>
          <h2 
            className="text-lg font-bold text-gray-700 cursor-pointer" 
            onClick={() => setShowAccessories(!showAccessories)}
          >
            Accessories {showAccessories ? '▼' : '▶'}
          </h2>
          {showAccessories && (
            <nav className="space-y-3 mt-2">
              <a href="#chargers" className="text-violet-600 hover:text-blue-800 block">Chargers</a>
              <a href="#airpods" className="text-violet-600 hover:text-blue-800 block">AirPods</a>
              <a href="#cases" className="text-violet-600 hover:text-blue-800 block">Phone Cases</a>
              <a href="#laptopbags" className="text-violet-600 hover:text-blue-800 block">Laptop Bags</a>
              <a href="#keyboard" className="text-violet-600 hover:text-blue-800 block">Keyboards</a>
            </nav>
          )}
        </div>
      </aside>

      {/* Right side: Main content */}
      <main className="w-3/4 p-8 bg-white flex justify-center items-center">
    
        <h1 className="text-4xl font-bold text-gray-800 ">
          Welcome to Tech Shop!
        </h1>
      </main>
    </div>
  );
};

export default Home;
