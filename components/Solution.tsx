import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, Lightbulb, Sparkles } from 'lucide-react';

export const Solution = () => {
  return (
    <div className="bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
      <Section>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Stats */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1 px-4 sm:px-0">
            {/* Card 1 */}
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-700/50 
              transform -rotate-2 lg:mr-8
              hover:rotate-0 hover:scale-105 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] 
              transition-all duration-300 cursor-default relative z-10">
                <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-bold text-amber-500 shrink-0 drop-shadow-sm">126%</span>
                    <p className="text-slate-300 text-sm md:text-base leading-snug">mais tráfego para perfis otimizados</p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-700/50 
              transform rotate-1 lg:ml-8
              hover:rotate-0 hover:scale-105 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] 
              transition-all duration-300 cursor-default relative z-20">
                <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-bold text-amber-500 shrink-0 drop-shadow-sm">93%</span>
                    <p className="text-slate-300 text-sm md:text-base leading-snug">mais conversões no top 3 do Google</p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-700/50 
              transform -rotate-1 lg:mr-4
              hover:rotate-0 hover:scale-105 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] 
              transition-all duration-300 cursor-default relative z-10">
                <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-bold text-amber-500 shrink-0 drop-shadow-sm">76%</span>
                    <p className="text-slate-300 text-sm md:text-base leading-snug">visitam a loja em 24h após buscar</p>
                </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/50 text-amber-500 text-sm font-semibold mb-6 badge-pulse">
                <Sparkles className="w-4 h-4" />
                <span>A solução</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              O único guia com o método <span className="text-amber-500">COMPLETO</span>
            </h2>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Diferente de qualquer mini curso do mercado, este manual te guia passo a passo para deixar seu perfil do Google <strong className="text-white">PERFEITO</strong>, profissional e preparado para receber clientes qualificados, prontos para comprar.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Método passo a passo comprovado",
                "Sem termos técnicos complicados",
                "Resultados visíveis em semanas",
                "Aplicável a qualquer negócio local"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 relative shadow-lg">
                <div className="flex gap-4">
                    <Lightbulb className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                    <p className="text-slate-300 text-sm md:text-base italic leading-relaxed">
                        No fundo, você não quer marketing. <span className="text-amber-400 font-semibold">Você quer segurança.</span> Clientes chegando toda semana. Previsibilidade. Tranquilidade.
                    </p>
                </div>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};