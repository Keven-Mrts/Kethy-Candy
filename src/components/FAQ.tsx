"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "Vocês fazem entregas?",
      a: "Sim! Trabalhamos com delivery próprio para garantir que seu pedido chegue perfeito na sua casa."
    },
    {
      q: "Quais bairros atendem?",
      a: "Atendemos toda a cidade de João Pessoa - PB."
    },
    {
      q: "Quanto custa a entrega?",
      a: "A taxa de entrega é de R$ 2,00 para o Alto do Mateus e R$ 5,00 para os demais bairros de João Pessoa."
    },
    {
      q: "Como funciona o pagamento?",
      a: "O pagamento é feito diretamente no momento da entrega. Aceitamos Dinheiro e Cartão. Se preferir Pix, enviaremos a chave durante a confirmação do pedido no WhatsApp."
    },
    {
      q: "Aceitam Pix?",
      a: "Sim, aceitamos Pix! A chave será enviada durante o nosso atendimento no WhatsApp após você finalizar seu pedido."
    },
    {
      q: "Aceitam cartão?",
      a: "Sim, aceitamos cartões de crédito e débito das principais bandeiras através da nossa maquininha na hora da entrega."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-chocolate mb-12">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-brand-chocolate/10 rounded-2xl overflow-hidden bg-brand-cream/20"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between font-semibold text-left text-brand-chocolate hover:bg-brand-cream/40 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-2 text-brand-chocolate/80">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
