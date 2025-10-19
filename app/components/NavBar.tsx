"use client";

import { useState } from "react";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border border-gray-100 rounded-2xl max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="flex items-center justify-between py-4">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-6">
          <a href="/" className="flex items-center space-x-3 group">
             <Image
              src="/assets/logo.png"
              alt="Byway logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Byway
            </span>
          </a>

          <a href="/" className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group">
            <span className="font-medium">Categories</span>
            <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex relative flex-1 max-w-xl mx-8">
          <div className={`relative w-full transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
            <input
              type="text"
              placeholder="Search for courses, skills, or topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full pl-11 pr-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400
                ${isFocused 
                  ? 'border-blue-500 bg-white shadow-lg shadow-blue-100' 
                  : 'border-transparent hover:bg-gray-100'
                }`}
            />
            <Search 
              className={`absolute left-3.5 top-3.5 transition-colors duration-300 ${
                isFocused ? 'text-blue-500' : 'text-gray-400'
              }`} 
              size={20} 
            />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <a href="/" className="relative p-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
            <ShoppingCart size={22} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
              0
            </span>
          </a>

          <div className="w-px h-8 bg-gray-200 mx-2"></div>

          <a
            href="/"
            className="text-gray-700 font-medium px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:text-blue-600"
          >
            Log In
          </a>
          <a
            href="/"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center space-x-3">
          <a href="/" className="relative p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <ShoppingCart size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-600" />
            ) : (
              <Menu size={24} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-400"
          />
          <Search className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 py-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            href="/"
            className="flex items-center justify-between text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="font-medium">Categories</span>
            <ChevronDown size={16} />
          </a>
          <div className="h-px bg-gray-100 my-2"></div>
          <a
            href="/"
            className="block text-center text-gray-700 font-medium border-2 border-gray-200 px-4 py-3 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Log In
          </a>
          <a
            href="/"
            className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}