import React, { useState } from "react";
import { X, Undo, Save } from "lucide-react";

const CreateViewInline = ({ onClose }) => {
  const [viewName, setViewName] = useState("");
  const [viewType, setViewType] = useState("accordion");
  const [selectedColumns, setSelectedColumns] = useState([
    "Issue Name", "Issues Status", "Compliance", "Area", "Website page", "Total Issues"
  ]);

  const columns = [
    { name: "Issue Name", checked: true },
    { name: "Help Text", checked: false },
    { name: "Severity", checked: false },
    { name: "Issue Type", checked: false },
    { name: "Issues Status", checked: true },
    { name: "Compliance", checked: true },
    { name: "Area", checked: true },
    { name: "Total Issues", checked: true },
    { name: "Code", checked: false },
    { name: "Engine", checked: false },
    { name: "Filter", checked: false },
    { name: "Description", checked: false },
    { name: "Status", checked: false },
    { name: "Assigned to", checked: false },
    { name: "Website page", checked: true },
    { name: "Selector", checked: false }
  ];

  const toggleColumn = (colName) => {
    if (selectedColumns.includes(colName)) {
      setSelectedColumns(selectedColumns.filter((c) => c !== colName));
    } else {
      setSelectedColumns([...selectedColumns, colName]);
    }
  };

  const removeSelectedColumn = (colName) => {
    setSelectedColumns(selectedColumns.filter((c) => c !== colName));
  };

  const handleSave = () => {
    console.log("View Saved:", { viewName, viewType, selectedColumns });
    onClose();
  };

  return (
    <div className="flex justify-center w-full bg-gray-50 ">
      <div className="bg-white rounded-lg border border-gray-300 shadow-sm max-w-5xl w-full mx-4 my-6">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-800">Create New View</h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-4 h-4 mr-1" />
              Cancel
            </button>
            <button className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 transition-colors">
              <Undo className="w-4 h-4 mr-1" />
              Undo
            </button>
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
            >
              <Save className="w-4 h-4 mr-1" />
              Save
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* View Name and Type */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">View Name</label>
              <input
                type="text"
                value={viewName}
                onChange={(e) => setViewName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter view name..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select View Type</label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="viewType"
                    value="accordion"
                    checked={viewType === "accordion"}
                    onChange={(e) => setViewType(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`flex items-center px-4 py-2 rounded-md border text-sm ${
                    viewType === "accordion" 
                      ? "bg-blue-50 border-blue-300 text-blue-800" 
                      : "bg-white border-gray-300 text-gray-600"
                  }`}>
                    <div className="w-4 h-4 mr-2 flex flex-col justify-center">
                      <div className="h-0.5 bg-current mb-0.5"></div>
                      <div className="h-0.5 bg-current mb-0.5"></div>
                      <div className="h-0.5 bg-current"></div>
                    </div>
                    Accordion
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="viewType"
                    value="table"
                    checked={viewType === "table"}
                    onChange={(e) => setViewType(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`flex items-center px-4 py-2 rounded-md border text-sm ${
                    viewType === "table" 
                      ? "bg-blue-50 border-blue-300 text-blue-800" 
                      : "bg-white border-gray-300 text-gray-600"
                  }`}>
                    <div className="w-4 h-4 mr-2 grid grid-cols-2 gap-0.5">
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                    </div>
                    Table
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Columns Selection */}
          <div className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {columns.map((col, index) => (
                <label
                  key={index}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedColumns.includes(col.name)}
                    onChange={() => toggleColumn(col.name)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-2"
                  />
                  <span className="text-sm text-gray-700">{col.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Selected Columns */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Selected Columns</h3>
            <div className="flex flex-wrap gap-2">
              {selectedColumns.map((col, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  {col}
                  <button
                    onClick={() => removeSelectedColumn(col)}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateViewInline;