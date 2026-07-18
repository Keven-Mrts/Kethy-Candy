export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  flavors?: string[];
}

export const products: Product[] = [
  {
    id: "brownie-tradicional",
    name: "Brownie Tradicional",
    description: "Nosso brownie clássico, com casquinha crocante e interior super macio e chocolatudo.",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "brownie-recheado",
    name: "Brownie Recheado",
    description: "A perfeição em formato de doce. Brownie recheado com uma camada generosa do seu sabor favorito.",
    price: 6.00,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600&auto=format&fit=crop",
    flavors: ["Brigadeiro", "Ninho com Nutella"]
  },
  {
    id: "cone-recheado",
    name: "Cone Recheado",
    description: "Casquinha de sorvete banhada em chocolate e recheada do início ao fim.",
    price: 7.00,
    image: "https://images.unsplash.com/photo-1559564024-8b6ee7df783d?q=80&w=600&auto=format&fit=crop",
    flavors: ["Brigadeiro", "Dois Amores", "Ninho com Nutella"]
  },
  {
    id: "mousse",
    name: "Mousse",
    description: "Sobremesa leve, cremosa e refrescante, preparada com muito amor.",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop",
    flavors: ["Limão", "Maracujá"]
  },
  {
    id: "pudim",
    name: "Pudim",
    description: "O clássico pudim de leite condensado, super cremoso e com bastante calda de caramelo.",
    price: 6.00,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "bolo-de-pote",
    name: "Bolo de Pote",
    description: "Camadas alternadas de massa fofinha e recheio cremoso. Uma explosão de sabor a cada colherada.",
    price: 10.00,
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop",
    flavors: ["Brigadeiro", "Ninho com Nutella", "Ninho com Morango"]
  }
];

export const deliveryFees = [
  { id: "alto-do-mateus", name: "Alto do Mateus", fee: 2.00 },
  { id: "demais-bairros", name: "Demais bairros de João Pessoa", fee: 5.00 },
];
