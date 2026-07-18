"use client";

import { useState } from "react";
import { products, Product } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/lib/store";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function Catalog() {
  return (
    <section id="cardapio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate mb-4">Nosso Cardápio</h2>
          <p className="text-lg text-brand-chocolate/70">Escolha as suas delícias favoritas, adicione ao carrinho e faça seu pedido direto pelo WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();
  const [selectedFlavor, setSelectedFlavor] = useState<string>(product.flavors ? product.flavors[0] : "");

  const handleAdd = () => {
    if (product.flavors && !selectedFlavor) {
      alert("Por favor, selecione um sabor.");
      return;
    }
    addItem(product, product.flavors ? selectedFlavor : undefined);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-cream/30 border border-brand-chocolate/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-brand-caramel text-white font-bold px-4 py-2 rounded-full shadow-lg">
          {formatCurrency(product.price)}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-brand-chocolate mb-2">{product.name}</h3>
        <p className="text-brand-chocolate/70 mb-6 flex-1">{product.description}</p>

        {product.flavors && (
          <div className="mb-6">
            <label className="block text-sm font-semibold text-brand-chocolate mb-2">Escolha o Sabor:</label>
            <select 
              value={selectedFlavor}
              onChange={(e) => setSelectedFlavor(e.target.value)}
              className="w-full p-3 border border-brand-chocolate/20 rounded-xl outline-none focus:border-brand-caramel bg-white"
            >
              <option value="" disabled>Selecione...</option>
              {product.flavors.map((flavor, index) => (
                <option key={index} value={flavor}>{flavor}</option>
              ))}
            </select>
          </div>
        )}

        <button 
          onClick={handleAdd}
          className="w-full bg-brand-chocolate hover:bg-brand-caramel text-white font-bold py-4 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 mt-auto"
        >
          <ShoppingBag size={20} />
          Adicionar ao Carrinho
        </button>
      </div>
    </motion.div>
  );
}
