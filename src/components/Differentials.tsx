"use client";

import { Sparkles, Medal, Droplets, Clock, Smartphone, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function Differentials() {
  const diffs = [
    { icon: <Medal size={40} />, title: "Produção Artesanal" },
    { icon: <Sparkles size={40} />, title: "Ingredientes Selecionados" },
    { icon: <Droplets size={40} />, title: "Muito Recheio" },
    { icon: <Clock size={40} />, title: "Delivery Rápido" },
    { icon: <Smartphone size={40} />, title: "Atendimento via WhatsApp" },
    { icon: <Gift size={40} />, title: "Produtos Fresquinhos" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-brand-chocolate text-brand-cream">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Por que escolher a Kethy Candy?</h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {diffs.map((diff, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-20 h-20 bg-brand-caramel/20 rounded-full flex items-center justify-center text-brand-caramel group-hover:bg-brand-caramel group-hover:text-white transition-all duration-300">
                {diff.icon}
              </div>
              <h3 className="font-medium text-lg max-w-[150px]">{diff.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
