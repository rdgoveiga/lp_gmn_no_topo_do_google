
import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, Lightbulb, Sparkles, Rocket, LockOpen, CircleDollarSign, MapPinned, Info } from 'lucide-react';

export const Solution = () => {
  return (
    <div className="bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
      <Section>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1 px-4 sm:px-0">
            {[
              { v: "126%", t: "mais tráfego para perfis otimizados", r: "-rotate-2" },
              { v: "93%", t: "mais conversões no top 3 do Google", r: "rotate-1" },
              { v: "76%", t: "visitam a loja em 24h após buscar", r: "-rotate-1" }
            ].map((s, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-2xl border border-slate-700/50 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-bold text-amber-500">{s.v}</span>
                    <p className="text-slate-300 text-sm md:text-base">{s.t}</p>
                </div>
              </div>
            ))}
            <p className="text-slate-500 text-[10px] md:text-xs italic mt-2 text-center lg:text-left opacity-70">
                *Resultados médios observados em estudos de SEO local e análises de perfis otimizados.
            </p>

            {/* NOVA ADIÇÃO 1: POR QUE ALGUMAS EMPRESAS DOMINAM */}
            <div className="mt-10 p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 relative group">
              <h3 className="text-xl font-bold text-white mb-6">Por que algumas empresas dominam o Google Local?</h3>
              <div className="space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">Não é sorte. Não é tamanho. E não é investimento em anúncios.</p>
                <div className="space-y-3">
                  {[
                    "Informações organizadas do jeito que o algoritmo entende",
                    "Autoridade construída dentro do próprio Google",
                    "Atividade constante que sinaliza relevância"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-amber-500 font-semibold text-sm pt-4 border-t border-slate-700/50">
                  👉 O Método Você no Topo do Google Local™ existe para organizar tudo isso em um sistema replicável.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/50 text-amber-500 text-sm font-semibold mb-6 badge-pulse">
                <Sparkles className="w-4 h-4" />
                <span>O Diferencial</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              O <span className="text-amber-500">Método Você no Topo do Google Local™</span>
            </h2>
            
            <p className="text-slate-200 text-xl font-medium mb-6">No método você aprende a:</p>
            
            <ul className="space-y-6 mb-10">
              {[
                "Ativar os fatores invisíveis que fazem o Google confiar no seu negócio",
                "Transformar visualizações em visitas, ligações e mensagens",
                "Construir autoridade local mesmo competindo com empresas maiores",
                "Manter seu perfil relevante sem depender de anúncios"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 relative shadow-lg">
                <div className="flex gap-4">
                    <Lightbulb className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                    <p className="text-slate-300 text-sm md:text-base italic leading-relaxed">
                        "O Método Você no Topo do Google Local™ é um passo a passo prático baseado nos critérios que o Google usa para destacar empresas locais."
                    </p>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">A Anatomia do Método:</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Rocket className="w-10 h-10 text-amber-500" />, title: "Rankeamento Veloz", desc: "Como ser a primeira resposta do Google para quem está pronto para comprar na sua região." },
              { icon: <LockOpen className="w-10 h-10 text-amber-500" />, title: "Chaves de Confiança", desc: "Técnicas psicológicas para fazer o Google confiar no seu perfil mais do que nos outros." },
              { icon: <CircleDollarSign className="w-10 h-10 text-amber-500" />, title: "Motor de Clientes", desc: "Não focamos em curtidas, focamos em transformar o clique no Google em dinheiro no seu bolso." },
              { icon: <MapPinned className="w-10 h-10 text-amber-500" />, title: "Cerco Territorial", desc: "Como bloquear o crescimento da concorrência e se tornar a autoridade única do bairro." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl hover:bg-slate-800/80 hover:border-amber-500/40 hover:-translate-y-2 transition-all duration-300">
                <div className="bg-amber-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
