import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mt-27 sm:mt-18">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Content */}
        <div className="flex-1 w-full lg:max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Unlock Your Potential with <span className="text-blue-600">Byway</span>
          </h1>
          <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Welcome to Byway, where learning knows no bounds. We believe that education
            is the key to personal and professional growth, and we're here to guide you 
            on your journey to success.
          </p>
          <Link
            href="#"
            className="mt-6 sm:mt-8 inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Start your instructor journey
          </Link>
        </div>

        {/* Right Side - Image with Stats (Desktop Only) */}
        <div className="hidden lg:flex flex-1 relative w-full max-w-lg h-[500px]">
          
          {/* Blue circular backgrounds */}
          <div className="absolute top-8 right-0 w-80 h-80 bg-blue-400 rounded-full"></div>
          <div className="absolute top-16 right-8 w-64 h-64 bg-blue-300 rounded-full"></div>
          
          {/* Instructor Image */}
          <div className="absolute top-0 left-8 right-0 z-10 h-full flex items-center justify-center">
            <div className="relative w-[320px] h-[420px]">
              <Image
                src="/assets/herogirl.png" 
                alt="Instructor"
                fill
                className="object-contain"
                priority
                quality={100}
                sizes="320px"
              />
            </div>
          </div>

          {/* Completion Rate Card - Top Right */}
          <div className="absolute top-0 right-0 bg-white shadow-lg rounded-2xl px-5 py-4 z-20 min-w-[160px]">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <div className="relative w-14 h-14">
                  <svg className="transform -rotate-90 w-14 h-14">
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      stroke="#3b82f6"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="150.8"
                      strokeDashoffset="23"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">87.6%</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Completion rate</p>
                <p className="text-xs text-gray-500">of our courses</p>
              </div>
            </div>
          </div>

          {/* Courses Sold Card - Left Side */}
          <div className="absolute top-32 left-0 bg-white shadow-lg rounded-2xl px-5 py-3 z-20 flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 leading-tight">Number of courses</p>
              <p className="text-xs text-gray-500 mb-1">sold</p>
              <p className="text-xl font-bold text-gray-900">100,000+</p>
            </div>
          </div>
          
          {/* Community Card - Bottom Left */}
          <div className="absolute bottom-0 left-8 bg-white shadow-lg rounded-2xl px-5 py-3 z-20 flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white"></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Join our community</p>
              <p className="text-xs text-gray-500">of 1200+ Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}