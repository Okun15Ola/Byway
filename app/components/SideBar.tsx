'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FiMenu, FiX, FiHome, FiMessageSquare, FiSettings } from 'react-icons/fi'
import { FaUserCircle } from "react-icons/fa"
import { PiStudentBold } from "react-icons/pi"
import Image from 'next/image'

const SideBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen)

  // ✅ Close sidebar and go to dashboard when any link is clicked (on mobile)
  const handleNavClick = () => {
    if (window.innerWidth < 768) { // only on mobile screens
      setIsMobileOpen(false)
      router.push('/dashboard')
    }
  }

  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: <FiHome size={24} /> },
    { name: 'Courses', href: '#', icon: <PiStudentBold size={24} /> },
    { name: 'Communication', href: '#', icon: <FiMessageSquare size={24} /> },
    { name: 'Revenue', href: '#', icon: <FiMessageSquare size={24} /> },
    { name: 'Settings', href: '#', icon: <FiSettings size={24} /> },
  ]

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      <div
        className={`
          fixed md:sticky md:top-0
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          w-64
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

        <Link href="/dashboard" className="flex items-center space-x-3 group">
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

        <ul className="pt-8 space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={handleNavClick}
                className={`flex items-center gap-x-4 p-3 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors duration-200 w-full text-left ${
                  pathname === link.href ? 'bg-gray-700 text-white' : ''
                }`}
              >
                {link.icon}
                <span className="text-sm font-medium">
                  {link.name}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-6 left-5 right-5">
          <Link
            href="/profile"
            className="flex items-center gap-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors duration-200"
          >
            <FaUserCircle size={26} className="text-gray-400" />
            <span className="text-sm font-medium">
              Hi, John
            </span>
          </Link>
        </div>
      </div>

      <button
        className="fixed bottom-4 right-4 z-40 bg-gray-900 text-white p-3 rounded-full shadow-lg md:hidden hover:bg-gray-800 transition-colors"
        onClick={toggleMobileSidebar}
      >
        <FiMenu size={24} />
      </button>
    </>
  )
}

export default SideBar
