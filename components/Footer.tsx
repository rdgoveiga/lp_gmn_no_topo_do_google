import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="text-xl font-serif font-bold text-white">VOCÊ NO <span className="text-amber-500">TOPO</span></span>
        </div>
        <p className="text-slate-500 text-sm mb-8">
          © {new Date().getFullYear()} Rodrigo Veiga. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 text-xs text-slate-600">
          <a href="#" className="hover:text-slate-400">Termos de Uso</a>
          <a href="#" className="hover:text-slate-400">Política de Privacidade</a>
          <a href="#" className="hover:text-slate-400">Contato</a>
        </div>
      </div>
    </footer>
  );
};