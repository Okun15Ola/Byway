'use client'

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const salesData = [
  { month: 1, revenue: 100, commission: 80, pending: 20 },
  { month: 2, revenue: 150, commission: 120, pending: 30 },
  { month: 3, revenue: 200, commission: 180, pending: 40 },
  { month: 4, revenue: 250, commission: 220, pending: 60 },
  { month: 5, revenue: 350, commission: 300, pending: 80 },
  { month: 6, revenue: 400, commission: 350, pending: 100 },
  { month: 7, revenue: 500, commission: 450, pending: 120 },
  { month: 8, revenue: 650, commission: 580, pending: 150 },
  { month: 9, revenue: 800, commission: 700, pending: 180 },
  { month: 10, revenue: 900, commission: 800, pending: 200 },
  { month: 11, revenue: 950, commission: 850, pending: 220 },
  { month: 12, revenue: 1000, commission: 900, pending: 250 }
];

const SalesChart = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Life Time Sales</h2>
          <p className="text-sm text-gray-500 mt-1">unit</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="colorCommission" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '12px'
            }}
          />
          
          <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fill="url(#colorRevenue)" />
          <Area type="monotone" dataKey="commission" stroke="#10b981" strokeWidth={3} fill="url(#colorCommission)" />
          <Area type="monotone" dataKey="pending" stroke="#f59e0b" strokeWidth={3} fill="url(#colorPending)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;