import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Star, ArrowRight, ShieldCheck, Zap, SearchX, TrendingDown, 
  Wallet, Clock, Quote, Sparkles, CheckCircle2, Lightbulb, 
  ChevronLeft, ChevronRight, BookOpen, Headphones, Shield, Plus, Minus,
  Loader2
} from 'lucide-react';

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

const Hero = () => (
  <div className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
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

      <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none perspective-1000 mt-10 lg:mt-0">
        <div className="relative mx-auto w-[280px] sm:w-[350px] aspect-[1/1.4] bg-slate-800 rounded-r-2xl rounded-l-sm shadow-2xl transform rotate-y-12 transition-transform duration-500 hover:rotate-y-0 group">
           <div className="absolute inset-0 bg-[#161b22] rounded-r-2xl rounded-l-sm overflow-hidden border-r-4 border-slate-700/50 flex flex-col items-center justify-between py-12 px-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
              <div className="relative z-10 w-full">
                <div className="text-amber-500 text-xs tracking-[0.2em] uppercase font-bold mb-6">Manual Completo</div>
                <h2 className="text-4xl font-serif font-bold text-white leading-none tracking-wide drop-shadow-lg">
                  VOCÊ<br/>NO <span className="text-amber-500">TOPO</span><br/>DO GOOGLE
                </h2>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-slate-700 shadow-inner overflow-hidden">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 20H22" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 4L4 20H20L12 4Z" fill="#1E293B" stroke="#475569" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M12 1L16 3L12 5" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="relative z-10 w-full">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-4"></div>
                <p className="text-xs font-medium text-slate-500 tracking-widest uppercase">Rodrigo Veiga</p>
              </div>
           </div>
           <div className="absolute top-0 bottom-0 left-0 w-5 flex flex-col rounded-l-sm overflow-hidden z-20">
             <div className="h-1/4 w-full bg-[#4285F4] relative"><div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div></div>
             <div className="h-1/4 w-full bg-[#EA4335] relative"><div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div></div>
             <div className="h-1/4 w-full bg-[#FBBC05] relative"><div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div></div>
             <div className="h-1/4 w-full bg-[#34A853] relative"><div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div></div>
             <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-white/5 to-black/20 pointer-events-none"></div>
           </div>
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/60 blur-2xl rounded-[100%]"></div>
      </div>
    </div>
  </div>
);

