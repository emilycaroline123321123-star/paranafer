import React, { useState } from 'react';
import CTAButton from './components/CTAButton.tsx';
import { FastIcon, CheckIcon, ShieldIcon, ToolIcon, WhatsappIcon } from './components/Icons.tsx';
import { Benefit, Testimonial, FaqItem } from './types.ts';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits: Benefit[] = [
    {
      title: "Estribos Móveis",
      description: "A mobilidade total dos estribos permite ajustes milimétricos no canteiro, garantindo que a armadura se adapte perfeitamente à fôrma.",
      icon: <FastIcon />
    },
    {
      title: "Velocidade de Obra",
      description: "Reduza o tempo de montagem das vigas em até 40%. Menos esforço manual, mais produtividade para sua equipe.",
      icon: <ToolIcon />
    },
    {
      title: "Qualidade de Engenharia",
      description: "Sistema na pressão que trava os estribos na posição exata, evitando deslocamentos durante o lançamento do concreto.",
      icon: <ShieldIcon />
    },
    {
      title: "Custo-Benefício",
      description: "Menos desperdício de tempo e mão de obra. Ferragem pronta para uso que eleva o nível profissional da sua construção.",
      icon: <CheckIcon />
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Marcos Oliveira",
      role: "Empreiteiro",
      content: "O sistema de estribos móveis é um divisor de águas. Facilitou demais a passagem das tubulações hidráulicas que sempre eram um problema.",
      image: "https://i.pravatar.cc/150?u=marcos"
    },
    {
      name: "Eng. Cláudia Souza",
      role: "Gestora de Obras",
      content: "A precisão da viga na pressão garante que o cobrimento do concreto seja respeitado. É segurança estrutural levada a sério.",
      image: "https://i.pravatar.cc/150?u=claudia"
    }
  ];

  const faqs: FaqItem[] = [
    {
      question: "Como funciona a 'montagem na pressão'?",
      answer: "Utilizamos um maquinário de precisão que fixa as barras principais e os estribos sob uma tensão controlada, permitindo que os estribos sejam movidos manualmente mas fiquem travados após o ajuste."
    },
    {
      question: "Vocês entregam em todo o Brasil?",
      answer: "Atendemos entregas regionais com frota própria e enviamos para outras localidades via transportadoras parceiras especializadas em carga pesada."
    },
    {
      question: "Posso enviar meu projeto estrutural?",
      answer: "Com certeza! Nossa equipe técnica analisa seu projeto e fabrica as vigas exatamente conforme as especificações do seu calculista."
    }
  ];

  return (
    <div className="min-h-screen bg-light text-slate-800 antialiased overflow-x-hidden selection:bg-amber-500 selection:text-white">
      
      {/* Botão Flutuante WhatsApp */}
      <a 
        href="https://wa.me/seu-numero-aqui" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white/20"
        title="Falar com Especialista"
      >
        <WhatsappIcon />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center bg-slate-900 text-white pt-20 pb-20 px-4 md:px-8">
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-amber-500 rounded-full blur-[150px]"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-amber-600 rounded-full blur-[150px]"></div>
        </div>

        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
          <div className="text-xl md:text-2xl font-black italic text-amber-500 tracking-tighter">VIGA ARMADA <span className="text-white">PRO</span></div>
          <div className="hidden lg:flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#beneficios" className="hover:text-amber-500 transition-colors">Benefícios</a>
            <a href="#tecnologia" className="hover:text-amber-500 transition-colors">Tecnologia</a>
            <a href="#depoimentos" className="hover:text-amber-500 transition-colors">Provas</a>
            <a href="#faq" className="hover:text-amber-500 transition-colors">Dúvidas</a>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left space-y-10">
            <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-500 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]">
              Líder em Tecnologia de Ferragens
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[800] leading-[1] tracking-tight">
              Construa com <span className="text-amber-500 italic">Liberdade</span> e <span className="text-amber-500 italic">Rapidez</span> total.
            </h1>
            <p className="text-lg md:text-xl font-[300] text-slate-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Conheça a única viga armada na pressão com <span className="text-white font-bold underline decoration-amber-500 underline-offset-4">estribos móveis</span>. O segredo das grandes obras agora disponível para o seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <CTAButton text="Solicitar Orçamento" variant="primary" />
              <CTAButton text="Falar no WhatsApp" variant="whatsapp" />
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-slate-500">
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">+10k</span>
                <span className="text-[10px] uppercase font-bold tracking-widest">Vigas Entregues</span>
              </div>
              <div className="h-8 w-px bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">40%</span>
                <span className="text-[10px] uppercase font-bold tracking-widest">Mais Agilidade</span>
              </div>
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-amber-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1541975097412-50448b97e9d6?q=80&w=1200&auto=format&fit=crop" 
              alt="Ferragem de viga profissional" 
              className="relative rounded-3xl shadow-2xl border border-slate-700 w-full object-cover aspect-video lg:aspect-square transform group-hover:rotate-1 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section id="beneficios" className="py-24 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-3xl md:text-5xl font-[800] text-slate-900 tracking-tight">
              Diferenciais <span className="text-amber-600">Estratégicos</span>
            </h2>
            <div className="w-24 h-2 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 font-[400] max-w-2xl mx-auto text-lg leading-relaxed">
              Desenvolvido por quem entende de obra, para quem precisa de produtividade real.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-amber-300 transition-all hover:shadow-2xl group flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="w-16 h-16 bg-amber-500 text-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-[800] text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed font-[400] text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologia Section */}
      <section id="tecnologia" className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-[800] leading-[1.1] tracking-tight">
              Estribos que acompanham o <span className="text-amber-500">ritmo do seu projeto.</span>
            </h2>
            <p className="text-slate-400 text-lg font-[300] leading-relaxed">
              Nossa tecnologia patenteada de montagem na pressão permite que você mova os estribos conforme a necessidade da hidráulica, elétrica ou armaduras negativas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {t: "Ajuste em Segundos", d: "Mova os estribos sem ferramentas pesadas."},
                {t: "Trava por Tensão", d: "Após o ajuste, o estribo se mantém firme."},
                {t: "Aço CA-50/CA-60", d: "Certificação total de procedência Gerdau."},
                {t: "Pronto para Concreto", d: "Menor contaminação por ferrugem."}
              ].map((item, i) => (
                <div key={i} className="flex flex-col space-y-2 p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-amber-500 font-bold">{item.t}</span>
                  <span className="text-xs text-slate-500">{item.d}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <CTAButton text="Ver Tabela Técnica" variant="secondary" />
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-amber-500/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=800&auto=format&fit=crop" 
                alt="Maquinário de Ferragem" 
                className="relative rounded-3xl shadow-2xl z-10 w-full max-w-lg grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-[800] text-slate-900 tracking-tight mb-6">
              Aprovado por <span className="text-amber-600">Profissionais</span>
            </h2>
            <p className="text-slate-500 font-[400] text-lg">Veja o que dizem quem lida com o ferro todo dia.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-500">
                <div className="text-amber-500 mb-6 flex">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-700 font-[400] text-lg mb-10 leading-relaxed italic">
                  "{t.content}"
                </p>
                <div className="flex items-center space-x-5">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-amber-500 p-0.5" />
                  <div>
                    <h4 className="font-[800] text-slate-900">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 font-[700] uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-[800] text-slate-900">Perguntas <span className="text-amber-600">Frequentes</span></h2>
            <p className="text-slate-500">Tudo o que você precisa saber antes de comprar.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-500/50">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors font-[700] text-slate-800"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center transform transition-transform duration-300 ${openFaq === i ? 'rotate-180 border-amber-500' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 bg-white text-slate-600 font-[400] leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-28 px-4 bg-amber-500 text-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="black"></path>
           </svg>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <h2 className="text-5xl md:text-7xl font-[900] tracking-tight uppercase italic leading-[0.85]">
            Não perca mais dinheiro <br/> com lentidão na obra.
          </h2>
          <p className="text-xl md:text-3xl font-[600] text-slate-900/90 leading-relaxed">
            Seja referência em profissionalismo. <br className="hidden md:block" /> Vigas prontas na pressão com entrega recorde.
          </p>
          <div className="flex flex-col items-center gap-8">
            <CTAButton text="Garantir Orçamento Prioritário" variant="primary" />
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><CheckIcon /> Suporte via WhatsApp</span>
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><CheckIcon /> Orçamento em até 1h</span>
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><CheckIcon /> Garantia de Procedência</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-950 text-white px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start text-center md:text-left">
          <div className="space-y-6">
            <div className="text-2xl font-black italic tracking-tighter">VIGA ARMADA <span className="text-amber-500">PRO</span></div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Tecnologia de ferragem armada para quem exige rapidez, economia e qualidade estrutural superior.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">Menu Rápido</h4>
            <div className="flex flex-col space-y-3 text-slate-400 font-semibold text-sm">
              <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
              <a href="#tecnologia" className="hover:text-white transition-colors">Tecnologia</a>
              <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">Contato</h4>
            <div className="flex flex-col space-y-3 text-slate-400 font-semibold text-sm">
              <p>vendas@vigaarmadapro.com.br</p>
              <p>(00) 90000-0000</p>
              <p>Segunda à Sábado - 08h às 18h</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-[0.3em] text-slate-600 gap-6">
          <p>© 2024 VIGA ARMADA PRO - CNPJ 00.000.000/0001-00</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;