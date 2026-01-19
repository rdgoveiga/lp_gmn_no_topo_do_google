import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      q: "Para quem é este ebook?",
      a: "Para donos de negócios locais (lojas, clínicas, escritórios, prestadores de serviço) que querem aparecer mais no Google sem depender exclusivamente de anúncios pagos."
    },
    {
      q: "Preciso ter conhecimento técnico?",
      a: "Não. O guia foi escrito com uma linguagem simples e direta, com passo-a-passo ilustrado para qualquer pessoa conseguir aplicar."
    },
    {
      q: "Serve para negócios online?",
      a: "O foco principal é o Google Business Profile, que exige um endereço físico ou uma área de cobertura local. Se você é um e-commerce sem sede local, este material pode não ser o ideal para você."
    },
    {
      q: "Como recebo o material?",
      a: "Logo após a aprovação do pagamento, você receberá um email da Eduzz com o link para download imediato do Ebook e de todos os bônus."
    }
  ];

  return (
    <Section className="pb-32">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Perguntas Frequentes</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </Section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-800 rounded-lg bg-slate-900/50 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left text-slate-200 hover:bg-slate-800 transition-colors"
      >
        <span className="font-medium">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-amber-500" /> : <Plus className="w-5 h-5 text-amber-500" />}
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 pt-0 text-slate-400 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};