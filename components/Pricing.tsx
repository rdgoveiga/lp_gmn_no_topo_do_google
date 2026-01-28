
import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CheckCircle2, ShieldCheck, Zap, Headphones, Shield, ArrowRight, TrendingUp } from 'lucide-react';

export const Pricing = () => {
  const handleBuyClick = () => {
    window.open("https://chk.eduzz.com/89AQ268GWD", "_blank");
  };

  return (
    <Section id="pricing" className="py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-[10px] uppercase tracking-widest mb-6">
            <TrendingUp className="w-3 h-3" />
            <span>Invista no seu Posicionamento</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Quanto vale estar no topo do Google?</h2>
          <div className="max-w-xl mx-auto space-y-4">
            <p className="text-slate-300 text-lg leading-relaxed">
              Um único cliente perdido por semana já custa mais do que o investimento neste método.
            </p>
            <p className="text-slate-400">
              Aqui, você não está comprando um curso. <br className="hidden md:block" />
              <span className="text-white font-semibold">Está adquirindo um sistema de posicionamento local.</span>
            </p>
          </div>
        </div>

        {/* DISCLAIMER DE URGÊNCIA NO PREÇO - STYLING REFINADO */}
        <div className="w-full mb-8">
          <div className="bg-[#1a0a0a] border border-red-900/40 py-4 px-6 rounded-2xl flex items-center justify-center gap-4 backdrop-blur-md shadow-2xl">
            <div className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
            </div>
            <p className="text-red-600 text-sm md:text-base font-extrabold text-center tracking-tight">
              Esta oferta é válida apenas agora. Ao sair da página, o desconto expira.
            </p>
          </div>
        </div>

        <div className="relative bg-slate-900 rounded-3xl border border-slate-700 p-8 md:p-12 shadow-2xl overflow-visible">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-3xl rounded-full -z-10"></div>

            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                <span className="bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                    Oferta de Lançamento
                </span>
            </div>

            <div className="text-center mt-6 mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                    Método Você no Topo do Google Local™
                </h2>
                <p className="text-slate-400 text-lg font-light">
                    O Sistema Definitivo de Rankeamento e Vendas Locais
                </p>
            </div>

            <div className="text-center mb-12">
                <p className="text-slate-500 text-sm line-through mb-2">De R$ 197,00</p>
                <div className="flex items-baseline justify-center gap-2 mb-3">
                    <span className="text-xl md:text-2xl text-slate-200">Por apenas</span>
                    <div className="flex items-baseline text-amber-500 font-bold">
                        <span className="text-3xl sm:text-4xl mr-1">3x</span>
                        <span className="text-3xl sm:text-4xl mr-2">R$</span>
                        <span className="text-6xl sm:text-7xl tracking-tighter">6,41</span>
                    </div>
                </div>
                <p className="text-slate-500 text-sm font-medium tracking-wide">Acesso vitalício • Pagamento único • Acesso imediato</p>
            </div>

            <div className="grid md:grid-cols-2 gap-y-5 gap-x-8 max-w-xl mx-auto mb-12">
                {[
                    "Método Passo a Passo 2026",
                    "Acesso Vitalício ao Conteúdo",
                    "Sistema de Conversão Imediata",
                    "Manual de Blindagem de Perfil"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                        <span className="text-slate-200 text-sm md:text-base">{item}</span>
                    </div>
                ))}
            </div>

            <div className="max-w-md mx-auto mb-10 text-center">
                 <Button 
                  size="xl" 
                  onClick={handleBuyClick} 
                  className="w-full shadow-amber-500/20 hover:shadow-amber-500/40 text-lg font-bold py-5 rounded-xl group cta-button-pulse"
                >
                  Quero Aplicar o Método Agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs md:text-sm text-slate-400 mb-10">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                    <span>7 dias de garantia</span>
                </div>
                <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-amber-500" />
                    <span>Suporte VIP Eduzz</span>
                </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 flex flex-col md:flex-row items-start gap-4 hover:border-amber-500/20 transition-colors">
                <Shield className="w-10 h-10 text-amber-500 shrink-0 mt-1" />
                <div>
                    <h4 className="text-white font-bold mb-2">Garantia Blindada</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Experimente o Método Você no Topo do Google Local™ por 7 dias. Se você achar que o sistema não é para você, devolvemos 100% do seu dinheiro. O risco é todo meu.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};
