import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { SalesMetric } from '../types';

interface MetricCardProps {
  title: string;
  metric: SalesMetric;
}

export function MetricCard({ title, metric }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">${metric.total.toLocaleString()}</span>
        <div className={`flex items-center text-sm ${
          metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {metric.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="ml-1">{Math.abs(metric.change)}%</span>
        </div>
      </div>
    </div>
  );
}