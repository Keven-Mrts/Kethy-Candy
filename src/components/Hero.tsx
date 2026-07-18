"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2000&auto=format&fit=crop')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-chocolate/60 backdrop-blur-[2px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-6"
        >
          Doces artesanais feitos com carinho para adoçar o seu dia.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-cream/90 max-w-2xl mb-10"
        >
          Brownies, cones recheados, mousses, pudins e bolos de pote preparados diariamente com ingredientes selecionados.
        </motion.p>
        
        <motion.a 
          href="#cardapio"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-brand-caramel hover:bg-brand-gold text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1 text-lg"
        >
          Faça seu Pedido
        </motion.a>
      </div>
    </section>
  );
}
