import React, { useState, useMemo } from "react";
import { Search, ChevronDown, Plus, MoreHorizontal } from "lucide-react";

const DataTable = ({ issuesData, selectedView }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const sampleData = [
    {
      id: 1,
      name: "Issue Name",
      category: "Text-alt",
      area: "Content",
      severity: "High",
      wcag: "Alt Text 1.1.1",
      page: "/contact",
      total: 22,
      assigned: { name: "Yassine", avatar: "Y", color: "bg-teal-500" }
    },
    {
      id: 2,
      name: "Issue Name",
      category: "Text-alt",
      area: "Content",
      severity: "High",
      wcag: "Multiple (1)",
      page: "/contact",
      total: 22,
      assigned: { name: "Yassine", avatar: "Y", color: "bg-teal-500" }
    },
    {
      id: 3,
      name: "Issue Name",
      category: "Text-alt",
      area: "Content",
      severity: "High",
      wcag: "Multiple (2)",
      page: "/contact",
      total: 22,
      assigned: { name: "Yassine", avatar: "Y", color: "bg-teal-500" }
    },
    {
      id: 4,
      name: "Issue Name",
      category: "Text-alt",
      area: "Content",
      severity: "High",
      wcag: "Multiple (3)",
      page: "/contact",
      total: 22,
      assigned: [
        { name: "Said", avatar: "S", color: "bg-teal-500" },
        { name: "Yassine", avatar: "Y", color: "bg-teal-500" }
      ]
    },
    {
      id: 5,
      name: "Issue Name",
      category: "Text-alt",
      area: "Content",
      severity: "High",
      wcag: "Multiple (4)",
      page: "/contact",
      total: 22,
      assigned: { name: "Not Assigned", avatar: null, color: "bg-gray-400" }
    },
    {
      id: 6,
      name: "Issue Name",
      category: "Text-alt",
      area: "Content",
      severity: "High",
      wcag: "Alt Text 1.1.1",
      page: "/contact",
      total: 22,
      assigned: { name: "Not Assigned", avatar: null, color: "bg-gray-400" }
    }
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center w-full bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm max-w-7xl w-full mx-4 my-6">
        {/* Filters Row */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
              <div className="relative">
                <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="relative">
                <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Text_alt</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Severity</label>
              <div className="relative">
                <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Team Member</label>
              <div className="relative">
                <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 flex items-center">
                  Issues
                  <ChevronDown className="ml-1 w-4 h-4" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Category
                  <ChevronDown className="ml-1 w-4 h-4 inline" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Area
                  <ChevronDown className="ml-1 w-4 h-4 inline" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Severity
                  <ChevronDown className="ml-1 w-4 h-4 inline" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                  WCAG
                  <ChevronDown className="ml-1 w-4 h-4 inline" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Page
                  <ChevronDown className="ml-1 w-4 h-4 inline" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Total Issues
                  <ChevronDown className="ml-1 w-4 h-4 inline" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Assigned
                  <ChevronDown className="ml-1 w-4 h-4 inline" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sampleData.map((issue, index) => (
                <tr key={issue.id} className="hover:bg-gray-50 group">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button className="mr-3 p-1 hover:bg-gray-200 rounded">
                        <Plus className="w-4 h-4 text-gray-400" />
                      </button>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded border mr-3 flex items-center justify-center">
                          <div className="w-4 h-3 bg-gray-300 rounded-sm flex flex-col justify-between">
                            <div className="h-0.5 bg-gray-400 rounded"></div>
                            <div className="h-0.5 bg-gray-400 rounded"></div>
                            <div className="h-0.5 bg-gray-400 rounded"></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                          {issue.name}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{issue.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{issue.area}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-600">{issue.severity}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-teal-100 text-teal-800">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-1.5"></span>
                      {issue.wcag}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{issue.page}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">{issue.total}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {Array.isArray(issue.assigned) ? (
                        <div className="flex items-center -space-x-1">
                          {issue.assigned.map((person, idx) => (
                            <div key={idx} className={`w-8 h-8 rounded-full ${person.color} flex items-center justify-center text-white text-xs font-medium border-2 border-white`}>
                              {person.avatar}
                            </div>
                          ))}
                          <div className="ml-2 text-xs text-gray-600">
                            {issue.assigned.map(p => p.name).join(' ')}
                          </div>
                        </div>
                      ) : issue.assigned.avatar ? (
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full ${issue.assigned.color} flex items-center justify-center text-white text-xs font-medium mr-2`}>
                            {issue.assigned.avatar}
                          </div>
                          <span className="text-sm text-gray-600">{issue.assigned.name}</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                            <div className="w-4 h-4 border-2 border-gray-400 rounded-full relative">
                              <div className="absolute inset-0 border-l-2 border-gray-400 transform rotate-45"></div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{issue.assigned.name}</span>
                        </div>
                      )}
                      <button className="ml-auto opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;