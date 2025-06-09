import React from 'react';
import { CAMPUS_INFO } from '../constants';
import CampusCard from '../components/CampusCard';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

const CampusPage: React.FC = () => {
  return (
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-[#f8f5f0] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A2511] mb-6">
              Our <span className="text-[#FF7F50]">Campuses</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Discover our state-of-the-art educational facilities designed to inspire learning, 
              creativity, and growth in a safe and nurturing environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#FF7F50] hover:bg-[#FF6B41] text-white font-semibold py-3 px-8 rounded-full transition-colors">
                Schedule a Tour
              </button>
              <button className="bg-white hover:bg-gray-100 text-[#4A2511] font-semibold py-3 px-8 rounded-full border border-[#4A2511] transition-colors">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-12 left-12 w-16 h-16">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FF7F50] opacity-40">
            <path d="M12 8L6 14H18L12 8Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-12 right-12 w-20 h-20">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#4CAF50] opacity-40">
            <circle cx="12" cy="12" r="8" fill="currentColor" />
          </svg>
        </div>
      </section>
      
      {/* Campus Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAMPUS_INFO.map((campus, index) => (
              <CampusCard key={index} campus={campus} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Campus Features */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4A2511] mb-4">
              What Makes Our Campuses <span className="text-[#FF7F50]">Special</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our campuses are designed with the needs of children in mind, creating 
              environments that foster learning, creativity, and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-[#FF7F50] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4A2511] mb-2">Safe Environment</h3>
              <p className="text-gray-600">
                Security systems, trained staff, and strict protocols ensure children's safety at all times.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4A2511] mb-2">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art classrooms, labs, and recreational spaces equipped with the latest technology.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-[#2196F3] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4A2511] mb-2">Expert Faculty</h3>
              <p className="text-gray-600">
                Passionate educators with specialized training and experience in childhood education.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4A2511] mb-2">Supportive Community</h3>
              <p className="text-gray-600">
                Inclusive environment where children, parents, and educators collaborate for success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus Map and Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-full lg:w-1/2 bg-[#f8f5f0] p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#4A2511] mb-6">Contact Our Campus Team</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#FF7F50] mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Main Administrative Office<br />
                    123 Education Lane<br />
                    Learning City, LC 12345
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#FF7F50] mr-3 flex-shrink-0" />
                  <p className="text-gray-700">(555) 123-4567</p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#FF7F50] mr-3 flex-shrink-0" />
                  <p className="text-gray-700">campus@edukids.com</p>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-[#FF7F50] mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Tours available Monday-Friday, 9am-4pm</p>
                </div>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF7F50] focus:border-[#FF7F50]"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF7F50] focus:border-[#FF7F50]"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF7F50] focus:border-[#FF7F50]"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#FF7F50] hover:bg-[#FF6B41] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="w-full lg:w-1/2 h-[400px] bg-gray-200 rounded-xl overflow-hidden">
              {/* This would be a real map in production */}
              <div className="w-full h-full flex items-center justify-center bg-[#E0E0E0]">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#FF7F50] mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Interactive Campus Map</p>
                  <p className="text-gray-500 text-sm mt-2">Map loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CampusPage;
