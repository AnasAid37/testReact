import { useState } from "react";
import {
  Home,
  Folder,
  FileText,
  Wrench,
  Activity,
  Monitor,
  Play,
  Book,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: <Home size={22} /> },
  { icon: <Folder size={22} /> },
  { icon: <FileText size={22} /> },
  { icon: <Wrench size={22} /> },
  { icon: <Activity size={22} /> },
  { icon: <Monitor size={22} /> },
  { icon: <Play size={22} /> },
  { icon: <Book size={22} /> },
  { icon: <Settings size={22} /> },
];

export default function Sidebar({ isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0); // الافتراضي الزر الأول

  return (
    <div
      className={`fixed md:static top-0 left-0 h-screen w-16 bg-white flex flex-col items-center py-6 space-y-4 shadow-md transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {menuItems.map((item, idx) => (
        <button
          key={idx}
          onClick={() => setActiveIndex(idx)}
          className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors
            ${
              activeIndex === idx
                ? "bg-teal-400 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}
