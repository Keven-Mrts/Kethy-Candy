"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Mariana Silva",
      text: "Os melhores brownies da cidade. Peço sempre e nunca me arrependo, super recheados e a massa é perfeita!",
    },
    {
      name: "Carlos Eduardo",
      text: "Entrega rápida e muito capricho. O cone recheado de Ninho com Nutella é uma experiência de outro mundo.",
    },
    {
      name: "Beatriz Oliveira",
      text: "Os doces chegaram perfeitos, muito bem embalados e super fresquinhos. Ganharam uma cliente fiel!",
    }
  ];

  return (
    <section className="py-20 bg-brand-cream/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-chocolate mb-12">O que dizem nossos clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-chocolate/5 relative"
            >
              <div className="flex gap-1 text-brand-gold mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-brand-chocolate/80 italic mb-6 text-lg">&quot;{review.text}&quot;</p>
              <h4 className="font-bold text-brand-chocolate">{review.name}</h4>
              
              <div className="absolute top-8 right-8 text-brand-chocolate/5">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
