import React, { useState } from "react";
import { Navbar } from "./Navigation/Navbar";
import { Sidebar } from "./Navigation/Sidebar";
import { FeaturedClubs } from "./DashBoard/FeaturedClub";
import { RightSidebar } from "./DashBoard/RightSidebar";

export default function DashboardApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
      />
      <Sidebar isOpen={sidebarOpen} />
      <main
        className={`pt-16 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"} mr-64`}
      >
        <div className="p-6">
          <FeaturedClubs />
          {/* Additional dashboard sections will be added here */}
        </div>
      </main>
      <RightSidebar />
    </div>
  );
}
