
import React from 'react';
import { Button } from './ui/Button';
import { Star, ArrowRight, ShieldCheck, Check, RotateCcw, Sparkles, Verified } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* IMAGEM DE FUNDO */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
          alt="Background Hero" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/80 to-brand-dark"></div>
      </div>

      {/* Efeitos de Luz de Fundo */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      {/* SELO PROFISSIONAL (Desktop) */}
      <div className="hidden lg:block absolute top-12 right-12 z-20 animate-float">
        <div className="relative group perspective-1000">
          {/* Efeito de Brilho Externo */}
          <div className="absolute inset-0 bg-amber-500/20 rounded-3xl blur-2xl group-hover:bg-amber-500/40 transition-all duration-700"></div>
          
          <div className="relative w-60 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
            
            {/* Header do Selo */}
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-amber-500 rounded-lg p-1.5 shadow-lg shadow-amber-500/40">
                <Verified className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-[10px] font-black uppercase text-amber-500 tracking-tighter">Garantia de<br/>Simplicidade</span>
            </div>

            <h4 className="text-white font-bold text-xs mb-3 leading-tight">
              Aplique mesmo sem experiência em marketing.
            </h4>

            {/* Rodapé do Selo (O "CTA" da Garantia) */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-3 flex items-center justify-center gap-2 shadow-inner border border-white/10">
              <RotateCcw className="w-4 h-4 text-slate-900 animate-spin-slow" />
              <span className="text-[10px] font-black text-slate-900 uppercase leading-none">
                Devolução total se não funcionar
              </span>
            </div>

            {/* Detalhe Decorativo */}
            <div className="absolute -top-2 -right-2 bg-slate-950 border border-amber-500/30 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col items-center text-center">
        
        {/* SELO PROFISSIONAL (Mobile / Tablet) */}
        <div className="lg:hidden w-full max-w-sm px-5 py-4 rounded-3xl bg-slate-900/90 border border-amber-500/40 backdrop-blur-xl shadow-2xl mb-8 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 p-1.5 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-amber-500 font-black uppercase text-[10px] tracking-widest">Garantia de Simplicidade</span>
          </div>
          
          <p className="text-white font-bold text-sm text-left leading-snug">
            Aplique mesmo sem experiência em marketing.
          </p>
          
          <div className="bg-amber-500/10 border border-amber-500/20 py-2.5 px-3 rounded-xl flex items-center gap-2">
             <RotateCcw className="w-4 h-4 text-amber-500" />
             <span className="text-[10px] font-bold text-amber-500 uppercase tracking-tight">Devolução total se não funcionar</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/10 border-2 border-amber-500/60 text-amber-400 text-sm sm:text-base font-extrabold mb-10 badge-pulse shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-xl tracking-tight">
          <Star className="w-5 h-5 fill-amber-500 animate-[spin_4s_linear_infinite]" />
          <span className="uppercase tracking-widest">Método validado por + de 200 empresas</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 text-white font-serif drop-shadow-2xl">
          De invisível para <br className="hidden md:block" />
          <span className="text-gold-gradient">primeiro lugar no Google Local</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Pare de perder clientes para a concorrência. Aplique o <span className="text-amber-500 font-bold">Método Você no Topo do Google Local™</span> e transforme o seu perfil do Google em uma máquina de atração de clientes locais, aumentando o seu faturamento em poucos dias.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full mb-10">
          <Button size="xl" onClick={() => window.open("https://chk.eduzz.com/89AQ268GWD", "_blank")} className="cta-button-pulse w-full sm:w-auto text-lg px-12 py-5 shadow-2xl">
            Quero Aplicar o Método
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-300 bg-slate-900/40 py-3 px-8 rounded-2xl backdrop-blur-sm border border-slate-700/50">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span>Inscrição 100% Segura via Eduzz</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-amber-500 font-bold">
            <Check className="w-4 h-4" />
            <span>Passo a passo nível iniciante</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="hidden sm:inline">Garantia incondicional de 7 dias</span>
        </div>
      </div>
    </div>
  );
};
