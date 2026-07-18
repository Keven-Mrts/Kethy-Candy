"use client";

import { motion } from "framer-motion";
import { Heart, Star, ChefHat, Truck } from "lucide-react";

export default function About() {
  const features = [
    { icon: <Heart className="text-brand-caramel" size={32} />, title: "Produção Artesanal", desc: "Feitos com amor e cuidado em cada detalhe." },
    { icon: <Star className="text-brand-caramel" size={32} />, title: "Ingredientes Premium", desc: "Trabalhamos apenas com as melhores marcas do mercado." },
    { icon: <ChefHat className="text-brand-caramel" size={32} />, title: "Produtos Fresquinhos", desc: "Preparados diariamente para garantir a melhor experiência." },
    { icon: <Truck className="text-brand-caramel" size={32} />, title: "Delivery Exclusivo", desc: "Entregamos no conforto da sua casa em João Pessoa." },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1557925923-33b251dc3296?q=80&w=1000&auto=format&fit=crop" 
              alt="Sobre a Kethy Candy" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate">
              Muito além de doces, entregamos <span className="text-brand-caramel">felicidade</span>
            </h2>
            <p className="text-brand-chocolate/80 text-lg leading-relaxed">
              A Kethy Candy nasceu do desejo de proporcionar momentos inesquecíveis através do sabor. 
              Nossa produção é 100% artesanal, com receitas exclusivas, muito recheio e dedicação total. 
              Atendemos exclusivamente por delivery em toda João Pessoa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-cream rounded-xl shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-chocolate">{feature.title}</h4>
                    <p className="text-sm text-brand-chocolate/70">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
