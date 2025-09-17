import React from 'react';
import { Activity, Calendar, Globe, CheckCircle, Database, Home, ChevronRight } from 'lucide-react';

const StatsCard = () => {
  const chartData = [
    { label: 'Critical', value: 5, color: 'bg-red-500' },
    { label: 'High', value: 8, color: 'bg-orange-500' },
    { label: 'Medium', value: 12, color: 'bg-yellow-500' },
    { label: 'Low', value: 7, color: 'bg-blue-500' }
  ];

  const issuesData = [
    { type: 'Critical', count: 5, bgColor: 'bg-red-50', iconColor: 'bg-red-500' },
    { type: 'High', count: 8, bgColor: 'bg-orange-50', iconColor: 'bg-orange-500' },
    { type: 'Medium', count: 12, bgColor: 'bg-yellow-50', iconColor: 'bg-yellow-500' },
    { type: 'Low', count: 7, bgColor: 'bg-blue-50', iconColor: 'bg-blue-500' }
  ];

  const maxValue = Math.max(...chartData.map(item => item.value));

  return (
    <div className="relative w-4/5 mx-auto bg-white rounded-lg shadow-md p-6 overflow-hidden">
      <div className="absolute -top-48 -left-20 w-40 h-80 bg-teal-600 -skew-x-12 -translate-x-5 z-0 opacity-100"></div>
      <div className="absolute -top-20 -right-0 w-32 h-60 bg-pink-500 skew-x-12 translate-x-4 z-0 opacity-100"></div>
      <div className="absolute -bottom-0 -right-40 w-60 h-40 bg-green-300 -skew-x-12 translate-x-8 z-0 opacity-100"></div>
      <div className="absolute -bottom-20 -left-32 w-60 h-60 bg-yellow-400 rounded-full z-0 opacity-100"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200 relative z-10">
          <div className="flex items-center text-base text-gray-700">
            <div className="flex items-center">
              <Home className="w-5 h-5 mr-2" />
              <span className="hover:text-blue-600 cursor-pointer transition-colors font-medium">Home</span>
            </div>
            <ChevronRight className="w-5 h-5 mx-2 text-gray-400" />
            <span className="hover:text-blue-600 cursor-pointer transition-colors font-medium">Scans</span>
            <ChevronRight className="w-5 h-5 mx-2 text-gray-400" />
            <span className="hover:text-blue-600 cursor-pointer transition-colors font-medium">Websites</span>
            <ChevronRight className="w-5 h-5 mx-2 text-gray-400" />
            <span className="hover:text-blue-600 cursor-pointer transition-colors font-medium">scan_name</span>
            <ChevronRight className="w-5 h-5 mx-2 text-gray-400" />
            <span className="text-blue-600 font-semibold text-base">Issues</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 36 36" className="w-10 h-10">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  stroke="#4ade80"
                  strokeWidth="3"
                  strokeDasharray="60, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                />
                <text x="18" y="20.35" className="text-sm font-semibold" textAnchor="middle" fill="#374151">
                  60%
                </text>
              </svg>
            </div>
            <div className="text-base text-gray-800 font-medium">Usage</div>
            <button className="text-sm text-blue-800 hover:text-blue-800 font-medium underline">
              Upgrade now
            </button>
          </div>
        </div>


        {/* Main Content */}
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Title  </h1>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Activity className="w-5 h-5 text-blue-500 mr-2" />
              <span className="font-semibold">Scan type:</span>
              <span className="ml-1">Web</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-green-500 mr-2" />
              <span className="font-semibold">Date:</span>
              <span className="ml-1">10 oct 2004</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-purple-500 mr-2" />
              <span className="font-semibold">www.websitename.com</span>
              <span className="ml-1">| scan_name</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="font-semibold">Status:</span>
              <span className="ml-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Completed
              </span>
            </div>
          </div>
        </div>

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
                  stroke="#3b82f6"   // لون الخط الأزرق
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
              {/* الرقم في الوسط */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">22</span>
              </div>
            </div>
          </div>



          {/* Issues by Priority */}
          <div className="bg-gray-50 rounded-lg p-6 flex flex-col lg:flex-row gap-6 lg:w-3/4">
            {/* الأعمدة (Issues by Priority) */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Issues by Priority</h3>
              <div className="flex items-end h-48">
                {chartData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center mx-1 w-15">
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
