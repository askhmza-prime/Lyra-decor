export interface Order {
  id: string
  user_id?: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered'
  customer_name: string
  customer_email: string
  customer_phone: string
  address: string
  created_at: string
}

export interface OrderItem {
  product_id: string
  product_name: string
  quantity: number
  price: number
}
