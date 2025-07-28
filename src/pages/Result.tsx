import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Copy, ArrowLeft, Check, Palette, FileText, Star, Tag } from 'lucide-react';
import { BrandData, BrandIdentity } from '../types';
import { loadBrandData } from '../utils/storage';
import { generateBrandIdentity } from '../utils/brandGenerator';
import { exportToPDF, copyToClipboard } from '../utils/export';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const [brandData, setBrandData] = useState<BrandData | null>(null);
  const [identity, setIdentity] = useState<BrandIdentity | null>(null);
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set());
  const [selectedSlogan, setSelectedSlogan] = useState<number>(0);

  useEffect(() => {
    const data = loadBrandData();
    if (!data) {
      navigate('/generate');
      return;
    }
    setBrandData(data);
    setIdentity(generateBrandIdentity(data));
  }, [navigate]);

  const handleCopy = async (text: string, itemId: string) => {
    await copyToClipboard(text);
    setCopiedItems(prev => new Set([...prev, itemId]));
    setTimeout(() => {
      setCopiedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }, 2000);
  };

  const handleExportPDF = async () => {
    if (brandData && identity) {
      await exportToPDF(brandData.brandName, identity);
    }
  };

  if (!brandData || !identity) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const CopyButton: React.FC<{ text: string; itemId: string }> = ({ text, itemId }) => (
    <button
      onClick={() => handleCopy(text, itemId)}
      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
    >
      {copiedItems.has(itemId) ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      <span>{copiedItems.has(itemId) ? 'Copied!' : 'Copy'}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <button
              onClick={() => navigate('/generate')}
              className="flex items-center space-x-2 text-gray-400 hover:text-white mb-4 sm:mb-0 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Generator</span>
            </button>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {brandData.brandName} Brand Kit
            </h1>
            <p className="text-gray-400 mt-2">
              Complete brand identity for {brandData.industry} • {brandData.tone} tone
            </p>
          </div>
          <button
            onClick={handleExportPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <Download className="h-5 w-5" />
            <span>Export PDF</span>
          </button>
        </div>

        {/* Brand Slogans */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <FileText className="h-6 w-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">Brand Slogans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {identity.slogans.map((slogan, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border cursor-pointer transition-all duration-200 ${
                  selectedSlogan === index
                    ? 'bg-blue-600/20 border-blue-500'
                    : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedSlogan(index)}
              >
                <p className="text-white font-medium mb-3">{slogan}</p>
                <CopyButton text={slogan} itemId={`slogan-${index}`} />
              </div>
            ))}
          </div>
        </section>

        {/* About Us Sections */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <FileText className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-bold text-white">About Us Copy</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Formal Version</h3>
                <CopyButton text={identity.aboutUs.formal} itemId="about-formal" />
              </div>
              <p className="text-gray-300 leading-relaxed">{identity.aboutUs.formal}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Friendly Version</h3>
                <CopyButton text={identity.aboutUs.friendly} itemId="about-friendly" />
              </div>
              <p className="text-gray-300 leading-relaxed">{identity.aboutUs.friendly}</p>
            </div>
          </div>
        </section>

        {/* Brand Personality */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Star className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Brand Personality</h2>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Brand Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {identity.personality.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Communication Tone</h3>
                  <CopyButton text={identity.personality.toneDescription} itemId="personality-tone" />
                </div>
                <p className="text-gray-300">{identity.personality.toneDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Palette className="h-6 w-6 text-pink-500" />
            <h2 className="text-2xl font-bold text-white">Color Palette</h2>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {Object.entries(identity.colorPalette).map(([name, color]) => (
                <div key={name} className="text-center">
                  <div
                    className="w-full h-20 rounded-lg mb-3 border border-gray-600"
                    style={{ backgroundColor: color }}
                  ></div>
                  <p className="text-white font-medium capitalize">{name}</p>
                  <p className="text-gray-400 text-sm">{color}</p>
                  <CopyButton text={color} itemId={`color-${name}`} />
                </div>
              ))}
            </div>
            
            {/* Color Preview Card */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <div
                  className="w-16 h-16 rounded-lg"
                  style={{ backgroundColor: identity.colorPalette.primary }}
                ></div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{brandData.brandName}</h4>
                  <p className="text-gray-300">Sample brand application with your color palette</p>
                  <div className="flex space-x-2 mt-2">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: identity.colorPalette.secondary }}
                    ></div>
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: identity.colorPalette.accent }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Mockups */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Star className="h-6 w-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-white">Logo Concepts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 text-center">
              <div
                className="w-20 h-20 rounded-lg mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: identity.colorPalette.primary }}
              >
                <span className="text-white font-bold text-2xl">
                  {brandData.brandName.charAt(0)}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-2">Icon + Text</h3>
              <p className="text-gray-400 text-sm">Logo with icon and brand name</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 text-center">
              <div className="mb-6">
                <h3
                  className="text-3xl font-bold"
                  style={{ color: identity.colorPalette.primary }}
                >
                  {brandData.brandName}
                </h3>
              </div>
              <h3 className="text-white font-semibold mb-2">Text Logo</h3>
              <p className="text-gray-400 text-sm">Stylized wordmark design</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center border-4"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: identity.colorPalette.primary,
                  color: identity.colorPalette.primary
                }}
              >
                <span className="font-bold text-2xl">{identity.logoMockups.monogram}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Monogram</h3>
              <p className="text-gray-400 text-sm">Minimalist letter combination</p>
            </div>
          </div>
        </section>

        {/* Brand Keywords */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Tag className="h-6 w-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-white">Brand Keywords</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Emotion</h3>
              <div className="flex flex-wrap gap-2">
                {identity.brandKeywords.emotion.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Industry Terms</h3>
              <div className="flex flex-wrap gap-2">
                {identity.brandKeywords.industry.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Action Verbs</h3>
              <div className="flex flex-wrap gap-2">
                {identity.brandKeywords.action.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <FileText className="h-6 w-6 text-indigo-500" />
            <h2 className="text-2xl font-bold text-white">Practical Use Cases</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Homepage Intro</h3>
                <CopyButton text={identity.useCases.homepage} itemId="usecase-homepage" />
              </div>
              <p className="text-gray-300">{identity.useCases.homepage}</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Product Packaging</h3>
                <CopyButton text={identity.useCases.packaging} itemId="usecase-packaging" />
              </div>
              <p className="text-gray-300">{identity.useCases.packaging}</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Social Media Bio</h3>
                <CopyButton text={identity.useCases.socialMedia} itemId="usecase-social" />
              </div>
              <p className="text-gray-300">{identity.useCases.socialMedia}</p>
            </div>
          </div>
        </section>

        {/* Footer Actions */}
        <div className="text-center py-8">
          <button
            onClick={() => navigate('/generate')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 mr-4"
          >
            Generate Another Brand
          </button>
          <button
            onClick={handleExportPDF}
            className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Download Complete Kit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;