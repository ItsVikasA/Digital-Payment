import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const SafetySection = () => {
  const { language } = useLanguage();
  const [activeRisk, setActiveRisk] = useState(0);

  const text = {
    en: {
      title: "Stay Safe with Digital Payments",
      subtitle: "Learn About Potential Risks and How to Protect Yourself",
      intro: "While digital payments are very safe, it's important to know about potential risks and how to avoid them. Follow these simple guidelines to keep your money secure.",
      
      risks: [
        {
          title: "Online Fraud & Scams",
          icon: "🎭",
          description: "Fraudsters may try to trick you into sharing personal information or sending money",
          warning: "Never share your PIN, OTP, or card details with anyone",
          tips: [
            "Banks will never ask for your PIN or password over phone/SMS",
            "Don't click on suspicious links in SMS or emails",
            "Always verify before making payments to unknown numbers",
            "If someone calls claiming to be from bank, hang up and call bank directly"
          ],
          color: "from-red-500 to-pink-500"
        },
        {
          title: "Phishing Attacks",
          icon: "🎣",
          description: "Fake websites or apps that look like real ones to steal your information",
          warning: "Always download apps from official app stores only",
          tips: [
            "Only download apps from Google Play Store or Apple App Store",
            "Check app reviews and ratings before downloading",
            "Look for official bank websites (check URL carefully)",
            "Never enter your details on suspicious websites"
          ],
          color: "from-orange-500 to-red-500"
        },
        {
          title: "Weak PIN & Passwords",
          icon: "🔑",
          description: "Using simple or common PINs makes your account vulnerable",
          warning: "Never use obvious PINs like 1234, 0000, or your birth date",
          tips: [
            "Use a unique 4 or 6-digit PIN that's hard to guess",
            "Don't use birth dates, mobile numbers, or repeated digits",
            "Change your PIN regularly (every 3-6 months)",
            "Never write down your PIN or save it on your phone"
          ],
          color: "from-purple-500 to-indigo-500"
        },
        {
          title: "Public WiFi Risks",
          icon: "📶",
          description: "Using public WiFi for payments can expose your data to hackers",
          warning: "Avoid making payments on public WiFi networks",
          tips: [
            "Use your mobile data instead of public WiFi for payments",
            "If you must use WiFi, use a trusted network with password",
            "Never save payment apps' passwords on public devices",
            "Log out of all apps after use on shared devices"
          ],
          color: "from-blue-500 to-purple-500"
        }
      ],

      safetyTips: {
        title: "Essential Safety Practices",
        tips: [
          {
            icon: "🔒",
            title: "Secure Your Phone",
            description: "Use screen lock, fingerprint, or face unlock to protect your device"
          },
          {
            icon: "👀",
            title: "Check Before You Pay",
            description: "Always verify the recipient's details before confirming any payment"
          },
          {
            icon: "📱",
            title: "Keep Apps Updated",
            description: "Regularly update your payment apps to get latest security features"
          },
          {
            icon: "💳",
            title: "Monitor Transactions",
            description: "Check your transaction history regularly for any suspicious activity"
          },
          {
            icon: "🚫",
            title: "Never Share Credentials",
            description: "Your PIN, OTP, and passwords are personal - never share with anyone"
          },
          {
            icon: "📞",
            title: "Report Immediately",
            description: "If something goes wrong, contact your bank or app support immediately"
          }
        ]
      },

      emergencyContacts: {
        title: "Emergency Contacts",
        subtitle: "Save these numbers in case you need help",
        contacts: [
          {
            name: "Cybercrime Helpline",
            number: "1930",
            description: "For reporting online fraud and cybercrimes"
          },
          {
            name: "Banking Ombudsman",
            number: "14448",
            description: "For banking-related complaints and disputes"
          },
          {
            name: "UPI Helpline",
            number: "18001201740",
            description: "For UPI-related issues and support"
          }
        ]
      }
    },
    
    hi: {
      title: "डिजिटल भुगतान के साथ सुरक्षित रहें",
      subtitle: "संभावित जोखिमों के बारे में जानें और अपनी सुरक्षा कैसे करें",
      intro: "जबकि डिजिटल भुगतान बहुत सुरक्षित हैं, संभावित जोखिमों के बारे में जानना और उनसे कैसे बचना है, यह महत्वपूर्ण है। अपने पैसे को सुरक्षित रखने के लिए इन सरल दिशानिर्देशों का पालन करें।",
      
      risks: [
        {
          title: "ऑनलाइन धोखाधड़ी और घोटाले",
          icon: "🎭",
          description: "धोखेबाज आपको व्यक्तिगत जानकारी साझा करने या पैसे भेजने के लिए धोखा देने की कोशिश कर सकते हैं",
          warning: "कभी भी अपना PIN, OTP, या कार्ड विवरण किसी के साथ साझा न करें",
          tips: [
            "बैंक कभी भी फोन/SMS पर आपका PIN या पासवर्ड नहीं मांगेंगे",
            "SMS या ईमेल में संदिग्ध लिंक पर क्लिक न करें",
            "अज्ञात नंबरों पर भुगतान करने से पहले हमेशा सत्यापित करें",
            "यदि कोई बैंक से होने का दावा करके कॉल करे, तो फोन काट दें और सीधे बैंक को कॉल करें"
          ],
          color: "from-red-500 to-pink-500"
        },
        {
          title: "फिशिंग हमले",
          icon: "🎣",
          description: "नकली वेबसाइट या ऐप्स जो असली की तरह दिखते हैं आपकी जानकारी चुराने के लिए",
          warning: "हमेशा केवल आधिकारिक ऐप स्टोर से ही ऐप्स डाउनलोड करें",
          tips: [
            "केवल Google Play Store या Apple App Store से ही ऐप्स डाउनलोड करें",
            "डाउनलोड करने से पहले ऐप की रिव्यू और रेटिंग देखें",
            "आधिकारिक बैंक वेबसाइट देखें (URL ध्यान से देखें)",
            "संदिग्ध वेबसाइटों पर कभी भी अपना विवरण दर्ज न करें"
          ],
          color: "from-orange-500 to-red-500"
        },
        {
          title: "कमजोर PIN और पासवर्ड",
          icon: "🔑",
          description: "सरल या सामान्य PIN का उपयोग करना आपके खाते को कमजोर बनाता है",
          warning: "कभी भी स्पष्ट PIN जैसे 1234, 0000, या अपनी जन्म तिथि का उपयोग न करें",
          tips: [
            "एक अनोखा 4 या 6 अंकों का PIN उपयोग करें जिसका अनुमान लगाना कठिन हो",
            "जन्म तिथि, मोबाइल नंबर, या दोहराए गए अंकों का उपयोग न करें",
            "नियमित रूप से अपना PIN बदलें (हर 3-6 महीने)",
            "कभी भी अपना PIN न लिखें या अपने फोन में सेव न करें"
          ],
          color: "from-purple-500 to-indigo-500"
        },
        {
          title: "सार्वजनिक WiFi जोखिम",
          icon: "📶",
          description: "भुगतान के लिए सार्वजनिक WiFi का उपयोग करना आपके डेटा को हैकर्स के सामने उजागर कर सकता है",
          warning: "सार्वजनिक WiFi नेटवर्क पर भुगतान करने से बचें",
          tips: [
            "भुगतान के लिए सार्वजनिक WiFi के बजाय अपने मोबाइल डेटा का उपयोग करें",
            "यदि आपको WiFi का उपयोग करना है, तो पासवर्ड वाले विश्वसनीय नेटवर्क का उपयोग करें",
            "सार्वजनिक उपकरणों पर भुगतान ऐप्स के पासवर्ड कभी भी सेव न करें",
            "साझा उपकरणों पर उपयोग के बाद सभी ऐप्स से लॉग आउट करें"
          ],
          color: "from-blue-500 to-purple-500"
        }
      ],

      safetyTips: {
        title: "आवश्यक सुरक्षा प्रथाएं",
        tips: [
          {
            icon: "🔒",
            title: "अपने फोन को सुरक्षित करें",
            description: "अपने डिवाइस की सुरक्षा के लिए स्क्रीन लॉक, फिंगरप्रिंट, या फेस अनलॉक का उपयोग करें"
          },
          {
            icon: "👀",
            title: "भुगतान से पहले जांचें",
            description: "किसी भी भुगतान की पुष्टि करने से पहले हमेशा प्राप्तकर्ता के विवरण की जांच करें"
          },
          {
            icon: "📱",
            title: "ऐप्स को अपडेट रखें",
            description: "नवीनतम सुरक्षा सुविधाएं प्राप्त करने के लिए नियमित रूप से अपने भुगतान ऐप्स को अपडेट करें"
          },
          {
            icon: "💳",
            title: "लेन-देन की निगरानी करें",
            description: "किसी भी संदिग्ध गतिविधि के लिए नियमित रूप से अपने लेन-देन इतिहास की जांच करें"
          },
          {
            icon: "🚫",
            title: "कभी भी क्रेडेंशियल साझा न करें",
            description: "आपका PIN, OTP, और पासवर्ड व्यक्तिगत हैं - कभी भी किसी के साथ साझा न करें"
          },
          {
            icon: "📞",
            title: "तुरंत रिपोर्ट करें",
            description: "यदि कुछ गलत हो जाता है, तो तुरंत अपने बैंक या ऐप सपोर्ट से संपर्क करें"
          }
        ]
      },

      emergencyContacts: {
        title: "आपातकालीन संपर्क",
        subtitle: "मदद की आवश्यकता के मामले में इन नंबरों को सेव करें",
        contacts: [
          {
            name: "साइबर अपराध हेल्पलाइन",
            number: "1930",
            description: "ऑनलाइन धोखाधड़ी और साइबर अपराधों की रिपोर्ट के लिए"
          },
          {
            name: "बैंकिंग लोकपाल",
            number: "14448",
            description: "बैंकिंग संबंधी शिकायतों और विवादों के लिए"
          },
          {
            name: "UPI हेल्पलाइन",
            number: "18001201740",
            description: "UPI संबंधी समस्याओं और सहायता के लिए"
          }
        ]
      }
    }
  };

  return (
    <section id="safety" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {text[language].title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {text[language].subtitle}
          </p>
          <div className="bg-blue-100 border border-blue-300 rounded-2xl p-6">
            <p className="text-blue-800 text-lg">
              {text[language].intro}
            </p>
          </div>
        </div>

        {/* Risks Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Common Risks to Avoid
          </h3>
          
          {/* Risk Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {text[language].risks.map((risk, index) => (
              <button
                key={index}
                onClick={() => setActiveRisk(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeRisk === index
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <span className="text-2xl">{risk.icon}</span>
                <span className="hidden md:inline">{risk.title}</span>
              </button>
            ))}
          </div>

          {/* Active Risk Details */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Risk Info */}
              <div>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${text[language].risks[activeRisk].color} rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0`}>
                    {text[language].risks[activeRisk].icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {text[language].risks[activeRisk].title}
                    </h4>
                    <p className="text-gray-600">
                      {text[language].risks[activeRisk].description}
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-2 text-red-700 mb-2">
                    <span className="text-xl">⚠️</span>
                    <span className="font-semibold">Warning:</span>
                  </div>
                  <p className="text-red-600">
                    {text[language].risks[activeRisk].warning}
                  </p>
                </div>
              </div>

              {/* Right - Prevention Tips */}
              <div>
                <h5 className="text-xl font-semibold text-gray-800 mb-4">How to Protect Yourself:</h5>
                <div className="space-y-3">
                  {text[language].risks[activeRisk].tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Safety Tips */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
              {text[language].safetyTips.title}
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {text[language].safetyTips.tips.map((tip, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-lg p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-green-200 relative overflow-hidden"
              >
                <div className="text-5xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {tip.icon}
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-green-600 transition-colors duration-300">
                  {tip.title}
                </h4>
                <p className="text-gray-600 text-center text-sm lg:text-base leading-relaxed">
                  {tip.description}
                </p>
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-4">
            {text[language].emergencyContacts.title}
          </h3>
          <p className="text-center text-lg opacity-90 mb-8">
            {text[language].emergencyContacts.subtitle}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {text[language].emergencyContacts.contacts.map((contact, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2">{contact.name}</h4>
                <div className="text-3xl font-bold mb-3 text-yellow-300">{contact.number}</div>
                <p className="text-sm opacity-90">{contact.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Save Emergency Numbers
            </button>
          </div>
        </div>

        {/* Final Safety Message */}
        <div className="mt-16 text-center">
          <div className="bg-green-100 border border-green-300 rounded-2xl p-8 inline-block">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Remember: Stay Alert, Stay Safe!
            </h3>
            <p className="text-green-700 max-w-2xl">
              Digital payments are secure when used correctly. Follow these guidelines, trust your instincts, and don't hesitate to ask for help when in doubt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
