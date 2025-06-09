import React from 'react';
import { ArrowRight, BookOpen, Video, Users, Award, Mail, Phone, MapPin } from 'lucide-react';

const LearningPage: React.FC = () => {
  return (
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-[#f8f5f0] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A2511] mb-6">
              Begin Your Learning <span className="text-[#FF7F50]">Journey</span>
            </h1>
            <p className="text-gray-700 text-lg">
              Experience world-class education at Sankalp Public School
            </p>
          </div>
        </div>
      </section>

      {/* School Images Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg" 
                alt="School Library" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">Modern Library</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/8535237/pexels-photo-8535237.jpeg" 
                alt="Science Lab" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">Science Laboratory</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg" 
                alt="Computer Lab" 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">Computer Lab</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Enquiry Form */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-[#4A2511] mb-8">
                Why Choose Our Learning Programs?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-[#FF7F50] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#4A2511] mb-2">Comprehensive Curriculum</h3>
                    <p className="text-gray-600">Structured learning paths designed for optimal understanding and retention</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#4A2511] mb-2">Interactive Learning</h3>
                    <p className="text-gray-600">Engaging multimedia content and hands-on activities</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-[#2196F3] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#4A2511] mb-2">Expert Teachers</h3>
                    <p className="text-gray-600">Learn from experienced educators dedicated to student success</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#4A2511] mb-6">Enquire Now</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student's Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF7F50] focus:border-[#FF7F50]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent's Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF7F50] focus:border-[#FF7F50]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF7F50] focus:border-[#FF7F50]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF7F50] focus:border-[#FF7F50]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program of Interest
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF7F50] focus:border-[#FF7F50]"
                    required
                  >
                    <option value="">Select Program</option>
                    <option value="primary">Primary Education</option>
                    <option value="secondary">Secondary Education</option>
                    <option value="computer">Computer Science</option>
                    <option value="arts">Creative Arts</option>
                    <option value="sports">Sports Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF7F50] focus:border-[#FF7F50]"
                    placeholder="Any specific questions or requirements?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF7F50] hover:bg-[#FF6B41] text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  Submit Enquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearningPage;
