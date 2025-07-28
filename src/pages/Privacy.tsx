import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              When you use BrandStarter, we collect information you provide directly to us, 
              such as when you create a brand identity kit. This includes:
            </p>
            <ul className="text-gray-300 mb-6 pl-6">
              <li className="mb-2">Brand name and business information</li>
              <li className="mb-2">Industry and tone preferences</li>
              <li className="mb-2">Keywords and brand values</li>
              <li className="mb-2">Usage data and preferences</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">
              We use the information we collect to:
            </p>
            <ul className="text-gray-300 mb-6 pl-6">
              <li className="mb-2">Generate personalized brand identity kits</li>
              <li className="mb-2">Improve our service and user experience</li>
              <li className="mb-2">Provide customer support</li>
              <li className="mb-2">Send you updates and communications (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. Information Storage</h2>
            <p className="text-gray-300 mb-6">
              BrandStarter stores your brand data locally in your browser using localStorage. 
              This means your information stays on your device and is not transmitted to our 
              servers unless you explicitly choose to share it. You can clear this data at 
              any time by clearing your browser's local storage.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third 
              parties. Since BrandStarter operates as a frontend-only application with local 
              storage, your brand data remains on your device and under your control.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate security measures to protect your personal information. 
              However, since data is stored locally in your browser, you are responsible for 
              maintaining the security of your device and browser.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-300 mb-6">
              BrandStarter may use cookies and similar tracking technologies to enhance your 
              experience. These are used for functionality purposes and to remember your 
              preferences. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
            <p className="text-gray-300 mb-6">
              BrandStarter is not intended for children under 13 years of age. We do not 
              knowingly collect personal information from children under 13. If we discover 
              that a child under 13 has provided us with personal information, we will delete 
              such information immediately.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Privacy Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last 
              updated" date at the top of this policy.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us through our website contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;