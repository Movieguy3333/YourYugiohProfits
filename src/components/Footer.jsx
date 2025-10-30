function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-amber-500/20 shadow-2xl">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 <span className="text-amber-500 font-semibold">YourYugiohProfits</span> All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a 
              href="https://facebook.com" 
              className="text-gray-400 hover:text-amber-500 transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a 
              href="https://twitter.com" 
              className="text-gray-400 hover:text-amber-500 transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a 
              href="https://instagram.com" 
              className="text-gray-400 hover:text-amber-500 transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
