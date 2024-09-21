
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { AiOutlineSearch } from 'react-icons/ai';


const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and Shop Name */}
        <Logo />
        <div className="flex-grow mx-4 relative">
          <input 
            type="text" 
            placeholder="Search products here..." 
            className="w-3/4 p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* The Search Icon */}
          <AiOutlineSearch className="absolute left-3 top-3 text-gray-500" size={20} />
        </div>
        {/* Right side: Navigation Links */}
        <nav className="space-x-4">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
