import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InstructorSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      
      {/* Single White Card with Both Sections */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
        
       

        {/* Bottom Section - Blue Background */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content - Left */}
          <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-16 py-8 lg:py-16 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Become an Instructor
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Instructors from around the world teach millions of students on Byway. 
              We provide the tools and skills to teach what you love.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Start Your Instructor Journey
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Blue Image Section - Right */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 p-8 lg:p-16 flex items-center justify-center min-h-[400px] lg:min-h-[500px] order-1 lg:order-2">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[450px]">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-40"></div>
              <Image
                src="/assets/instr3.png"
                alt="Instructor working"
                fill
                className="object-contain relative z-10"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}