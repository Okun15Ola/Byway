'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiHome, FiMessageSquare, FiSettings, FiLogOut } from 'react-icons/fi'
import { FaUserCircle } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi"
import Image from 'next/image'

const SideBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen)

  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: <FiHome size={24} /> },
    { name: 'Courses', href: '/courses', icon: <PiStudentBold size={24} /> },
    { name: 'Communication', href: '/communication', icon: <FiMessageSquare size={24} /> },
    { name: 'Revenue', href: '/revenue', icon: <FiMessageSquare size={24} /> },
    { name: 'Settings', href: '/settings', icon: <FiSettings size={24} /> },
  ]

  return (
    <div className="flex">
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      <div
        className={`
          fixed md:relative
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          w-64 md:w-64
          bg-gray-900 text-white h-screen p-5 pt-8
          z-30 transition-transform duration-300
        `}
      >
        <button
          className="absolute top-4 right-4 text-gray-300 hover:bg-gray-700 p-2 rounded-lg md:hidden"
          onClick={toggleMobileSidebar}
        >
          <FiX size={24} />
        </button>

        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/assets/logo.png"
            alt="Byway logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-bold text-2xl text-white group-hover:text-blue-600 transition-colors duration-300">
            Byway
          </span>
        </Link>

        <ul className="pt-8">
          {links.map((link) => (
            <li key={link.name} className="mb-4">
              <Link
                href={link.href}
                className={`flex items-center gap-x-4 p-2 rounded-lg text-gray-300 hover:bg-gray-700 duration-200 ${
                  pathname === link.href ? 'bg-gray-700 text-white' : ''
                }`}
              >
                {link.icon}
                <span className="text-sm font-medium">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-6 w-full pr-5">
          <Link
            href="/profile"
            className="flex items-center gap-x-3 p-2 rounded-lg text-gray-300 hover:bg-gray-700 w-full duration-200"
          >
            <FaUserCircle size={26} className="text-gray-400" />
            <span className="text-sm font-medium">
              Hi, John
            </span>
          </Link>
        </div>
      </div>

      <button
        className="fixed bottom-4 right-4 z-40 bg-gray-900 text-white p-3 rounded-full shadow-lg md:hidden"
        onClick={toggleMobileSidebar}
      >
        <FiMenu size={24} />
      </button>

      <div className="flex-1 p-6 md:ml-64">
        <h2 className="text-2xl font-semibold mb-4">Byway dashboard Content</h2>
        <p className="text-gray-700">
          This is where my Byway dashboard content will go.
        </p>
      </div>
    </div>
  )
}

export default SideBar
