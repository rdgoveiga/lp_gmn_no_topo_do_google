import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CheckCircle2, ShieldCheck, Zap, Headphones, Shield, ArrowRight } from 'lucide-react';

export const Pricing = () => {
  const handleBuyClick = () => {
    window.open("https://chk.eduzz.com/89AQ268GWD", "_blank");
  };

  return (
    <Section id="pricing" className="py-24">
      <div className="max-w-3xl mx-auto">
        {/* Main Card */}
        <div className="relative bg-slate-900 rounded-3xl border border-slate-700 p-8 md:p-12 shadow-2xl overflow-visible">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-3xl rounded-full -z-10"></div>

            {/* Top Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                <span className="bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                    Oferta Especial
                </span>
            </div>

            {/* Header */}
            <div className="text-center mt-6 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                    Você no Topo do Google
                </h2>
                <p className="text-slate-400 text-lg font-light">
                    O Manual Completo de Google Business Profile
                </p>
            </div>

            {/* Price */}
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

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-y-5 gap-x-8 max-w-xl mx-auto mb-12">
                {[
                    "12 capítulos completos",
                    "Estratégias atualizadas 2026",
                    "Exemplos práticos reais",
                    "Acesso vitalício ao conteúdo"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                        <span className="text-slate-200 text-sm md:text-base">{item}</span>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="max-w-md mx-auto mb-10 text-center">
                 <Button 
                  size="xl" 
                  onClick={handleBuyClick} 
                  className="w-full shadow-amber-500/20 hover:shadow-amber-500/40 text-lg font-bold py-5 rounded-xl group cta-button-pulse"
                >
                  Quero Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            {/* Icons Row */}
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
                    <span>Suporte via Eduzz</span>
                </div>
            </div>

            {/* Guarantee Box */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 flex flex-col md:flex-row items-start gap-4 hover:border-amber-500/20 transition-colors">
                <Shield className="w-10 h-10 text-amber-500 shrink-0 mt-1" />
                <div>
                    <h4 className="text-white font-bold mb-2">Garantia de 7 dias</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Se por qualquer motivo você não ficar satisfeito, basta solicitar o reembolso em até 7 dias pela plataforma Eduzz e devolvemos 100% do seu investimento. Sem perguntas.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </Section>
  );
};