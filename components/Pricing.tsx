
import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ShieldCheck, Zap, ArrowRight, Clock, Shield } from 'lucide-react';

export const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState(420); // 7 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBuyClick = () => {
    window.open("https://chk.eduzz.com/89AQ268GWD", "_blank");
  };

  return (
    <Section id="pricing" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Urgency Timer Bar */}
        <div className="w-full mb-10">
          <div className="bg-[#1a0a0a] border border-red-900/40 py-3 px-6 rounded-2xl flex items-center justify-center gap-4 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </div>
              <p className="text-red-600 text-xs md:text-sm font-black uppercase tracking-widest">
                A oferta encerra em:
              </p>
            </div>
            <div className="flex items-center gap-2 bg-red-600/10 px-3 py-1 rounded-lg border border-red-600/20">
              <Clock className="w-4 h-4 text-red-600" />
              <span className="text-red-600 font-black text-xl md:text-2xl font-mono tabular-nums leading-none">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Card - Exact Match to Reference Image */}
        <div className="relative bg-[#0a1120] rounded-[2.5rem] border border-slate-800 p-8 md:p-16 shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-visible text-center">
          
          {/* Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
            <span className="bg-[#f59e0b] text-slate-900 font-black px-10 py-3 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              Oferta Limitada
            </span>
          </div>

          {/* Product Title */}
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight max-w-2xl mx-auto">
            Método Você no Topo do Google Local™
          </h2>

          {/* Pricing Details */}
          <div className="mb-12">
            <p className="text-slate-500 text-sm md:text-base line-through mb-4">De R$ 197,00</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              <span className="text-lg md:text-2xl text-slate-300 font-medium">Por apenas</span>
              <div className="flex items-baseline text-[#f59e0b] font-black">
                <span className="text-3xl md:text-4xl mr-1">3x</span>
                <span className="text-3xl md:text-4xl mr-2">R$</span>
                <span className="text-7xl md:text-9xl tracking-tighter leading-none">6,41</span>
              </div>
            </div>
          </div>

          {/* Centralized CTA Button */}
          <div className="max-w-md mx-auto mb-14">
            <Button 
              size="xl" 
              onClick={handleBuyClick} 
              className="w-full bg-[#f59e0b] hover:bg-amber-400 text-slate-900 shadow-[0_10px_40px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_50px_rgba(245,158,11,0.5)] text-lg md:text-xl font-black py-7 rounded-2xl group transition-all transform hover:scale-[1.03] flex items-center justify-center"
            >
              Quero Aplicar o Método
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Badges - Updated as per request */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-[0.15em]">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#f59e0b]" />
              <span>7 dias de garantia</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-[#f59e0b]" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-[#f59e0b]" />
              <span>Acesso vitalício</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
