function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-500/30 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-amber-500 rounded-full animate-spin"></div>
      </div>
      <span className="text-amber-500 font-semibold text-lg animate-pulse">Loading...</span>
    </div>
  );
}

export default Spinner;
