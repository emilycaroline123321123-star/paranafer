
import React, { useState } from 'react';
import CTAButton from './components/CTAButton';
import { FastIcon, CheckIcon, ShieldIcon, ToolIcon } from './components/Icons';
import { Benefit, Testimonial, FaqItem } from './types';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits: Benefit[] = [
    {
      title: "Estribos Móveis",
      description: "A mobilidade dos estribos permite ajustes precisos em segundos, adaptando-se às necessidades específicas da sua viga sem esforço.",
      icon: <FastIcon />
    },
    {
      title: "40% Mais Rápido",
      description: "Reduza drasticamente o tempo de montagem no canteiro de obras. Menos tempo batendo ferragem, mais tempo concretando.",
      icon: <ToolIcon />
    },
    {
      title: "Montagem na Pressão",
      description: "Sistema de fixação sob pressão que garante estabilidade estrutural superior e evita deslocamentos indesejados.",
      icon: <ShieldIcon />
    },
    {
      title: "Acabamento Profissional",
      description: "Entregue obras com padrão de engenharia superior, reduzindo erros de posicionamento e garantindo o cobrimento ideal do concreto.",
      icon: <CheckIcon />
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Ricardo Silva",
      role: "Mestre de Obras",
      content: "Depois que passamos a usar as vigas armadas na pressão, nossa produtividade dobrou. Os estribos móveis facilitam demais o ajuste fino.",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      name: "Eng. Amanda Costa",
      role: "Responsável Técnica",
      content: "O sistema de pressão é o diferencial. Ele mantém a geometria da armadura impecável durante o lançamento do concreto.",
      image: "https://picsum.photos/100/100?random=2"
    }
  ];

  const faqs: FaqItem[] = [
    {
      question: "Os estribos não correm depois de montados?",
      answer: "Não. O sistema de montagem na pressão trava os estribos na posição desejada após o ajuste, garantindo que a ferragem permaneça estática durante a concretagem."
    },
    {
      question: "Qual o prazo de entrega das ferragens?",
      answer: "Trabalhamos com pronta entrega para medidas padrão e fabricação acelerada para projetos personalizados, garantindo que sua obra não pare."
    },
    {
      question: "Atende a quais normas de engenharia?",
      answer: "Nossas ferragens são produzidas rigorosamente dentro das especificações da NBR 6118 e NBR 7480, utilizando aço de procedência certificada."
    }
  ];

  return (
    <div className="min-h-screen bg-light text-slate-800 antialiased overflow-x-hidden">
      
      {/* 1. Header & Hero (Fundo Escuro - Impacto e Autoridade) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-slate-900 text-white pt-10 pb-20 px-4 md:px-8">
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-amber-500 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-amber-600 rounded-full blur-[120px]"></div>
        </div>

        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
          <div className="text-2xl font-black italic text-amber-500 tracking-tighter">VIGA ARMADA <span className="text-white">PRO</span></div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-widest text-slate-400">
            <a href="#beneficios" className="hover:text-amber-500 transition-colors">Benefícios</a>
            <a href="#tecnologia" className="hover:text-amber-500 transition-colors">Tecnologia</a>
            <a href="#depoimentos" className="hover:text-amber-500 transition-colors">Provas</a>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center md:text-left space-y-8">
            <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
              Tecnologia de Ponta na Construção
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[800] leading-[1.1] tracking-tight">
              Obra Mais <span className="text-amber-500">Rápida</span> e Ferragem Mais <span className="text-amber-500">Precisa</span>.
            </h1>
            <p className="text-lg md:text-xl font-[300] text-slate-400 max-w-lg leading-relaxed">
              Descubra a viga armada na pressão com <span className="text-white font-semibold underline decoration-amber-500">estribos móveis</span>. Elimine a lentidão e garanta um acabamento profissional em cada viga da sua obra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <CTAButton text="Solicitar Orçamento" variant="primary" />
              <CTAButton text="Falar no WhatsApp" variant="whatsapp" />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-amber-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img 
              src="https://picsum.photos/800/600?random=10" 
              alt="Viga armada na pressão" 
              className="relative rounded-2xl shadow-2xl border border-slate-700 w-full object-cover aspect-video md:aspect-square"
            />
          </div>
        </div>
      </section>

      {/* 2. Benefícios (Fundo Claro - Clareza e Credibilidade) */}
      <section id="beneficios" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-[800] text-slate-900 tracking-tight">
              Por que usar a <span className="text-amber-600">Viga Armada na Pressão?</span>
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 font-[400] max-w-2xl mx-auto text-lg">
              Nosso sistema foi projetado para resolver os gargalos tradicionais da montagem de ferragem estrutural.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 transition-all hover:shadow-lg group">
                <div className="w-14 h-14 bg-amber-500 text-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-[700] text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed font-[400] text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tecnologia & Mobilidade (Fundo Gradiente - Diferenciação) */}
      <section id="tecnologia" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-[800] leading-tight">
                A Mobilidade que <br/><span className="text-amber-500">Muda o Jogo.</span>
              </h2>
              <p className="text-slate-300 text-lg font-[300] leading-relaxed">
                Esqueça os estribos fixos que dificultam a passagem de tubulações ou o ajuste fino na hora da fôrma. Com nossa tecnologia de pressão:
              </p>
              <ul className="space-y-4">
                {[
                  "Ajuste a distância entre estribos com as mãos",
                  "Trava automática após o posicionamento",
                  "Precisão milimétrica sem esforço físico excessivo",
                  "Ideal para vigas de transição e baldrames complexos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-amber-500 mt-1 flex-shrink-0"><CheckIcon /></span>
                    <span className="text-slate-200 font-[400]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <CTAButton text="Ver Tabela de Medidas" variant="secondary" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-slate-800/50 rounded-full border border-slate-700 flex items-center justify-center p-8 group overflow-hidden">
              <div className="absolute inset-0 bg-amber-500/10 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
              <img 
                src="https://picsum.photos/600/600?random=12" 
                alt="Detalhe Estribo Móvel" 
                className="relative rounded-xl shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Prova Social (Alternância de Contraste - Dinamismo) */}
      <section id="depoimentos" className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-[800] text-slate-900 tracking-tight mb-4">
              Quem Constrói, <span className="text-amber-600">Confia</span>.
            </h2>
            <p className="text-slate-500 font-[400] text-lg">Resultados reais de quem já economizou tempo e dinheiro.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative">
                <div className="absolute -top-4 -right-4 text-amber-500 opacity-20 transform rotate-12">
                   <svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H4.017V21H6.017Z"></path></svg>
                </div>
                <p className="text-slate-700 italic font-[300] text-lg mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-amber-500" />
                  <div>
                    <h4 className="font-[700] text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-[600] uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ (Fundo Escuro - Fechamento e FAQ) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-[800] text-slate-900 text-center mb-12">Dúvidas <span className="text-amber-600">Frequentes</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors font-[700] text-slate-800"
                >
                  {faq.question}
                  <span className={`transform transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-[500px] p-5 opacity-100' : 'max-h-0 p-0 opacity-0'}`}>
                  <p className="text-slate-600 font-[400] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Final (Oferta Irresistível) */}
      <section id="contato" className="py-24 px-4 bg-amber-500 text-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="black"></path>
           </svg>
        </div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-[900] tracking-tight uppercase italic leading-[0.9]">
            Acelere sua Obra Hoje Mesmo.
          </h2>
          <p className="text-xl md:text-2xl font-[600] text-slate-800/80">
            Não perca mais tempo com ferragens lentas. Peça seu orçamento personalizado e comprove a diferença.
          </p>
          <div className="pt-4 flex flex-col items-center gap-6">
            <CTAButton text="Garantir Agora via WhatsApp" variant="whatsapp" />
            <p className="text-xs font-bold uppercase tracking-widest text-slate-900/60 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Atendimento Consultivo Disponível Agora
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-white px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-xl font-black italic tracking-tighter">VIGA ARMADA <span className="text-amber-500">PRO</span></div>
          <div className="flex space-x-6 text-slate-500 text-xs font-semibold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">SAC</a>
          </div>
          <p className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">
            © 2024 Viga Armada PRO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
