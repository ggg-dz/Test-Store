export interface Product {
  id: string;
  name: string;
  category: 'shirts' | 'pants' | 'dresses' | 'accessories';
  price: number;
  image: string;
  inventory: number;
  salesCount: number;
}

export interface SalesMetric {
  total: number;
  change: number;
  trend: 'up' | 'down';
}