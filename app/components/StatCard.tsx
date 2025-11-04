import React from 'react';

type StatCardProps = {
  amount: string;
  title: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  iconColor?: 'green' | 'blue' | 'red' | 'yellow';
};

const StatCard: React.FC<StatCardProps> = ({ 
  amount, 
  title, 
  icon, 
  trend = 'up',
  iconColor = 'green'
}) => {
  // Color classes for icon background
  const iconBgColors = {
    green: 'bg-green-50',
    blue: 'bg-blue-50',
    red: 'bg-red-50',
    yellow: 'bg-yellow-50',
  };

  // Color classes for trend text
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{amount}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{title}</p>
        </div>
        
        <div className={`p-3 rounded-lg ${iconBgColors[iconColor]} flex-shrink-0 ml-4`}>
          {icon}
        </div>
      </div>
      
      {trend === 'up' && (
        <div className={`flex items-center ${trendColors[trend]} text-sm font-medium`}>
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span>Trending up</span>
        </div>
      )}

      {trend === 'down' && (
        <div className={`flex items-center ${trendColors[trend]} text-sm font-medium`}>
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17H5m0 0V9m0 8l8-8 4 4 6-6" />
          </svg>
          <span>Trending down</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;