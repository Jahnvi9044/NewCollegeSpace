import React from "react";
import {
  Home,
  Calendar,
  Users,
  Bell,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { href,NavLink } from "react-router-dom";

export const Sidebar = ({ isOpen }) => {
  const menuItems = [
    {
      icon: Home,
      label: "Home",
      href:"/"
    },
    {
      icon: Calendar,
      label: "Events",
      href:"/event"
    },
    {
      icon: Users,
      label: "Clubs",
      href:"/clubs"
    },
    {
      icon: Bell,
      label: "Announcements",
      href:"/notification"
    },
    {
      icon: MessageSquare,
      label: "Messages",
      href:"/messages"
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900 border-r border-gray-800 transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="py-4">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.href}
            key={index}
            className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 transition-colors"
          >
            <item.icon className="h-5 w-5 min-w-[20px]" />
            {isOpen && <span className="ml-4">{item.label}</span>}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};
