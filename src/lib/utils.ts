import { CartItem } from "./store";

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const generateWhatsAppLink = (
  items: CartItem[], 
  subtotal: number, 
  deliveryFee: number, 
  total: number, 
  clientData: { name: string; phone: string; address: string; paymentMethod: string; notes: string }
) => {
  const phone = "5583993151374";
  
  let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
  
  items.forEach(item => {
    const flavorText = item.flavor ? ` – ${item.flavor}` : "";
    message += `🍫 ${item.product.name}${flavorText} (${item.quantity}x)\n`;
  });
  
  message += `\nSubtotal: ${formatCurrency(subtotal)}`;
  message += `\nTaxa de entrega: ${formatCurrency(deliveryFee)}`;
  message += `\n*Total: ${formatCurrency(total)}*\n\n`;
  
  message += `Nome: ${clientData.name}\n`;
  message += `Telefone: ${clientData.phone}\n`;
  message += `Endereço: ${clientData.address}\n`;
  message += `Forma de pagamento: ${clientData.paymentMethod}\n`;
  
  if (clientData.notes) {
    message += `Observações: ${clientData.notes}\n`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
