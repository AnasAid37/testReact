import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-6">
      {/* Pagination */}
      <div className="flex flex-col items-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm bg-white border border-gray-200"
          aria-label="Pagination"
        >
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`relative inline-flex items-center border px-4 py-2 text-sm font-medium ${
                page === currentPage
                  ? "z-10 bg-teal-600 text-white border-teal-600"
                  : "bg-white text-gray-500 hover:bg-gray-50 border-gray-300"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </nav>

        {/* Copyright */}
        <p className="mt-3 text-xs text-gray-500">
          © 2025 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}
