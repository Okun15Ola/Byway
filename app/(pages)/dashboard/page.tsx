import React from 'react'
import SideBar from '@/app/components/SideBar';
import { TrendingUp } from 'lucide-react';
import StatCard from '@/app/components/StatCard';
import SalesChart from '@/app/components/SalesChart';

const Dashboard = () => {
  const stats = [
    {
      id: 1,
      amount: '$1,000',
      title: 'Life Time Courses Commission',
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      iconColor: 'green' as const,
    },
    {
      id: 2,
      amount: '$800.0',
      title: 'Life Time Received Commission',
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      iconColor: 'green' as const,
    },
    {
      id: 3,
      amount: '$200.00',
      title: 'Pending Commission',
      icon: <TrendingUp className="w-6 h-6 text-yellow-600" />,
      iconColor: 'yellow' as const,
    }
  ];

  return (
    <div className="flex">
      <SideBar />
      
      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        {/* Header */}
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex gap-2 sm:gap-3 items-center w-full sm:w-auto">
          <button className="flex-1 sm:flex-none bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base">
            Add Course
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

        </div>
      </div>

        {/* Layout: Vertical Stats (Left) + Chart (Right) */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT SIDE - Vertical Stats Cards */}
          <div className="flex flex-col gap-4 lg:w-80 flex-shrink-0">
            {stats.map(stat => (
              <StatCard
                key={stat.id}
                amount={stat.amount}
                title={stat.title}
                icon={stat.icon}
                iconColor={stat.iconColor}
              />
            ))}
          </div>

          {/* RIGHT SIDE - Chart (Takes remaining space) */}
          <div className="flex-1">
            <SalesChart />
          </div>
        </div>

        {/* Reviews Section Below */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">1 star reviews</p>
            <p className="text-4xl font-bold text-gray-900">100</p>
            <span className="inline-block mt-3 px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
              1.0
            </span>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">2 star reviews</p>
            <p className="text-4xl font-bold text-gray-900">150</p>
            <span className="inline-block mt-3 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
              2.0
            </span>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">3 star reviews</p>
            <p className="text-4xl font-bold text-gray-900">200</p>
            <span className="inline-block mt-3 px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium">
              3.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;