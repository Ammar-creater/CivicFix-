import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PenTool, LogIn, Home, Shield } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 text-slate-100 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-emerald-400 hover:text-emerald-300 transition-colors">
        <PenTool className="h-6 w-6 stroke-[2.5]" />
        <span>Civic<span className="text-white">Fix</span></span>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/"
          className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-emerald-400 ${
            location.pathname === '/' ? 'text-emerald-400' : 'text-slate-300'
          }`}
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>
        <Link
          to="/login"
          className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all shadow-md hover:shadow-emerald-500/20 hover:-translate-y-0.5"
        >
          <LogIn className="h-3.5 w-3.5" />
          <span>Sign In</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
