import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const BenefitsSection = () => {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Benefits of Digital Payments",
      subtitle: "Discover How Digital Payments Can Transform Your Life",
      benefits: [
        {
          icon: "⚡",
          title: "Lightning Fast",
          description: "Send money instantly to anyone, anywhere in India within seconds",
          color: "from-yellow-400 to-orange-500"
        },
        {
          icon: "🏪",
          title: "Shop from Home",
          description: "Buy groceries, medicines, and essentials online without leaving home",
          color: "from-green-400 to-emerald-500"
        },
        {
          icon: "💡",
          title: "Smart Bill Payments",
          description: "Pay electricity, water, mobile bills automatically - never miss a due date",
          color: "from-blue-400 to-indigo-500"
        },
        {
          icon: "🛡️",
          title: "Maximum Safety",
          description: "No risk of losing cash, theft, or carrying large amounts of money",
          color: "from-purple-400 to-pink-500"
        },
        {
          icon: "📱",
          title: "Always Available",
          description: "24/7 access to your money - banks may close, but digital payments never sleep",
          color: "from-teal-400 to-cyan-500"
        },
        {
          icon: "📊",
          title: "Complete Transparency",
          description: "See exactly where your money goes with detailed transaction history",
          color: "from-red-400 to-rose-500"
        }
      ],
      comparison: {
        title: "Traditional vs Digital: See the Difference",
        traditional: {
          title: "Traditional Cash Payments",
          points: [
            "❌ Risk of theft or loss",
            "❌ Need exact change",
            "❌ Long queues at banks",
            "❌ Limited banking hours",
            "❌ No transaction records",
            "❌ Inconvenient for online shopping"
          ]
        },
        digital: {
          title: "Digital Payments",
          points: [
            "✅ Secure and protected",
            "✅ Pay exact amounts easily",
            "✅ No waiting in lines",
            "✅ Available 24/7",
            "✅ Complete transaction history",
            "✅ Shop online effortlessly"
          ]
        }
      }
    },
    hi: {
      title: "डिजिटल भुगतान के फायदे",
      subtitle: "जानें कि डिजिटल भुगतान आपके जीवन को कैसे बदल सकते हैं",
      benefits: [
        {
          icon: "⚡",
          title: "बिजली की गति",
          description: "भारत में कहीं भी, किसी को भी सेकंडों में तुरंत पैसे भेजें",
          color: "from-yellow-400 to-orange-500"
        },
        {
          icon: "🏪",
          title: "घर से खरीदारी",
          description: "घर छोड़े बिना किराना, दवाइयां और जरूरी सामान ऑनलाइन खरीदें",
          color: "from-green-400 to-emerald-500"
        },
        {
          icon: "💡",
          title: "स्मार्ट बिल भुगतान",
          description: "बिजली, पानी, मोबाइल बिल अपने आप भुगतान करें - कभी देर न करें",
          color: "from-blue-400 to-indigo-500"
        },
        {
          icon: "🛡️",
          title: "अधिकतम सुरक्षा",
          description: "नकदी खोने, चोरी या बड़ी रकम ले जाने का कोई जोखिम नहीं",
          color: "from-purple-400 to-pink-500"
        },
        {
          icon: "📱",
          title: "हमेशा उपलब्ध",
          description: "24/7 अपने पैसे तक पहुंच - बैंक बंद हो सकते हैं, डिजिटल भुगतान कभी नहीं",
          color: "from-teal-400 to-cyan-500"
        },
        {
          icon: "📊",
          title: "पूर्ण पारदर्शिता",
          description: "विस्तृत लेन-देन इतिहास के साथ देखें कि आपका पैसा कहां जाता है",
          color: "from-red-400 to-rose-500"
        }
      ],
      comparison: {
        title: "पारंपरिक बनाम डिजिटल: अंतर देखें",
        traditional: {
          title: "पारंपरिक नकद भुगतान",
          points: [
            "❌ चोरी या खोने का जोखिम",
            "❌ सही रकम की जरूरत",
            "❌ बैंकों में लंबी कतारें",
            "❌ सीमित बैंकिंग घंटे",
            "❌ लेन-देन का रिकॉर्ड नहीं",
            "❌ ऑनलाइन खरीदारी में असुविधा"
          ]
        },
        digital: {
          title: "डिजिटल भुगतान",
          points: [
            "✅ सुरक्षित और संरक्षित",
            "✅ आसानी से सटीक राशि का भुगतान",
            "✅ कतारों में प्रतीक्षा नहीं",
            "✅ 24/7 उपलब्ध",
            "✅ पूरा लेन-देन इतिहास",
            "✅ आसान ऑनलाइन खरीदारी"
          ]
        }
      }
    }
  };

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {text[language].title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {text[language].subtitle}
          </p>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {text[language].benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${benefit.color} rounded-3xl flex items-center justify-center text-white text-2xl md:text-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {benefit.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center text-transparent group-hover:text-teal-500 transition-all duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Comparison Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {text[language].comparison.title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Traditional Payments */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 md:p-8 border-2 border-red-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                OLD WAY
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-red-600 mb-6 text-center">
                {text[language].comparison.traditional.title}
              </h4>
              <div className="space-y-4">
                {text[language].comparison.traditional.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/50 rounded-2xl p-3">
                    <span className="text-red-500 font-bold text-lg flex-shrink-0">×</span>
                    <span className="text-gray-700">{point.replace('❌ ', '')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Payments */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 border-2 border-green-200 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg rotate-12">
                ⭐ RECOMMENDED!
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-green-600 mb-6 text-center">
                {text[language].comparison.digital.title}
              </h4>
              <div className="space-y-4">
                {text[language].comparison.digital.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/70 rounded-2xl p-3 shadow-sm">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">{point.replace('✅ ', '')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Join 500,000+ Happy Users!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            People just like you are already enjoying the benefits of digital payments
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold">95%</div>
              <div className="opacity-90">Find it Very Easy</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="opacity-90">Feel More Secure</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">92%</div>
              <div className="opacity-90">Save Time Daily</div>
            </div>
          </div>
          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Read Their Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
