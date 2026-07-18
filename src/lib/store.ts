import { create } from 'zustand';
import { Product } from './data';

export interface CartItem {
  product: Product;
  flavor?: string;
  quantity: number;
  cartItemId: string; // unique id combining product id and flavor
}

interface CartStore {
  items: CartItem[];
  deliveryFee: number;
  deliveryNeighborhood: string;
  setDeliveryFee: (fee: number, neighborhood: string) => void;
  addItem: (product: Product, flavor?: string) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTotal: () => number;
  isCartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  deliveryFee: 0,
  deliveryNeighborhood: '',
  isCartOpen: false,

  setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
  
  setDeliveryFee: (fee, neighborhood) => set({ deliveryFee: fee, deliveryNeighborhood: neighborhood }),

  addItem: (product, flavor) => {
    set((state) => {
      const cartItemId = flavor ? `${product.id}-${flavor}` : product.id;
      const existingItem = state.items.find(item => item.cartItemId === cartItemId);

      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.cartItemId === cartItemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          isCartOpen: true
        };
      }

      return {
        items: [...state.items, { product, flavor, quantity: 1, cartItemId }],
        isCartOpen: true
      };
    });
  },

  removeItem: (cartItemId) => {
    set((state) => ({
      items: state.items.filter(item => item.cartItemId !== cartItemId)
    }));
  },

  updateQuantity: (cartItemId, quantity) => {
    set((state) => {
      if (quantity <= 0) {
        return { items: state.items.filter(item => item.cartItemId !== cartItemId) };
      }
      return {
        items: state.items.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity }
            : item
        )
      };
    });
  },

  clearCart: () => set({ items: [], deliveryFee: 0, deliveryNeighborhood: '' }),

  getSubtotal: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  },

  getTotal: () => {
    const { getSubtotal, deliveryFee } = get();
    return getSubtotal() + deliveryFee;
  }
}));
