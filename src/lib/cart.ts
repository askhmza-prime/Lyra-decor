import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types/product'

interface CartItem extends Product { quantity: number }

interface CartStore {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qty: number) => void
  clearCart: () => void
  total: () => number
  count: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const existing = get().items.find(i => i.id === product.id)
        if (existing) {
          set({ items: get().items.map(i =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          )})
        } else {
          set({ items: [...get().items, { ...product, quantity: 1 }] })
        }
      },
      removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      updateQty: (id, qty) => {
        if (qty < 1) return get().removeItem(id)
        set({ items: get().items.map(i => i.id === id ? { ...i, quantity: qty } : i) })
      },
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: 'lyra-cart' }
  )
)