const PainPoints = () => {
  const pains = [
    { icon: <SearchX className="w-10 h-10 text-red-400" />, title: "Invisível no Google", description: "Seus concorrentes aparecem primeiro, mesmo sendo menos qualificados que você." },
    { icon: <TrendingDown className="w-10 h-10 text-red-400" />, title: "Depende só de indicação", description: "Sem previsibilidade de clientes. Um mês bom, outro ruim. Agenda instável." },
    { icon: <Wallet className="w-10 h-10 text-red-400" />, title: "Já perdeu dinheiro", description: "Tentou agências, impulsionou posts, fez cursos rasos... e nada funcionou de verdade." },
    { icon: <Clock className="w-10 h-10 text-red-400" />, title: "Sem tempo para marketing", description: "Você é bom no que faz, mas não foi treinado para vender. E o tempo é curto." }
  ];
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Você tem um Produto Incrível,<br /><span className="text-amber-500">Mas um Marketing Invisível?</span></h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Não adianta ser o melhor da cidade se o cliente não consegue te encontrar.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {pains.map((pain, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl hover:border-red-500/50 transition-all flex flex-col items-start h-full">
            <div className="bg-red-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 shrink-0">{pain.icon}</div>
            <h3 className="text-lg font-bold text-white mb-3">{pain.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{pain.description}</p>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-slate-700 relative">
         <Quote className="absolute top-6 left-6 w-10 h-10 text-slate-600 opacity-20" />
         <div className="relative z-10 text-center">
            <p className="text-xl md:text-2xl text-slate-200 font-serif italic mb-6">"Vejo concorrente ruim lotado e não entendo por quê. O que estou fazendo de errado no Google?"</p>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">— Pensamento comum de profissionais competentes</p>
         </div>
      </div>
    </Section>
  );
};

const Solution = () => (
  <div className="bg-slate-900 border-y border-slate-800 relative overflow-hidden">
    <Section>
      <div className="flex flex-col lg:flex-row items-center gap-16">
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
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/50 text-amber-500 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" /><span>A solução</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">O único guia com o método <span className="text-amber-500">COMPLETO</span></h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">Diferente de qualquer mini curso do mercado, este manual te guia passo a passo para deixar seu perfil do Google <strong className="text-white">PERFEITO</strong>.</p>
          <ul className="space-y-4 mb-10">
            {["Método passo a passo comprovado", "Sem termos técnicos complicados", "Resultados visíveis em semanas", "Aplicável a qualquer negócio local"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="w-5 h-5 text-amber-500" /><span className="text-lg">{item}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  </div>
);

const Chapters = () => {
  const chapters = [
    { n: '01', t: 'Criando e Reivindicando seu Perfil' }, { n: '02', t: 'Preenchendo Informações Essenciais' },
    { n: '03', t: 'SEO Local e Palavras-chave' }, { n: '04', t: 'Publicando Fotos e Vídeos' },
    { n: '05', t: 'Gerenciando Avaliações' }, { n: '06', t: 'Postagens e Ofertas (Google Posts)' },
    { n: '07', t: 'Perguntas e Respostas (Q&A)' }, { n: '08', t: 'Otimizando Serviços' },
    { n: '09', t: 'Links Estratégicos' }, { n: '10', t: 'Atividades Diárias' },
    { n: '11', t: 'Métricas e Resultados' }
  ];
  return (
    <Section id="chapters">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Conteúdo <span className="text-amber-500">Prático</span> e Direto</h2>
        <p className="text-slate-400">Cada capítulo foi criado para te guiar do zero à excelência.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {chapters.map((c, i) => (
          <div key={i} className="group flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/80 transition-all cursor-default">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-amber-500 bg-slate-800 group-hover:bg-amber-500/20">{c.n}</div>
            <h3 className="text-slate-200 font-medium text-sm md:text-base">{c.t}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Pricing = () => (
  <Section id="pricing" className="py-24">
    <div className="max-w-3xl mx-auto relative bg-slate-900 rounded-3xl border border-slate-700 p-8 md:p-12 shadow-2xl">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
        <span className="bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest shadow-lg">Oferta Especial</span>
      </div>
      <div className="text-center mt-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Você no Topo do Google</h2>
        <p className="text-slate-500 text-sm line-through mb-2">De R$ 197,00</p>
        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="text-xl text-slate-200">Por apenas</span>
          <div className="flex items-baseline text-amber-500 font-bold">
            <span className="text-3xl sm:text-4xl mr-1">3x</span>
            <span className="text-3xl sm:text-4xl mr-2">R$</span>
            <span className="text-6xl sm:text-7xl tracking-tighter">6,41</span>
          </div>
        </div>
        <p className="text-slate-500 text-sm">Pagamento único • Acesso imediato</p>
      </div>
      <Button size="xl" onClick={() => window.open("https://chk.eduzz.com/89AQ268GWD", "_blank")} className="w-full text-lg font-bold py-6 rounded-xl cta-button-pulse mb-10">Quero Começar Agora <ArrowRight className="ml-2 w-5 h-5" /></Button>
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
    <h2 className="text-3xl font-bold text-white text-center mb-12">Perguntas Frequentes</h2>
    <div className="max-w-2xl mx-auto">
      <FAQItem question="Para quem é este ebook?" answer="Para donos de negócios locais (lojas, clínicas, escritórios) que querem aparecer no Google sem depender apenas de anúncios." />
      <FAQItem question="Preciso de conhecimento técnico?" answer="Não. O guia foi escrito com linguagem simples e passo-a-passo ilustrado." />
      <FAQItem question="Como recebo o material?" answer="Imediatamente após a aprovação do pagamento via e-mail pela Eduzz." />
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
    <div className="mb-6"><span className="text-xl font-serif font-bold text-white">VOCÊ NO <span className="text-amber-500">TOPO</span></span></div>
    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Rodrigo Veiga. Todos os direitos reservados.</p>
  </footer>
);

const App = () => (
  <div className="bg-brand-dark min-h-screen text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
    <Hero />
    <PainPoints />
    <Solution />
    <Chapters />
    <Pricing />
    <FAQ />
    <Footer />
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) createRoot(rootElement).render(<App />);