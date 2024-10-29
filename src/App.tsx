import React from 'react';
import { LayoutGrid, ShoppingBag, TrendingUp } from 'lucide-react';
import { products, salesMetrics } from './data';
import { MetricCard } from './components/MetricCard';
import { ProductCard } from './components/ProductCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-900">Fashion Store Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
            <TrendingUp className="h-5 w-5 text-gray-600" />
            Sales Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard title="Daily Sales" metric={salesMetrics.daily} />
            <MetricCard title="Weekly Sales" metric={salesMetrics.weekly} />
            <MetricCard title="Monthly Sales" metric={salesMetrics.monthly} />
          </div>
        </div>

        {/* Products */}
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
            <LayoutGrid className="h-5 w-5 text-gray-600" />
            Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;