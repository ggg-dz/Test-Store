import React from 'react';
import { Package } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-800">{product.name}</h3>
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <Package size={16} />
          <span>{product.inventory} in stock</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Sales</span>
          <span className="font-medium text-gray-800">{product.salesCount} units</span>
        </div>
      </div>
    </div>
  );
}