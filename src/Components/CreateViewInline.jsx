import React, { useState } from "react";

const CreateViewInline = ({ onClose }) => {
  const [viewName, setViewName] = useState("");
  const [viewType, setViewType] = useState("accordion");
  const [selectedColumns, setSelectedColumns] = useState([]);

  const columns = [
    "Issue Name", "Help Text", "Severity", "Issue Type",
    "Issues Status", "Compliance", "Area", "Total Issues",
    "Code", "Engine", "Filter", "Description",
    "Status", "Assigned To", "Website Page", "Selector"
  ];

  const toggleColumn = (col) => {
    if (selectedColumns.includes(col)) {
      setSelectedColumns(selectedColumns.filter((c) => c !== col));
    } else {
      setSelectedColumns([...selectedColumns, col]);
    }
  };

  const handleSave = () => {
    console.log("View Saved:", { viewName, viewType, selectedColumns });
    onClose();
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 max-w-4xl mx-auto mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900">Create New View</h1>
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition font-medium shadow-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-600 transition font-medium shadow-sm"
          >
            Save
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-50 shadow-inner rounded-xl p-6 border border-gray-200">
        {/* View Name + Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">View Name</label>
            <input
              type="text"
              value={viewName}
              onChange={(e) => setViewName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition"
              placeholder="Enter view name..."
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Type View</label>
            <select
              value={viewType}
              onChange={(e) => setViewType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition"
            >
              <option value="accordion">Accordion</option>
              <option value="table">Table</option>
            </select>
          </div>
        </div>

        {/* Columns Checkbox */}
        <div>
          <h2 className="text-lg font-semibold text-blue-700 mb-4">Select Columns</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {columns.map((col, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition"
              >
                <input
                  type="checkbox"
                  checked={selectedColumns.includes(col)}
                  onChange={() => toggleColumn(col)}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-300 transition"
                />
                <span className="text-gray-800 text-sm font-medium">{col}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Selected Columns Preview */}
        {selectedColumns.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-blue-700 mb-3">Selected Columns</h2>
            <div className="flex flex-wrap gap-2">
              {selectedColumns.map((col, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm"
                >
                  {col}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateViewInline;
