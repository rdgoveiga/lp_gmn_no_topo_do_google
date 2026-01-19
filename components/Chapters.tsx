import React from 'react';
import { Section } from './ui/Section';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export const Chapters = () => {
  const chapters = [
    { number: '01', title: 'Criando e Reivindicando seu Perfil' },
    { number: '02', title: 'Preenchendo as Informações Essenciais' },
    { number: '03', title: 'Pesquisa de Palavras-chave para SEO Local' },
    { number: '04', title: 'Publicando Fotos e Vídeos Regularmente' },
    { number: '05', title: 'Gerenciando Avaliações e Reputação' },
    { number: '06', title: 'Criando Postagens e Ofertas (Google Posts)' },
    { number: '07', title: 'Perguntas e Respostas (Q&A)' },
    { number: '08', title: 'Otimizando Atributos e Serviços Detalhados' },
    { number: '09', title: 'Incentive Ações com Links Estratégicos' },
    { number: '10', title: 'Monitoramento e Atividades Diárias' },
    { number: '11', title: 'Métricas e Resultados (Insights)' }
  ];

  const benefits = [
    "Aparecer nas primeiras posições quando buscarem seu serviço",
    "Receber clientes prontos para comprar, não curiosos",
    "Ter um perfil profissional que transmite confiança",
    "Parar de depender apenas de indicação boca a boca",
    "Saber exatamente o que postar e quando postar",
    "Dominar as métricas para melhorar sempre"
  ];

  return (
    <Section id="chapters" className="py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/50 text-amber-500 text-sm font-semibold uppercase tracking-wider mb-6 badge-pulse">
          <BookOpen className="w-4 h-4" />
          <span>O que você vai aprender</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Conteúdo <span className="text-amber-500">Prático</span> e Direto
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Cada capítulo foi criado para te guiar do zero à excelência no Google Business Profile
        </p>
      </div>

      {/* Chapters Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 max-w-6xl mx-auto">
        {chapters.map((chapter, index) => (
          <div 
            key={index}
            className="group flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 
              hover:border-amber-500/50 hover:bg-slate-800/80 hover:shadow-[0_4px_20px_rgba(245,158,11,0.1)] hover:-translate-y-1
              transition-all duration-300 cursor-default"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg shrink-0 transition-all duration-300 bg-slate-800 text-amber-500 group-hover:bg-amber-500/20 group-hover:text-amber-400 group-hover:scale-110">
              {chapter.number}
            </div>
            <h3 className="text-slate-200 font-medium text-sm md:text-base leading-snug group-hover:text-white transition-colors">
              {chapter.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Benefits Box */}
      <div className="max-w-5xl mx-auto bg-slate-900/50 rounded-2xl border border-slate-800 p-8 md:p-12 relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/10 transition-colors duration-500"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-10">
            Depois de aplicar o manual, você vai:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm md:text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};