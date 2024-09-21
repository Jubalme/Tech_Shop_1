

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img 
        src="/logo.png"  // Logo path from the public folder
        alt="Tech Shop Logo"
        className="h-10 w-10"
      />
      <span className="text-2xl font-bold text-white">Tech Shop</span>
    </div>
  );
};

export default Logo;
