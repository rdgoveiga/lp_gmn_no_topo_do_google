import React from 'react';
import { Button } from './ui/Button';
import { Star, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      {/* 
         DICA DE BACKGROUND: Para alterar a imagem de fundo:
         1. Suba sua imagem para o GitHub (ex: bg-hero.jpg)
         2. Altere a url abaixo para: bg-[url('/bg-hero.jpg')] 
      */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/50 text-amber-500 text-sm font-semibold mb-6 badge-pulse">
            <Star className="w-4 h-4 fill-amber-500" />
            <span>Best-seller em Marketing Local</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 text-white font-serif">
            Coloque sua Empresa <br/>
            <span className="text-gold-gradient">No Topo do </span>
            <span className="inline-flex">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            O Guia Completo que vai <span className="text-white font-semibold border-b-2 border-amber-500/50">transformar o seu perfil do Google em uma máquina de vendas.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-6">
            <Button size="xl" onClick={() => window.open("https://chk.eduzz.com/89AQ268GWD", "_blank")} className="cta-button-pulse">
              Quero Estar no Topo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Security Text Line */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Pagamento 100% seguro</span>
            </div>
            <span className="text-slate-600">•</span>
            <span>7 dias de garantia</span>
          </div>

          {/* Diagrammed Trust Badges Container */}
          <div className="flex flex-col sm:flex-row items-center bg-slate-900/60 border border-slate-800 rounded-xl backdrop-blur-md max-w-[500px] mx-auto lg:mx-0 overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-slate-800 shadow-lg">
            
            <div className="flex-1 w-full sm:w-auto flex items-center justify-center lg:justify-start gap-3 px-5 py-3 hover:bg-slate-800/50 transition-colors">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-sm font-medium text-slate-300">Garantia de 7 dias</span>
            </div>

            <div className="flex-1 w-full sm:w-auto flex items-center justify-center lg:justify-start gap-3 px-5 py-3 hover:bg-slate-800/50 transition-colors">
              <Zap className="w-5 h-5 text-amber-500 shrink-0" />
              <span className="text-sm font-medium text-slate-300">Acesso Imediato</span>
            </div>

            <div className="flex-1 w-full sm:w-auto flex items-center justify-center lg:justify-start gap-3 px-5 py-3 bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
               <div className="relative flex h-2.5 w-2.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
               </div>
               <span className="text-sm font-semibold text-white tracking-wide">Atualizado 2026</span>
            </div>
            
          </div>
        </div>

        {/* Book Visual */}
        {/* 
            DICA: Para usar uma IMAGEM REAL do seu livro ao invés deste desenho em código:
            1. Faça upload do arquivo da imagem (ex: capa-livro.png) no seu GitHub.
            2. Substitua todo o bloco <div> abaixo pela tag:
            <img src="./capa-livro.png" alt="Capa do Livro" className="w-full max-w-[400px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform" />
        */}
        <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none perspective-1000 mt-10 lg:mt-0">
          <div className="relative mx-auto w-[280px] sm:w-[350px] aspect-[1/1.4] bg-slate-800 rounded-r-2xl rounded-l-sm shadow-2xl transform rotate-y-12 transition-transform duration-500 hover:rotate-y-0 group">
             {/* Book Cover Design */}
             <div className="absolute inset-0 bg-[#161b22] rounded-r-2xl rounded-l-sm overflow-hidden border-r-4 border-slate-700/50 flex flex-col items-center justify-between py-12 px-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Texture overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
                
                <div className="relative z-10 w-full">
                  <div className="text-amber-500 text-xs tracking-[0.2em] uppercase font-bold mb-6">Manual Completo</div>
                  <h2 className="text-4xl font-serif font-bold text-white leading-none tracking-wide drop-shadow-lg">
                    VOCÊ<br/>
                    NO <span className="text-amber-500">TOPO</span><br/>
                    DO GOOGLE
                  </h2>
                </div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-slate-700 shadow-inner overflow-hidden">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Mountain */}
                      <path d="M2 20H22" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 4L4 20H20L12 4Z" fill="#1E293B" stroke="#475569" strokeWidth="1.5" strokeLinejoin="round" />
                      {/* Snow */}
                      <path d="M12 4L9 10L10.5 9L12 11L13.5 9L15 10L12 4Z" fill="#E2E8F0" />
                      {/* Pole */}
                      <line x1="12" y1="4" x2="12" y2="1" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
                      {/* Flag */}
                      <path d="M12 1L16 3L12 5" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="relative z-10 w-full">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-4"></div>
                  <p className="text-xs font-medium text-slate-500 tracking-widest uppercase">Rodrigo Veiga</p>
                </div>
             </div>
             
             {/* Book Spine Effect - Google Colors */}
             <div className="absolute top-0 bottom-0 left-0 w-5 flex flex-col rounded-l-sm overflow-hidden z-20">
               <div className="h-1/4 w-full bg-[#4285F4] relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
               </div>
               <div className="h-1/4 w-full bg-[#EA4335] relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
               </div>
               <div className="h-1/4 w-full bg-[#FBBC05] relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
               </div>
               <div className="h-1/4 w-full bg-[#34A853] relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
               </div>
               {/* Spine curvature shadow */}
               <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-white/5 to-black/20 pointer-events-none"></div>
             </div>
          </div>
          {/* Shadow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/60 blur-2xl rounded-[100%]"></div>
        </div>
      </div>
    </div>
  );
};