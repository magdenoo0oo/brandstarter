import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, FileText, Zap, Download, Copy, Star } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Generate Your
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                {' '}Complete Brand Identity
              </span>
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-300">
              Create professional brand kits instantly. Get slogans, color palettes, 
              logo mockups, and complete brand guidelines in seconds.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/generate"
                className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
              >
                <span>Start Creating</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 text-lg font-semibold text-white transition-all duration-200 border border-gray-600 rounded-lg hover:border-gray-500 hover:bg-gray-800"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Everything You Need for Your Brand
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-300">
              Our AI-powered generator creates comprehensive brand identity kits 
              tailored to your industry and vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 transition-all duration-300 bg-gray-900 border border-gray-700 rounded-xl hover:border-blue-500">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-blue-600 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">Brand Copy</h3>
              <p className="text-gray-400">
                Generate professional slogans, about us sections, and marketing copy 
                that resonates with your target audience.
              </p>
            </div>
            
            <div className="p-8 transition-all duration-300 bg-gray-900 border border-gray-700 rounded-xl hover:border-purple-500">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-purple-600 rounded-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">Color Palettes</h3>
              <p className="text-gray-400">
                Get industry-specific color schemes with HEX codes and usage guidelines 
                for consistent brand application.
              </p>
            </div>
            
            <div className="p-8 transition-all duration-300 bg-gray-900 border border-gray-700 rounded-xl hover:border-green-500">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-green-600 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">Logo Concepts</h3>
              <p className="text-gray-400">
                Explore different logo directions with icon+text, wordmark, 
                and monogram variations for your brand.
              </p>
            </div>
            
            <div className="p-8 transition-all duration-300 bg-gray-900 border border-gray-700 rounded-xl hover:border-orange-500">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-orange-600 rounded-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">Brand Personality</h3>
              <p className="text-gray-400">
                Define your brand's character with personality traits and 
                communication tone guidelines.
              </p>
            </div>
            
            <div className="p-8 transition-all duration-300 bg-gray-900 border border-gray-700 rounded-xl hover:border-pink-500">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-pink-600 rounded-lg">
                <Copy className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">Use Cases</h3>
              <p className="text-gray-400">
                Get practical examples for homepage copy, packaging text, 
                and social media bios ready to use.
              </p>
            </div>
            
            <div className="p-8 transition-all duration-300 bg-gray-900 border border-gray-700 rounded-xl hover:border-red-500">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-red-600 rounded-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">Export & Save</h3>
              <p className="text-gray-400">
                Download your complete brand kit as PDF or save individual 
                components for easy access and sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Build Your Brand?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Join thousands of entrepreneurs who've created their brand identity with BrandStarter.
          </p>
          <Link
            to="/generate"
            className="inline-flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-blue-600 transition-all duration-200 transform bg-white rounded-lg hover:bg-gray-100 hover:scale-105"
          >
            <span>Generate Your Brand Kit</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;