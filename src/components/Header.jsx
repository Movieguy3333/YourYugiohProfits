import Logo from "./Logo";
import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl border-b border-amber-500/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4">
          <Logo />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(251,191,36,0.3)] ">
            YourYugiohProfits
          </h1>
        </div>
      </div>
      <HeaderNav />
    </header>
  );
}

export default Header;
