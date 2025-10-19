"use client";

import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm rounded-xl max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo.png"
              alt="Byway logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-lg sm:text-xl text-gray-800">Byway</span>
          </Link>

          <Link 
            href="/" // changed
            className="hidden md:block text-gray-600 hover:text-gray-900 ml-4"
          >
            Categories
          </Link>
        </div>

        <div className="hidden md:flex relative flex-1 max-w-md mx-6">
          <input
            type="text"
            placeholder="Search courses"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/" // changed from button
            className="relative"
          >
            <ShoppingCart size={20} className="text-gray-600 hover:text-gray-900" />
          </Link>
          <Link
            href="/" // changed
            className="text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/" // changed
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Sign Up
          </Link>
        </div>

        <div className="flex md:hidden items-center space-x-3">
          <Link href="/" className="relative">
            <ShoppingCart size={20} className="text-gray-600" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className="md:hidden pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
          <Link
            href="/" // changed
            className="block text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link
            href="/" // changed
            className="block text-center text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Log In
          </Link>
          <Link
            href="/" // changed
            className="block text-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
