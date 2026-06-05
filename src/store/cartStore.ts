import { create } from 'zustand'

interface CartItem {
  id: string
  name: string
  price: string
}

interface CartStore {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
}))
