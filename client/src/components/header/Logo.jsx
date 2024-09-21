

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img 
        src="/logo.png"  // Logo path from the public folder
        alt="Tech Shop Logo"
        className="h-20 w-25"
      />
      <span className="text-2xl font-bold text-white"> My Tech Shop</span>
    </div>
  );
};

export default Logo;
