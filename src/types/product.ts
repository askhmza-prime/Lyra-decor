export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  original_price?: number
  category_id: string
  images: string[]
  badge?: string          // "NEW" | "SALE" | "BESTSELLER"
  material?: string
  dimensions?: string
  care_instructions?: string
  in_stock: boolean
  created_at: string
}
