import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const IntroSection = () => {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "What are Digital Payments?",
      subtitle: "Understanding the Basics",
      description: "Digital payments are electronic transactions that allow you to send, receive, and manage money using your mobile phone or computer, without the need for physical cash.",
      whyImportant: "Why Are They Important?",
      reasons: [
        {
          icon: "🏠",
          title: "Convenience at Home",
          description: "Pay bills, buy groceries, and send money from the comfort of your home"
        },
        {
          icon: "💰",
          title: "No Cash Hassles",
          description: "No need to worry about carrying cash or getting exact change"
        },
        {
          icon: "🌐",
          title: "Available 24/7",
          description: "Make payments anytime, anywhere - even on holidays and weekends"
        },
        {
          icon: "📊",
          title: "Track Your Money",
          description: "Keep records of all your transactions automatically"
        },
        {
          icon: "🛡️",
          title: "Safe & Secure",
          description: "Protected by advanced security features and government regulations"
        },
        {
          icon: "🚀",
          title: "Join Digital India",
          description: "Be part of India's digital revolution and modern economy"
        }
      ]
    },
    hi: {
      title: "डिजिटल भुगतान क्या है?",
      subtitle: "बुनियादी बातें समझें",
      description: "डिजिटल भुगतान इलेक्ट्रॉनिक लेन-देन हैं जो आपको अपने मोबाइल फोन या कंप्यूटर का उपयोग करके पैसे भेजने, प्राप्त करने और प्रबंधित करने की सुविधा देते हैं, बिना नकदी की आवश्यकता के।",
      whyImportant: "ये क्यों महत्वपूर्ण हैं?",
      reasons: [
        {
          icon: "🏠",
          title: "घर पर सुविधा",
          description: "बिल भुगतान, किराना खरीदारी, और पैसे भेजना घर से ही करें"
        },
        {
          icon: "💰",
          title: "नकदी की परेशानी नहीं",
          description: "नकदी ले जाने या सही रकम की चिंता करने की जरूरत नहीं"
        },
        {
          icon: "🌐",
          title: "24/7 उपलब्ध",
          description: "किसी भी समय, कहीं भी भुगतान करें - छुट्टियों और सप्ताहांत में भी"
        },
        {
          icon: "📊",
          title: "अपने पैसे का हिसाब रखें",
          description: "सभी लेन-देन का रिकॉर्ड अपने आप सहेज जाता है"
        },
        {
          icon: "🛡️",
          title: "सुरक्षित और भरोसेमंद",
          description: "उन्नत सुरक्षा सुविधाओं और सरकारी नियमों से सुरक्षित"
        },
        {
          icon: "🚀",
          title: "डिजिटल इंडिया में शामिल हों",
          description: "भारत की डिजिटल क्रांति और आधुनिक अर्थव्यवस्था का हिस्सा बनें"
        }
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {text[language].title}
          </h2>
          <h3 className="text-xl md:text-2xl text-teal-600 font-semibold mb-6">
            {text[language].subtitle}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {text[language].description}
          </p>
        </div>

        {/* Visual Explanation */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Simple Steps:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <span className="text-gray-700">Open your payment app</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <span className="text-gray-700">Enter amount and receiver details</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <span className="text-gray-700">Confirm with your PIN</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center">✓</div>
                  <span className="text-gray-700 font-semibold">Money sent instantly!</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 inline-block">
                <div className="text-6xl mb-4">📱</div>
                <div className="text-gray-600">Your Mobile = Your Bank</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Important Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            {text[language].whyImportant}
          </h3>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {text[language].reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-4xl mb-4 text-center">{reason.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {reason.title}
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join our free workshop and learn how to use digital payments safely and confidently
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Book Your Free Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
