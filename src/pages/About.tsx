import React from 'react';
import { Zap, Target, Users, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About BrandStarter
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to democratize professional branding. Every business deserves 
            a strong brand identity, regardless of budget or design experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                BrandStarter was born from a simple observation: too many great businesses 
                struggle with creating professional brand identities. Traditional branding 
                agencies are expensive and time-consuming, while DIY solutions often lack 
                the depth and professionalism needed.
              </p>
              <p>
                We built BrandStarter to bridge this gap. Using intelligent algorithms and 
                industry best practices, we generate comprehensive brand identity kits that 
                rival those created by professional agencies – but in minutes, not months.
              </p>
              <p>
                Whether you're a startup founder, small business owner, or entrepreneur, 
                BrandStarter gives you the tools to create a professional brand presence 
                that resonates with your audience and drives business growth.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Professional slogans and taglines</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Complete "About Us" copy variations</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Industry-specific color palettes</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Logo concept directions</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Brand personality and tone guidelines</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Ready-to-use marketing copy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Focused</h3>
            <p className="text-gray-400">
              Every element is designed to serve your brand's specific industry and goals.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast</h3>
            <p className="text-gray-400">
              Generate comprehensive brand kits in minutes, not weeks or months.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Accessible</h3>
            <p className="text-gray-400">
              Professional branding tools available to everyone, regardless of budget.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Practical</h3>
            <p className="text-gray-400">
              Everything you receive is ready to implement across your business.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Brand?</h2>
          <p className="text-blue-100 text-lg mb-6">
            Join thousands of entrepreneurs who've successfully launched their brands with BrandStarter.
          </p>
          <a
            href="/generate"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Start Creating Your Brand
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;