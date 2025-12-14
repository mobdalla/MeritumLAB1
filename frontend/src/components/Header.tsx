
export function Header() {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="data:image/svg+xml,%3Csvg width='60' height='50' viewBox='0 0 60 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 5L25 25L15 45L5 25L15 5Z' fill='%23FF6B35'/%3E%3Cpath d='M30 15L40 35L30 45L20 35L30 15Z' fill='%23F7931E'/%3E%3Ctext x='5' y='48' font-family='Arial' font-size='8' fill='%23333'%3EMeritumLab%3C/text%3E%3C/svg%3E"
          alt="MeritumLab" 
          className="h-10"
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-12">
        <a href="#home" className="text-black hover:text-gray-600 transition-colors">
          Home
        </a>
        <a href="#servizi" className="text-black hover:text-gray-600 transition-colors">
          Servizi
        </a>
        <a href="#contatti" className="text-black hover:text-gray-600 transition-colors">
          Contatti
        </a>
      </nav>

      {/* Right side - Language & Auth */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-black">Italiano</span>
          <span className="text-xl">🇮🇹</span>
        </div>
        <button className="px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors">
          Login
        </button>
        <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
          Sign up
        </button>
      </div>
    </header>
  );
}
