import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import DataTable from "./components/DataTable";
import CreateViewInline from "./components/CreateViewInline";
import Pagination from "./components/Pagination";

function App() {
  const [showCreateView, setShowCreateView] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // حالة الـ sidebar

  // ⚡️ التحكم بالصفحات
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // بيانات تجريبية
  const issuesData = Array.from({ length: 23 }, (_, i) => ({
    name: `Issue ${i + 1}`,
    category: "UI",
    area: "Header",
    severity: "Medium",
    wcag: "Label 2.1.1",
    page: "/home",
    total: i + 1,
    assigned: { name: "User", avatar: "/avatar.jpg" },
  }));

  // ⚡️ حساب البيانات التي ستظهر في الصفحة الحالية
  const totalPages = Math.ceil(issuesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = issuesData.slice(startIndex, startIndex + itemsPerPage);

  // دالة لتبديل حالة الـ sidebar
  const toggleSidebar = () => {
    console.log('Toggling sidebar:', !isSidebarOpen); // للتأكد من أن الدالة تعمل
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log('Sidebar state:', isSidebarOpen); // للتأكد من تغير الحالة

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      {/* Overlay للشاشات الصغيرة فقط */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header onToggleSidebar={toggleSidebar} />
        <main className="p-4 overflow-y-auto bg-white">
          <StatsCard />

          {/* أزرار */}
          <div className="flex justify-between mb-4">
            <div className="space-x-2">
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                All Issues
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                All Details
              </button>
            </div>
            <div className="space-x-2">
              <button
                className="px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-700"
                onClick={() => setShowCreateView(!showCreateView)}
              >
                Add View
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                Export
              </button>
            </div>
          </div>

          {/* Inline Create View */}
          {showCreateView && (
            <div className="mb-4">
              <CreateViewInline onClose={() => setShowCreateView(false)} />
            </div>
          )}

          {/* DataTable */}
          <DataTable issuesData={currentData} />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
              }
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default App;