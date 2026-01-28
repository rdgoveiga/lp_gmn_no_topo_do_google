
import React from 'react';
import { Section } from './ui/Section';
import { 
  BookOpen, CheckCircle2, History, Target, TrendingUp, TrendingDown, 
  XCircle, CheckCircle, ArrowDown, Zap, HelpCircle, Image, 
  MessageSquare, ListChecks, ShieldCheck, BarChart3, Search,
  AlertCircle, MapPinOff, MousePointerClick, Trophy, Ban,
  PlusCircle, LayoutDashboard, Settings2
} from 'lucide-react';

export const Chapters = () => {
  const modules = [
    {
      number: '01',
      title: 'Módulo 1 – Configuração do Perfil do Zero',
      icon: <Settings2 className="w-8 h-8 text-amber-500" />,
      description: 'Iniciamos por esse módulo para oferecer um suporte completo a quem ainda não possui o perfil, trazendo o passo a passo para criação, verificação e preenchimento completo do perfil sem erros.',
      extra: '(Se você já possui um perfil, é possível pular de forma simples para o módulo de otimização)'
    },
    {
      number: '02',
      title: 'Módulo 2 – Otimização para Aparecer e Converter Clientes',
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      description: 'Conteúdo, fotos, avaliações e tudo que faz o perfil aparecer mais e gerar contatos.',
      extra: 'Onde aplicamos a engenharia reversa do algoritmo.'
    },
    {
      number: '03',
      title: 'Módulo 3 – Rotina, Resultados e Crescimento Contínuo',
      icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
      description: 'Manutenção simples, métricas e ajustes para crescer todos os meses.',
      extra: 'Foco em previsibilidade e faturamento constante.'
    }
  ];

  const benefits = [
    <span><strong>Aparecer no topo</strong> quando buscarem pelo o que você vende hoje.</span>,
    <span>Ter um perfil profissional que <strong>anula qualquer concorrência.</strong></span>,
    <span><strong>Saber exatamente o que postar</strong> para o algoritmo te favorecer.</span>,
    <span><strong>Receber clientes decididos a comprar</strong>, eliminando curiosos.</span>,
    <span><strong>Parar de depender de indicações</strong> e ter previsibilidade.</span>,
    <span>Dominar o jogo local de forma simples e sem dor de cabeça</span>
  ];

  return (
    <div className="relative">
      {/* ETAPA 1: O GRANDE DIVISOR DE ÁGUAS */}
      <Section className="pb-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
              <History className="w-4 h-4" />
              <span>Diagnóstico de Posicionamento</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Onde sua empresa está <br className="hidden md:block" />
              <span className="text-amber-500">travada hoje?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A diferença entre ser ignorado e ser a escolha número #1 é utilizar as <span className="text-white font-semibold">estratégias certas e validadas</span> pelo Google.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 items-stretch relative rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl">
            {/* O LADO DA DOR: O PERFIL QUEBRADO */}
            <div className="bg-slate-950 p-8 md:p-12 relative">
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-red-500/20">
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-red-500" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-slate-400">O Ciclo da Invisibilidade</h4>
              </div>

              <div className="space-y-8">
                <div className="group flex gap-5 items-start">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 group-hover:border-red-500/30 transition-colors">
                    <MapPinOff className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Configuração Incorreta</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Perfil com dados vagos ou categorias erradas que fazem o Google te considerar "irrelevante" e te esconder do mapa.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-5 items-start">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 group-hover:border-red-500/30 transition-colors">
                    <Search className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Marketing de Esperança</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Postar por postar sem saber que o Google exige palavras-chave específicas escondidas na sua estrutura de dados.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-5 items-start">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 group-hover:border-red-500/30 transition-colors">
                    <Ban className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Abandono Digital</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Um perfil "fantasma" que não gera confiança. Seu perfil passa despercebido, o cliente <span className="text-white font-bold">escolhe o concorrente</span> e você nem imagina o motivo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-3 bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-red-400/80 text-sm font-medium">Você está perdendo faturamento real todos os dias.</p>
              </div>
            </div>

            {/* O LADO DA SOLUÇÃO: MÉTODO VOCÊ NO TOPO */}
            <div className="bg-slate-900 p-8 md:p-12 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-amber-500/20 relative z-10">
                <div className="bg-amber-500 p-2 rounded-lg">
                  <Trophy className="w-6 h-6 text-slate-900" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">Método Você no Topo</h4>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="group flex gap-5 items-start">
                  <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
                    <ShieldCheck className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Arquitetura de Domínio</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Configuração milimétrica que <span className="text-amber-500 font-bold">força</span> o algoritmo a te colocar nas 3 primeiras posições.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-5 items-start">
                  <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
                    <MousePointerClick className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Ímã de Cliques</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Engenharia visual e copywriting para negócios locais. O cliente bate o olho e <span className="text-amber-500 font-bold">não tem outra escolha</span> a não ser clicar.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-5 items-start">
                  <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
                    <BarChart3 className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Escala de Faturamento</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Um sistema que trabalha 24h por você, trazendo pessoas que já estão com o cartão na mão prontas para comprar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="bg-gradient-to-r from-amber-500/20 to-transparent p-[1px] rounded-xl">
                  <div className="bg-slate-900/80 p-4 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <p className="text-amber-500 font-bold text-sm tracking-tight uppercase">Transformação Imediata após a aplicação.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating VS Badge */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-dark border-4 border-slate-800 rounded-full items-center justify-center z-20 shadow-2xl">
              <span className="text-slate-600 font-black text-xl italic">VS</span>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="bg-gradient-to-r from-amber-600 to-amber-400 p-[2px] rounded-2xl shadow-[0_10px_40px_rgba(245,158,11,0.3)] group hover:scale-105 transition-transform duration-500">
              <div className="bg-slate-950 px-8 py-6 rounded-2xl flex flex-col md:flex-row items-center gap-4">
                 <p className="text-white font-bold text-xl md:text-2xl text-center md:text-left leading-tight">
                    É por isso que ele funciona mesmo para quem <br className="hidden md:block" />
                    <span className="text-amber-500">não entende nada de marketing.</span>
                 </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DIVIDER ESTRUTURAL */}
      <div className="flex justify-center py-12">
        <ArrowDown className="w-8 h-8 text-slate-800 animate-bounce" />
      </div>

      {/* ETAPA 2: O PLANO DE DOMINAÇÃO (MODULAR) */}
      <Section id="chapters" className="pt-10 pb-20 bg-slate-900/30 rounded-[3rem] border border-slate-800/50">
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/50 text-amber-500 text-sm font-semibold uppercase tracking-wider mb-6 badge-pulse">
            <BookOpen className="w-4 h-4" />
            <span>O Plano de Dominação</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O conteúdo do <span className="text-amber-500">Método Você no Topo do Google Local™.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Organizado em <span className="text-white font-semibold">3 fases lógicas</span> para que você possa implementar e ver resultados o mais rápido possível.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-20 max-w-5xl mx-auto px-4">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="group relative flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 
                hover:border-amber-500/30 hover:bg-slate-800/50 hover:shadow-[0_10px_50px_rgba(0,0,0,0.5)]
                transition-all duration-500"
            >
              {/* Module Number Decoration */}
              <div className="absolute top-4 right-8 text-6xl md:text-8xl font-black text-slate-800/30 select-none group-hover:text-amber-500/10 transition-colors">
                {module.number}
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 shrink-0 w-fit h-fit relative z-10 group-hover:border-amber-500/20 transition-colors">
                {module.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">
                  {module.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  {module.description}
                </p>
                <p className="text-slate-500 text-sm italic">
                  {module.extra}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ETAPA 3: O QUE ACONTECE APÓS APLICAR */}
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-16 relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500 shadow-2xl mx-4">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              O que acontece após você aplicar o Método:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-2">
                  <div className="bg-amber-500/20 p-1 rounded-full shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  </div>
                  <p className="text-slate-300 text-lg leading-snug">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ETAPA 4: FUTURO + QUALIFICAÇÃO */}
      <Section className="pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Bloco Futuro */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 shadow-2xl relative group">
            <div className="absolute -top-6 -left-6 bg-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform">
              <TrendingUp className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 pt-4">Como seu negócio passa a ser visto no Google</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Após aplicar o methodo, seu perfil deixa de ser apenas “mais um” e passa a funcionar como um ativo de vendas local.
            </p>
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-4 text-slate-200">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-lg font-medium">Clientes chegam mais decididos</span>
              </li>
              <li className="flex items-center gap-4 text-slate-200">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-lg font-medium">Sua empresa é percebida como referência</span>
              </li>
              <li className="flex items-center gap-4 text-slate-200">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-lg font-medium">Concorrentes deixam de ser opção</span>
              </li>
            </ul>
            <div className="bg-amber-500/10 p-6 rounded-2xl border border-amber-500/20">
              <p className="text-white font-bold text-xl text-center">
                👉 Você para de disputar preço e passa a disputar autoridade.
              </p>
            </div>
          </div>

          {/* Bloco Objeções / Qualificação */}
          <div className="p-10 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="bg-slate-800 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Isso é para você se…</h3>
              
              <div className="space-y-6">
                {[
                  "Você quer estar entre os primeiros resultados do Google",
                  "Seu negócio atende uma região específica",
                  "Você quer previsibilidade, não sorte",
                  "Você prefere método a tentativa e erro"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <span className="text-slate-300 text-lg leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800">
              <div className="flex items-center gap-4 bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-slate-400 italic text-sm md:text-base">
                  Não é para quem busca atalhos ou promessas milagrosas.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
