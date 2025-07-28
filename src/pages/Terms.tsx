import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-6">
              By accessing and using BrandStarter, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p className="text-gray-300 mb-6">
              Permission is granted to temporarily download one copy of the materials 
              (information or software) on BrandStarter's website for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </p>
            <ul className="text-gray-300 mb-6 pl-6">
              <li className="mb-2">modify or copy the materials;</li>
              <li className="mb-2">use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
              <li className="mb-2">attempt to decompile or reverse engineer any software contained on BrandStarter's website;</li>
              <li className="mb-2">remove any copyright or other proprietary notations from the materials.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. Generated Content</h2>
            <p className="text-gray-300 mb-6">
              The brand identity materials generated through BrandStarter are provided for your 
              use in creating and developing your brand. While we strive to provide unique and 
              relevant content, we cannot guarantee the uniqueness of all generated materials. 
              Users are responsible for conducting their own research regarding trademark and 
              copyright issues.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimer</h2>
            <p className="text-gray-300 mb-6">
              The materials on BrandStarter's website are provided on an 'as is' basis. 
              BrandStarter makes no warranties, expressed or implied, and hereby disclaims 
              and negates all other warranties including without limitation, implied warranties 
              or conditions of merchantability, fitness for a particular purpose, or 
              non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">5. Limitations</h2>
            <p className="text-gray-300 mb-6">
              In no event shall BrandStarter or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use the materials 
              on BrandStarter's website, even if BrandStarter or a BrandStarter authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Privacy Policy</h2>
            <p className="text-gray-300 mb-6">
              Your privacy is important to us. Our Privacy Policy explains how we collect, 
              use, and protect your information when you use our service. By using BrandStarter, 
              you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
            <p className="text-gray-300 mb-6">
              BrandStarter may revise these terms of service for its website at any time 
              without notice. By using this website, you are agreeing to be bound by the 
              then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms of Service, please contact us 
              through our website contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;