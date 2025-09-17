import React, { useState, useMemo } from "react";

const DataTable = ({ issuesData, selectedView }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // تصفية البيانات بناءً على البحث
  const filteredData = useMemo(() => {
    if (!searchTerm) return issuesData;
    
    return issuesData.filter((issue) =>
      // البحث في جميع الحقول
      issue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.severity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.wcag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.page.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.assigned.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [issuesData, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{selectedView}</h3>
        <div className="text-sm text-gray-500">
          {filteredData.length} of {issuesData.length} items
          {searchTerm && (
            <span className="ml-2 text-blue-600">
              (filtered by: "{searchTerm}")
            </span>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4 w-full">
        <div className="flex-1 flex flex-col">
          <label htmlFor="area" className="text-sm font-medium text-gray-700 mb-1">Area</label>
          <select
            id="area"
            className="border border-gray-300 rounded-md p-2 text-sm hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          >
            <option value="">All</option>
          </select>
        </div>

        <div className="flex-1 flex flex-col">
          <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            id="category"
            className="border border-gray-300 rounded-md p-2 text-sm hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          >
            <option value="">Alt text</option>
          </select>
        </div>

        <div className="flex-1 flex flex-col">
          <label htmlFor="severity" className="text-sm font-medium text-gray-700 mb-1">Severity</label>
          <select
            id="severity"
            className="border border-gray-300 rounded-md p-2 text-sm hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          >
            <option value="">All</option>
          </select>
        </div>

        <div className="flex-1 flex flex-col">
          <label htmlFor="team" className="text-sm font-medium text-gray-700 mb-1">All</label>
          <select
            id="team"
            className="border border-gray-300 rounded-md p-2 text-sm hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          >
            <option value="">Select Team Member</option>
          </select>
        </div>
      </div>

      {/* Search Input with Clear Button */}
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search issues by name, category, area, severity, WCAG, page, or assigned person..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full border border-gray-300 rounded-md p-2 pr-10 text-sm hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg font-bold"
            title="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* No Results Message */}
      {filteredData.length === 0 && searchTerm && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-lg mb-2">No results found</p>
          <p className="text-sm">
            No issues match your search for "{searchTerm}". 
            <button 
              onClick={clearSearch}
              className="text-blue-600 hover:text-blue-800 ml-1"
            >
              Clear search
            </button>
          </p>
        </div>
      )}

      {/* Table */}
      {filteredData.length > 0 && (
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Area
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  WCAG
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Page
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Issues
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((issue, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {/* تمييز نص البحث */}
                    <span dangerouslySetInnerHTML={{
                      __html: searchTerm 
                        ? issue.name.replace(
                            new RegExp(`(${searchTerm})`, 'gi'),
                            '<mark class="bg-yellow-200 px-1 rounded">$1</mark>'
                          )
                        : issue.name
                    }} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span dangerouslySetInnerHTML={{
                      __html: searchTerm 
                        ? issue.category.replace(
                            new RegExp(`(${searchTerm})`, 'gi'),
                            '<mark class="bg-yellow-200 px-1 rounded">$1</mark>'
                          )
                        : issue.category
                    }} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span dangerouslySetInnerHTML={{
                      __html: searchTerm 
                        ? issue.area.replace(
                            new RegExp(`(${searchTerm})`, 'gi'),
                            '<mark class="bg-yellow-200 px-1 rounded">$1</mark>'
                          )
                        : issue.area
                    }} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span dangerouslySetInnerHTML={{
                      __html: searchTerm 
                        ? issue.severity.replace(
                            new RegExp(`(${searchTerm})`, 'gi'),
                            '<mark class="bg-yellow-200 px-1 rounded">$1</mark>'
                          )
                        : issue.severity
                    }} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span dangerouslySetInnerHTML={{
                      __html: searchTerm 
                        ? issue.wcag.replace(
                            new RegExp(`(${searchTerm})`, 'gi'),
                            '<mark class="bg-yellow-200 px-1 rounded">$1</mark>'
                          )
                        : issue.wcag
                    }} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span dangerouslySetInnerHTML={{
                      __html: searchTerm 
                        ? issue.page.replace(
                            new RegExp(`(${searchTerm})`, 'gi'),
                            '<mark class="bg-yellow-200 px-1 rounded">$1</mark>'
                          )
                        : issue.page
                    }} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center gap-2">
                    <img src={issue.assigned.avatar} alt="avatar" className="w-6 h-6 rounded-full" />
                    <span dangerouslySetInnerHTML={{
                      __html: searchTerm 
                        ? issue.assigned.name.replace(
                            new RegExp(`(${searchTerm})`, 'gi'),
                            '<mark class="bg-yellow-200 px-1 rounded">$1</mark>'
                          )
                        : issue.assigned.name
                    }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataTable;