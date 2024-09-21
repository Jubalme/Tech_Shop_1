
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and Shop Name */}
        <Logo />

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
