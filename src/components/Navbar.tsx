import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-legatix-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-legatix-gold to-yellow-700 flex items-center justify-center p-[1px] overflow-hidden transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-legatix-bg rounded-full flex items-center justify-center overflow-hidden relative">
              <img 
                src="/legatix-comerc.jpeg" 
                alt="Legatix Logo" 
                className="absolute inset-0 w-full h-full object-cover scale-[1.15]" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Shield className="hidden w-5 h-5 text-legatix-gold" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-widest text-white group-hover:text-legatix-gold transition-colors">LEGATIX</span>
        </Link>
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-sm font-medium text-white/70 hover:text-white transition-colors">
            Acceder al sistema
          </button>
        </div>
      </div>
    </nav>
  );
}
