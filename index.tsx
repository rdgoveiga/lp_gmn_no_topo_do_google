
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Star, ArrowRight, ShieldCheck, Zap, SearchX, TrendingDown, 
  Wallet, Clock, Quote, Sparkles, CheckCircle2, Lightbulb, 
  ChevronLeft, ChevronRight, BookOpen, Headphones, Shield, Plus, Minus,
  Loader2, Rocket, LockOpen, CircleDollarSign, MapPinned
} from 'lucide-react';

// Import components
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Chapters } from './components/Chapters';
import { Author } from './components/Author';

// --- UI COMPONENTS ---

const Button = ({ variant = 'primary', size = 'md', isLoading, className = '', children, ...props }: any) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40",
    outline: "border-2 border-amber-500/50 text-amber-500 hover:bg-amber-500/10",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5"
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl w-full sm:w-auto"
  };
  return (
    <button className={`${baseStyles} ${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]} ${className}`} disabled={isLoading} {...props}>
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
};

const Section = ({ children, className = '', id }: any) => (
  <section id={id} className={`py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

// --- MAIN COMPONENTS ---

// Hero is now imported from components/Hero.tsx to support full-width image

const Solution = () => (
  <div className="bg-slate-900 border-y border-slate-800 relative overflow-hidden">
    <Section>
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
          {[
            { v: "126%", t: "mais tráfego para perfis otimizados", r: "-rotate-2" },
            { v: "93%", t: "mais conversões no top 3 do Google", r: "rotate-1" },
            { v: "76%", t: "visitam a loja em 24h após buscar", r: "-rotate-1" }
          ].map((s, i) => (
            <div key={i} className={`glass-card p-8 rounded-2xl border border-slate-700/50 transform ${s.r} hover:rotate-0 hover:scale-105 transition-all`}>
              <div className="flex items-center gap-6">
                <span className="text-4xl font-bold text-amber-500">{s.v}</span>
                <p className="text-slate-300">{s.t}</p>
              </div>
            </div>
          ))}
          <p className="text-slate-500 text-[10px] md:text-xs italic mt-2 text-center lg:text-left opacity-70">
            *Resultados médios observados em perfis locais após aplicação de otimização estratégica de SEO.
          </p>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/50 text-amber-500 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" /><span>O Mecanismo Único</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">O <span className="text-amber-500">Método Você no Topo do Google Local™</span></h2>
          
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
        </div>
      </div>
    </Section>
  </div>
);

const Pricing = () => (
  <Section id="pricing" className="py-24">
    <div className="max-w-3xl mx-auto relative bg-slate-900 rounded-3xl border border-slate-700 p-8 md:p-12 shadow-2xl">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
        <span className="bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest shadow-lg">Oferta Limitada</span>
      </div>
      <div className="text-center mt-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Método Você no Topo do Google Local™</h2>
        <p className="text-slate-500 text-sm line-through mb-2">De R$ 197,00</p>
        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="text-xl text-slate-200">Por apenas</span>
          <div className="flex items-baseline text-amber-500 font-bold">
            <span className="text-3xl sm:text-4xl mr-1">3x</span>
            <span className="text-3xl sm:text-4xl mr-2">R$</span>
            <span className="text-6xl sm:text-7xl tracking-tighter">6,41</span>
          </div>
        </div>
        <p className="text-slate-500 text-sm">Pagamento único • Acesso vitalício</p>
      </div>
      <Button size="xl" onClick={() => window.open("https://chk.eduzz.com/89AQ268GWD", "_blank")} className="w-full text-lg font-bold py-6 rounded-xl cta-button-pulse mb-10">Quero Aplicar o Método <ArrowRight className="ml-2 w-5 h-5" /></Button>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-400">
        <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-amber-500" /><span>7 dias de garantia</span></div>
        <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-amber-500" /><span>Acesso imediato</span></div>
      </div>
    </div>
  </Section>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-800 rounded-lg bg-slate-900/50 overflow-hidden mb-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-4 text-left text-slate-200 hover:bg-slate-800 transition-colors">
        <span className="font-medium">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-amber-500" /> : <Plus className="w-5 h-5 text-amber-500" />}
      </button>
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="p-4 pt-0 text-slate-400 text-sm leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => (
  <Section className="pb-32">
    <h2 className="text-3xl font-bold text-white text-center mb-12">Dúvidas sobre o Método</h2>
    <div className="max-w-2xl mx-auto">
      <FAQItem question="O que é o Método Você no Topo do Google Local™?" answer="É um sistema prático e validado, baseado nos 3 pilares fundamentais que o algoritmo do Google utiliza para classificar negócios locais: Relevância, Distância e Proeminência." />
      <FAQItem question="Em quanto tempo vejo resultados?" answer="Ao implementar os critérios do método, é comum observar aumentos na visibilidade e nas chamadas de clientes entre 15 a 30 dias." />
      <FAQItem question="Preciso de conhecimentos técnicos avançados?" answer="Não. O método foi desenhado para ser aplicado por qualquer dono de negócio, com tutoriais diretos e linguagem simples." />
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
    <div className="mb-6"><span className="text-xl font-serif font-bold text-white uppercase tracking-tighter">VOCÊ NO <span className="text-amber-500">TOPO</span> LOCAL™</span></div>
    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Rodrigo Veiga. Todos os direitos reservados.</p>
  </footer>
);

const App = () => (
  <div className="bg-brand-dark min-h-screen text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
    <Hero />
    <PainPoints />
    <Solution />
    <Chapters />
    <Author />
    <Pricing />
    <FAQ />
    <Footer />
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) createRoot(rootElement).render(<App />);
