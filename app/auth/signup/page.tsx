"use client";

import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
import Navbar from "@/app/components/NavBar";
import Link from "next/link";

export default function SignUp() {
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
              Create Your Account
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Join Byway and start your learning journey today.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full text-gray-400 px-4 py-2 border rounded-lg focus:ring-blue-700 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full text-gray-400 px-4 py-2 border rounded-lg focus:ring-blue-700 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full text-gray-400 px-4 py-2 border rounded-lg focus:ring-blue-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full text-gray-400 px-4 py-2 border rounded-lg focus:ring-blue-700 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full text-gray-400 px-4 py-2 border rounded-lg focus:ring-blue-700 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full text-gray-400 px-4 py-2 border rounded-lg  focus:ring-blue-700focus:outline-none"
                  />
                </div>
              </div>

              <Link href="/dashboard" className="text-blue-600 hover:underline">
                <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg font-medium hover:bg-gray-900 transition"
              >
                Create Account →
              </button>
              </Link>
              
            </form>

            <div className="my-6 relative flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm bg-white px-3">
                Sign up with
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

            <p className="text-center text-gray-500  text-sm mt-6">
              Already have an account?{" "}
              <Link href="/dashboard" className="text-blue-600 font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}