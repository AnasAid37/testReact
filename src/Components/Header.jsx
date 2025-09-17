import React from 'react';
import { Menu, Bell, Search, ChevronDown } from 'lucide-react';

const Header = ({ onToggleSidebar }) => {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
                <div className="flex items-center">
                    <button 
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={onToggleSidebar} // استدعاء دالة تبديل الـ sidebar
                    >
                        <Menu className="h-5 w-5 text-gray-700" />
                    </button>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer group">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        👤
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;