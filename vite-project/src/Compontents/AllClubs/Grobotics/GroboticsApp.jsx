import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  Users,
  Globe,
  Zap,
  Cpu,
  Layers,
} from "lucide-react";
import { ChevronLeft, Facebook, Twitter, Instagram } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import EventsSection from "./EventsSection";
import ActivitiesSection from "./ActivitiesSection";
import Footer from "./Footer";


export default function GroboticsApp() {
  return (
    <div className="bg-[#111827] text-white min-h-screen w-full">
      <Header />
      {/* <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button className="text-white inline-flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300 ">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav> */}
      <Hero />
      <AboutSection />
      <EventsSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
}
