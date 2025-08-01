import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const HeroSection = () => {
  const { language } = useLanguage();

  const text = {
    en: {
      headline: "Transform Your Life with",
      highlight: "Digital Payments",
      subheadline: "Safe, Simple, and Secure",
      description: "Join millions of Indians who have embraced digital payments. Learn how to make payments easily using your mobile phone, keep your money safe, and access financial services anywhere, anytime.",
      cta1: "Join a Workshop",
      cta2: "Download Brochure",
      cta3: "Get Help Now",
      features: [
        "✓ 100% Free Training",
        "✓ Available in Local Languages",
        "✓ Expert Support 24/7",
        "✓ Safe & Secure Methods"
      ]
    },
    hi: {
      headline: "अपना जीवन बदलें",
      highlight: "डिजिटल भुगतान से",
      subheadline: "सुरक्षित, सरल और भरोसेमंद",
      description: "करोड़ों भारतीयों के साथ जुड़ें जिन्होंने डिजिटल भुगतान अपनाया है। सीखें कि अपने मोबाइल फोन से आसानी से भुगतान कैसे करें, अपना पैसा सुरक्षित रखें, और कहीं भी, कभी भी वित्तीय सेवाओं का उपयोग करें।",
      cta1: "कार्यशाला में शामिल हों",
      cta2: "ब्रोशर डाउनलोड करें",
      cta3: "अभी मदद लें",
      features: [
        "✓ 100% मुफ्त प्रशिक्षण",
        "✓ स्थानीय भाषाओं में उपलब्ध",
        "✓ 24/7 विशेषज्ञ सहायता",
        "✓ सुरक्षित तरीके"
      ]
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-teal-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-blue-200 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-teal-200 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Enhanced */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                {text[language].headline}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 animate-pulse">
                  {text[language].highlight}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-teal-600">
                {text[language].subheadline}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {text[language].description}
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {text[language].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/70 transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">{feature.replace('✓ ', '')}</span>
                </div>
              ))}
            </div>

            {/* Enhanced Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-blue-600 relative overflow-hidden">
                <span className="relative z-10">{text[language].cta1}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group bg-white text-teal-600 border-2 border-teal-500 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                {text[language].cta2}
              </button>
              <button className="group bg-gradient-to-r from-teal-500 to-teal-400 text-white px-4 md:px-6 py-3 md:py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 sm:hidden md:block">
                {text[language].cta3}
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/30">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">500K+</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">People Trained</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/30">
                <div className="text-2xl md:text-3xl font-bold text-teal-600">1000+</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Villages Covered</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/30">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">100%</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Safe & Secure</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Illustration */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10 flex justify-center">
              {/* Enhanced Mobile Phone Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 mx-auto max-w-sm transform hover:rotate-0 transition-all duration-700 hover:scale-105 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-teal-400 rounded-2xl p-4 md:p-6 text-white relative overflow-hidden">
                  {/* Phone UI Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl mx-auto flex items-center justify-center backdrop-blur-sm">
                        <span className="text-3xl">📱</span>
                      </div>
                      <h3 className="font-bold text-lg">UPI Payment</h3>
                      <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                        <div className="text-sm opacity-90 mb-1">Send to:</div>
                        <div className="font-semibold text-lg mb-2">Ram Sharma</div>
                        <div className="text-3xl font-bold mb-3">₹500</div>
                        <div className="text-xs opacity-75">Safe & Instant</div>
                      </div>
                      <button className="bg-white text-blue-600 rounded-xl py-3 px-6 font-bold w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Pay Now ✨
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-lg animate-bounce border border-gray-100">
                <span className="text-2xl">💳</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-3 shadow-lg animate-pulse border border-gray-100">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="absolute top-1/2 -left-8 bg-white rounded-2xl p-3 shadow-lg animate-bounce delay-300 border border-gray-100 hidden md:block">
                <span className="text-2xl">📊</span>
              </div>
              <div className="absolute top-1/4 -right-6 bg-white rounded-2xl p-2 shadow-lg animate-pulse delay-700 border border-gray-100">
                <span className="text-xl">⚡</span>
              </div>
            </div>

            {/* Enhanced Background Circles */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-20 animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
