import { Product, SalesMetric } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    category: 'shirts',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800',
    inventory: 150,
    salesCount: 42,
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    category: 'pants',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800',
    inventory: 85,
    salesCount: 28,
  },
  {
    id: '3',
    name: 'Summer Floral Dress',
    category: 'dresses',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800',
    inventory: 65,
    salesCount: 35,
  },
  {
    id: '4',
    name: 'Leather Belt',
    category: 'accessories',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800',
    inventory: 95,
    salesCount: 19,
  },
];

export const salesMetrics: Record<string, SalesMetric> = {
  daily: {
    total: 2845,
    change: 12.5,
    trend: 'up',
  },
  weekly: {
    total: 18650,
    change: -2.3,
    trend: 'down',
  },
  monthly: {
    total: 74500,
    change: 8.7,
    trend: 'up',
  },
};