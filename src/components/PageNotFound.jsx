import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="space-y-6 max-w-2xl">
        <div className="text-9xl font-bold bg-gradient-to-r from-red-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
          404
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-8">
          <Link 
            to="/" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300"
          >
            🏠 Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
