

"use client";

import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
import Navbar from "@/app/components/NavBar";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center pb-10 bg-gray-50 px-4 pt-24">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center w-full max-w-5xl overflow-hidden">
          
          <div className="w-full md:w-1/2 h-56 md:h-full">
            <img
              src="/assets/signup.png"
              alt="Student Learning"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
              Welcome Back 👋
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Log in to continue your learning journey
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full text-gray-400 px-4 py-2 border rounded-lg focus:ring-blue-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full text-gray-400 px-4 py-2 border rounded-lg focus:ring-blue-700 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>
              <Link href="/dashboard" className="text-blue-600 hover:underline">
                <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg font-medium hover:bg-gray-900 transition"
              >
                Sign In →
              </button>
              </Link>
              
            </form>
            <div className="my-6 relative flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm bg-white px-3">
                Or sign in with
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 border px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition text-sm font-medium">
                <FaFacebook className="text-blue-600" /> Facebook
              </button>
              <button className="flex items-center gap-2 border px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition text-sm font-medium">
                <FaGoogle className="text-red-500" /> Google
              </button>
              <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700 text-sm font-medium">
                <FaMicrosoft className="text-yellow-600" /> Microsoft
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              Don’t have an account?{" "}
              <a
                href="/auth/signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Create one
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

