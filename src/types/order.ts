export interface Order {
  id: number;
  customerName: string;
  email: string;
  createdAt: string;
}

export interface CreateOrderRequest {
  customerName: string;
  email: string;
}

export interface OrderResponse {
  orders: Order[];
  total: number;
}

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';