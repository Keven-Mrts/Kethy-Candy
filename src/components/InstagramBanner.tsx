"use client";

import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function InstagramBanner() {
  const posts = [
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559564024-8b6ee7df783d?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop",
  ];

  return (
    <section className="py-20 bg-brand-cream border-t border-brand-chocolate/5">
      <div className="container mx-auto px-4 md:px-6 text-center">
        
        <div className="flex flex-col items-center mb-10">
          <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1 rounded-full mb-4">
            <div className="bg-white p-3 rounded-full">
              <Instagram size={32} className="text-brand-chocolate" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate">Siga a Kethy Candy</h2>
          <p className="text-brand-chocolate/70 mt-2">Acompanhe nossas produções diárias no Instagram</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {posts.map((src, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/kethy.candy_"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.a>
          ))}
        </div>

        <a 
          href="https://instagram.com/kethy.candy_" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-brand-chocolate text-white font-bold py-4 px-8 rounded-full hover:bg-brand-caramel transition-colors shadow-lg"
        >
          <Instagram size={20} />
          Ver Instagram
        </a>

      </div>
    </section>
  );
}
