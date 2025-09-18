import React from 'react';
import { Activity, Calendar, Globe, CheckCircle, Database, Home, ChevronRight, FileText, AlertTriangle, Shield } from 'lucide-react';

const StatsCard = () => {
  const chartData = [
    { label: 'Critical', value: 10, color: 'bg-teal-600' },
    { label: 'High', value: 8, color: 'bg-teal-600' },
    { label: 'Medium', value: 6, color: 'bg-gray-300' },
    { label: 'Low', value: 4, color: 'bg-gray-300' }
  ];

  const issuesData = [
    { type: 'Critical', count: 10, bgColor: 'bg-pink-50', iconColor: 'bg-pink-500', icon: '!' },
    { type: 'High', count: 6, bgColor: 'bg-pink-50', iconColor: 'bg-pink-500', icon: '!' },
    { type: 'Medium', count: 4, bgColor: 'bg-yellow-50', iconColor: 'bg-yellow-500', icon: '!' },
    { type: 'Low', count: 2, bgColor: 'bg-teal-50', iconColor: 'bg-teal-500', icon: '!' }
  ];

  const maxValue = Math.max(...chartData.map(item => item.value));

  return (
    <div className="relative w-4/5 mx-auto bg-white rounded-lg shadow-md p-6 overflow-hidden">
      <div className="absolute -top-48 -left-20 w-40 h-80 bg-teal-600 -skew-x-12 -translate-x-5 z-0 opacity-100"></div>
      <div className="absolute -top-20 -right-0 w-32 h-60 bg-pink-500 skew-x-12 translate-x-4 z-0 opacity-100"></div>
      <div className="absolute -bottom-0 -right-40 w-60 h-40 bg-green-300 -skew-x-12 translate-x-8 z-0 opacity-100"></div>
      <div className="absolute -bottom-20 -left-32 w-60 h-60 bg-yellow-400 rounded-full z-0 opacity-100"></div>


      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center text-sm text-gray-700 space-x-2">
            <Home className="w-4 h-4" />
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="hover:text-blue-600 cursor-pointer">Scans</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="hover:text-blue-600 cursor-pointer">Websites</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="hover:text-blue-600 cursor-pointer">scan_name</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-blue-600 font-semibold">Issues</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 36 36" className="w-12 h-12">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                />
                <path
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="60, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                />
                <text x="18" y="20.35" className="text-xs font-bold" textAnchor="middle" fill="#374151">
                  60
                </text>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Usage</span>
            <button className="flex items-center text-sm text-pink-600 hover:text-pink-700 font-medium">
              <span className="text-pink-500 mr-1">✨</span>
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Title and Info */}
        <div className="mb-8">
          <h1 className="text-4xl text-gray-800 mb-6">Title</h1>
          <div className="flex items-center justify-center space-x-35 text-sm text-gray-600">
            <div className="flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              <span className="font-medium">Scan type:</span>
              <span className="ml-1 font-semibold">Web</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="font-medium">Date:</span>
              <span className="ml-1 font-semibold">12 Jan 25</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              <span className="font-semibold">www.websitename.com | scan_name</span>
            </div>
            <div className="flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              <span className="font-semibold">Status:</span>
              <span className="ml-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Completed
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-12 mb-12">
          <button className="text-gray-600 hover:text-blue-600 font-medium pb-2">Summary</button>
          <button className="text-gray-600 hover:text-blue-600 font-medium pb-2">Compliance</button>
          <button className="text-gray-600 hover:text-blue-600 font-medium pb-2">Accessibility</button>
          <button className="text-gray-600 hover:text-blue-600 font-medium pb-2">Pages</button>
          <button className="text-gray-600 hover:text-blue-600 font-medium pb-2">Files</button>
          <button className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-2">Issues</button>
        </div>

        {/* Issues Section */}
        {/* Issues Section */}
        <div className="flex flex-col lg:flex-row gap-6 ">
          {/* Total Issues */}
          <div className="bg-gray-50 rounded-lg p-6 text-center lg:w-1/4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Issues</h3>
            <div className="w-24 h-24 mx-auto relative">
              {/* دائرة كاملة */}
              <svg className="w-24 h-24">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">22</span>
              </div>
            </div>
          </div>



          {/* Issues by Priority */}
          <div className="bg-gray-50 rounded-lg p-6 flex flex-col lg:flex-row gap-6 lg:w-full">
            {/* الأعمدة (Issues by Priority) */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 ">Issues by Priority</h3>
              <div className="flex items-end h-48">
                {chartData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center mx-2 w-10">
                    <div className="flex flex-col items-center justify-end h-40 mb-2 w-full">
                      <div
                        className={`w-full rounded-t-lg transition-all duration-300 flex items-center justify-center ${index % 2 === 0 ? 'bg-blue-500' : 'bg-white'
                          }`}
                        style={{ height: `${(item.value / maxValue) * 100}%` }}
                      >
                        <span className={`text-sm font-semibold ${index % 2 === 0 ? 'text-white' : 'text-blue-500'}`}>
                          {item.value}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>


            {/* Summary (تظهر على نفس السطر) */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {issuesData.map((issue, index) => (
                  <div
                    key={index}
                    className={`${issue.bgColor} rounded-lg p-4 flex items-center justify-between h-16`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${issue.iconColor}`}>
                        <span className="text-white font-semibold">!</span>
                      </div>
                      <span className="ml-3 text-gray-700 text-sm font-medium">{issue.type} Issues</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{issue.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;