
import React from 'react';
import { Button } from './ui/Button';
import { Star, ArrowRight, Check, RotateCcw, ShieldCheck } from 'lucide-react';

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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col items-center text-center">
        
        {/* BADGE SUPERIOR - MÉTODO VALIDADO */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/10 border-2 border-amber-500/60 text-amber-400 text-sm sm:text-base font-extrabold mb-8 badge-pulse shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-xl tracking-tight">
          <Star className="w-5 h-5 fill-amber-500 animate-[spin_4s_linear_infinite]" />
          <span className="uppercase tracking-widest">Método validado por + de 200 empresas</span>
        </div>

        {/* DISCLAIMER DE URGÊNCIA */}
        <div className="w-full max-w-2xl mb-10">
          <div className="bg-red-500/5 border border-red-500/20 py-3 px-6 rounded-xl flex items-center justify-center gap-3 backdrop-blur-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
            <p className="text-red-500 text-sm md:text-base font-bold text-center">
              Esta oferta é válida apenas agora. Ao sair da página, o desconto expira.
            </p>
          </div>
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

        {/* BARRA DE CONFIANÇA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-300 bg-slate-900/40 py-3 px-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 mb-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span>Inscrição 100% Segura</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-amber-500 font-bold">
            <Check className="w-4 h-4" />
            <span>Passo a passo nível iniciante</span>
          </div>
        </div>

        {/* NOVO SELO DE GARANTIA (Reposicionado abaixo do Trust Bar) */}
        <div className="w-full max-w-md mx-auto">
          <div className="relative group perspective-1000">
            {/* Efeito de Brilho Suave */}
            <div className="absolute inset-0 bg-amber-500/10 rounded-[2rem] blur-xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
            
            <div className="relative bg-[#0F172A] border border-amber-500/30 p-6 md:p-8 rounded-[2rem] shadow-2xl flex flex-col gap-5 text-left transition-transform duration-500 hover:scale-[1.02]">
              
              {/* Header do Selo */}
              <div className="flex items-center gap-4">
                <div className="bg-amber-500 p-2.5 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                  <ShieldCheck className="w-6 h-6 text-[#0F172A]" />
                </div>
                <span className="text-amber-500 font-black uppercase text-xs md:text-sm tracking-[0.15em] leading-tight">
                  Garantia de <br className="md:hidden" /> Simplicidade
                </span>
              </div>

              {/* Conteúdo Principal */}
              <p className="text-white font-bold text-base md:text-lg leading-snug">
                Aplique mesmo sem experiência em marketing.
              </p>

              {/* Pill de CTA da Garantia */}
              <div className="bg-transparent border border-amber-500/40 py-3 px-4 rounded-xl flex items-center gap-3">
                 <RotateCcw className="w-5 h-5 text-amber-500" />
                 <span className="text-[11px] md:text-xs font-black text-amber-500 uppercase tracking-widest leading-none">
                   Devolução total se não funcionar
                 </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
