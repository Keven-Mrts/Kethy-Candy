"use client";

import { useCartStore } from "@/lib/store";
import { formatCurrency, generateWhatsAppLink } from "@/lib/utils";
import { deliveryFees } from "@/lib/data";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Cart() {
  const { 
    items, 
    isCartOpen, 
    setCartOpen, 
    removeItem, 
    updateQuantity, 
    deliveryFee, 
    setDeliveryFee,
    getSubtotal,
    getTotal
  } = useCartStore();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "",
    notes: ""
  });

  const handleCheckout = () => {
    if (!formData.name || !formData.phone || !formData.address || !formData.paymentMethod) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    if (deliveryFee === 0) {
      alert("Por favor, selecione seu bairro para a taxa de entrega.");
      return;
    }

    const subtotal = getSubtotal();
    const total = getTotal();
    
    const url = generateWhatsAppLink(items, subtotal, deliveryFee, total, formData);
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-brand-chocolate/50 backdrop-blur-sm z-50"
          />
          
          {/* Sidebar */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-cream shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-brand-chocolate/10 flex items-center justify-between bg-white">
              <h2 className="text-xl font-bold text-brand-chocolate flex items-center gap-2">
                <ShoppingBag /> Seu Carrinho
              </h2>
              <button 
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-brand-chocolate/5 rounded-full transition-colors"
              >
                <X size={24} className="text-brand-chocolate" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-brand-chocolate/60 gap-4">
                  <ShoppingBag size={48} className="opacity-50" />
                  <p>Seu carrinho está vazio.</p>
                  <button 
                    onClick={() => setCartOpen(false)}
                    className="mt-4 text-brand-caramel font-semibold hover:underline"
                  >
                    Continuar comprando
                  </button>
                </div>
              ) : (
                <>
                  {items.map((item) => (
                    <div key={item.cartItemId} className="flex gap-4 bg-white p-3 rounded-xl shadow-sm">
                      <div className="w-20 h-20 bg-brand-chocolate/5 rounded-lg overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-brand-chocolate">{item.product.name}</h3>
                        {item.flavor && <p className="text-sm text-brand-caramel">{item.flavor}</p>}
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-bold">{formatCurrency(item.product.price * item.quantity)}</span>
                          <div className="flex items-center gap-2 bg-brand-cream rounded-lg p-1 border border-brand-chocolate/10">
                            <button 
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                              className="p-1 hover:text-brand-caramel transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="p-1 hover:text-brand-caramel transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.cartItemId)}
                        className="self-start p-1 text-brand-chocolate/40 hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}

                  {/* Formulário de Entrega */}
                  <div className="bg-white p-4 rounded-xl shadow-sm mt-6 border border-brand-chocolate/10 space-y-4">
                    <h3 className="font-bold text-brand-chocolate">Dados para Entrega</h3>
                    
                    <div className="space-y-3">
                      <input 
                        type="text" 
                        placeholder="Seu Nome completo *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-2 border border-brand-chocolate/20 rounded-lg outline-none focus:border-brand-caramel text-sm"
                      />
                      <input 
                        type="tel" 
                        placeholder="Telefone / WhatsApp *"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full p-2 border border-brand-chocolate/20 rounded-lg outline-none focus:border-brand-caramel text-sm"
                      />
                      <textarea 
                        placeholder="Endereço completo (Rua, Número, Bairro, Referência) *"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full p-2 border border-brand-chocolate/20 rounded-lg outline-none focus:border-brand-caramel text-sm min-h-[80px]"
                      />
                      
                      <select 
                        onChange={(e) => {
                          const fee = deliveryFees.find(d => d.id === e.target.value);
                          if (fee) setDeliveryFee(fee.fee, fee.name);
                        }}
                        className="w-full p-2 border border-brand-chocolate/20 rounded-lg outline-none focus:border-brand-caramel text-sm bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>Selecione seu bairro *</option>
                        {deliveryFees.map(fee => (
                          <option key={fee.id} value={fee.id}>
                            {fee.name} - {formatCurrency(fee.fee)}
                          </option>
                        ))}
                      </select>

                      <select 
                        value={formData.paymentMethod}
                        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                        className="w-full p-2 border border-brand-chocolate/20 rounded-lg outline-none focus:border-brand-caramel text-sm bg-white"
                      >
                        <option value="" disabled>Forma de Pagamento *</option>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="Pix">Pix</option>
                        <option value="Cartão">Cartão</option>
                      </select>
                      
                      {formData.paymentMethod === 'Pix' && (
                        <p className="text-xs text-brand-caramel bg-brand-caramel/10 p-2 rounded">
                          * A chave Pix será enviada durante o atendimento pelo WhatsApp.
                        </p>
                      )}

                      <textarea 
                        placeholder="Observações (opcional)"
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="w-full p-2 border border-brand-chocolate/20 rounded-lg outline-none focus:border-brand-caramel text-sm min-h-[60px]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer / Total */}
            {items.length > 0 && (
              <div className="p-4 bg-white border-t border-brand-chocolate/10">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-brand-chocolate/80">
                    <span>Subtotal</span>
                    <span>{formatCurrency(getSubtotal())}</span>
                  </div>
                  <div className="flex justify-between text-sm text-brand-chocolate/80">
                    <span>Taxa de Entrega</span>
                    <span>{deliveryFee === 0 ? "A calcular" : formatCurrency(deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-brand-chocolate pt-2 border-t border-brand-chocolate/10">
                    <span>Total</span>
                    <span>{formatCurrency(getTotal())}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2"
                >
                  Pedir no WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
