import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BrandData } from '../types';
import { saveBrandData } from '../utils/storage';

const Generate: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BrandData>({
    brandName: '',
    industry: '',
    keywords: '',
    tone: '',
    timestamp: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const industries = [
    'Technology',
    'Healthcare', 
    'Finance',
    'AI & Machine Learning',
    'Fashion',
    'Food & Beverage',
    'Education',
    'Retail',
  ];

  const tones = [
    'Friendly',
    'Professional',
    'Bold',
    'Elegant',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brandName || !formData.industry || !formData.tone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const brandData: BrandData = {
      ...formData,
      timestamp: Date.now(),
    };
    
    saveBrandData(brandData);
    navigate('/result');
  };

  const handleInputChange = (field: keyof BrandData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-3 rounded-full">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Create Your Brand Identity
          </h1>
          <p className="text-xl text-gray-300">
            Tell us about your brand and we'll generate a complete identity kit for you
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="space-y-8">
            {/* Brand Name */}
            <div>
              <label htmlFor="brandName" className="block text-sm font-medium text-gray-300 mb-3">
                Brand Name *
              </label>
              <input
                type="text"
                id="brandName"
                value={formData.brandName}
                onChange={(e) => handleInputChange('brandName', e.target.value)}
                placeholder="Enter your brand name"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Industry */}
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-3">
                Industry *
              </label>
              <select
                id="industry"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="">Select your industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Keywords */}
            <div>
              <label htmlFor="keywords" className="block text-sm font-medium text-gray-300 mb-3">
                Brand Keywords or Values
              </label>
              <textarea
                id="keywords"
                value={formData.keywords}
                onChange={(e) => handleInputChange('keywords', e.target.value)}
                placeholder="e.g., innovative, reliable, sustainable, user-friendly (comma separated)"
                rows={3}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                Optional: Add keywords that represent your brand values
              </p>
            </div>

            {/* Tone */}
            <div>
              <label htmlFor="tone" className="block text-sm font-medium text-gray-300 mb-3">
                Brand Tone *
              </label>
              <select
                id="tone"
                value={formData.tone}
                onChange={(e) => handleInputChange('tone', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="">Select your brand tone</option>
                {tones.map((tone) => (
                  <option key={tone} value={tone}>
                    {tone}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating Your Brand...</span>
                </>
              ) : (
                <>
                  <span>Generate Brand Identity</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Preview Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-white font-semibold mb-2">Brand Copy</h3>
            <p className="text-gray-400 text-sm">
              Professional slogans and about sections
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-white font-semibold mb-2">Visual Identity</h3>
            <p className="text-gray-400 text-sm">
              Colors, logos, and design elements
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-white font-semibold mb-2">Usage Guidelines</h3>
            <p className="text-gray-400 text-sm">
              Practical examples and applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;