"use client";

import { ArrowUp, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-chocolate text-brand-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Kethy Candy</h2>
            <p className="text-brand-cream/80 max-w-sm">
              Doces artesanais feitos com carinho para adoçar o seu dia. Ingredientes selecionados e muito recheio.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">Contato</h3>
            <ul className="space-y-2 text-brand-cream/80">
              <li>Delivery em João Pessoa – PB</li>
              <li>WhatsApp: (83) 99315-1374</li>
              <li>Atendimento: Terça a Domingo</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">Redes Sociais</h3>
            <a 
              href="https://instagram.com/kethy.candy_" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand-cream/10 hover:bg-brand-cream/20 px-4 py-2 rounded-lg transition-colors"
            >
              <Instagram size={20} />
              <span>@kethy.candy_</span>
            </a>
          </div>

        </div>

        <div className="border-t border-brand-cream/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-cream/60">
            &copy; {new Date().getFullYear()} Kethy Candy. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-brand-caramel hover:bg-brand-gold text-white rounded-full transition-colors flex items-center justify-center shadow-lg"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
