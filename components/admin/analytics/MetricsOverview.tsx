'use client';

import { formatPrice } from '@/lib/utils';
import { Package, DollarSign, BarChart, Users, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricsOverviewProps {
  overview: {
    totalOrders: number;
    totalRevenue: number;
    avgOrderValue: number;
    uniqueCustomers: number;
    changes: {
      orders: number;
      revenue: number;
    };
  };
  isLoading?: boolean;
}

export default function MetricsOverview({ overview, isLoading = false }: MetricsOverviewProps) {
  const formatPercentage = (value: number) => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  const getChangeColor = (value: number) => {
    if (value > 0) return 'text-success';
    if (value < 0) return 'text-error';
    return 'text-gray-500';
  };

  const getChangeIcon = (value: number) => {
    if (value > 0) return <TrendingUp />;
    if (value < 0) return <TrendingDown />;
    return <Minus />;
  };

  const metrics = [
    {
      title: 'Total Orders',
      value: overview.totalOrders.toLocaleString(),
      change: overview.changes.orders,
      icon: <Package />,
      color: 'text-on-surface',
      bgColor: 'bg-primary/10 text-primary',
    },
    {
      title: 'Total Revenue',
      value: formatPrice(overview.totalRevenue),
      change: overview.changes.revenue,
      icon: <DollarSign />,
      color: 'text-on-surface',
      bgColor: 'bg-primary/10 text-primary',
    },
    {
      title: 'Average Order Value',
      value: formatPrice(overview.avgOrderValue),
      change: null,
      icon: <BarChart />,
      color: 'text-on-surface',
      bgColor: 'bg-primary/10 text-primary',
    },
    {
      title: 'Unique Customers',
      value: overview.uniqueCustomers.toLocaleString(),
      change: null,
      icon: <Users />,
      color: 'text-on-surface',
      bgColor: 'bg-primary/10 text-primary',
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-surface-container-low border border-outline-variant/10 shadow-sm rounded-2xl animate-pulse">
            <div className="card-body p-6">
              <div className="h-4 bg-surface-container-high rounded w-3/4 mb-2"></div>
              <div className="h-8 bg-surface-container-high rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-surface-container-high rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-surface-container-low border border-outline-variant/10 shadow-sm rounded-2xl hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center text-2xl`}>
                {metric.icon}
              </div>
              {metric.change !== null && (
                <div className={`flex items-center gap-1 text-sm font-bold ${getChangeColor(metric.change)}`}>
                  <span>{getChangeIcon(metric.change)}</span>
                  <span className="font-medium">{formatPercentage(metric.change)}</span>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">{metric.title}</h3>
              <p className={`text-3xl font-bold ${metric.color}`}>{metric.value}</p>
            </div>

            {metric.change !== null && (
              <div className="mt-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50">
                vs previous period
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}