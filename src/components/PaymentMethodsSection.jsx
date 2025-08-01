import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const PaymentMethodsSection = () => {
  const { language } = useLanguage();
  const [activeMethod, setActiveMethod] = useState(0);

  const text = {
    en: {
      title: "Digital Payment Methods",
      subtitle: "Choose What Works Best for You",
      methods: [
        {
          name: "UPI (Unified Payments Interface)",
          icon: "📱",
          description: "The most popular way to send and receive money in India",
          features: [
            "Send money using just mobile number",
            "Scan QR codes to pay instantly",
            "Works with any bank account",
            "Free to use for most transactions",
            "Available 24/7"
          ],
          apps: ["Google Pay", "PhonePe", "Paytm", "BHIM", "Amazon Pay"],
          steps: [
            "Download any UPI app from Play Store",
            "Register with your mobile number",
            "Add your bank account",
            "Create a UPI PIN",
            "Start sending money!"
          ],
          color: "from-blue-500 to-indigo-600"
        },
        {
          name: "QR Code Payments",
          icon: "📷",
          description: "Simple scan and pay - no need to remember numbers",
          features: [
            "Just scan the QR code with your phone",
            "Enter amount and confirm",
            "Works at all shops and stores",
            "No need to carry cash",
            "Instant payment confirmation"
          ],
          apps: ["All UPI apps support QR scanning"],
          steps: [
            "Open your payment app",
            "Tap on 'Scan QR Code'",
            "Point camera at the QR code",
            "Enter the amount to pay",
            "Confirm with your PIN"
          ],
          color: "from-green-500 to-emerald-600"
        },
        {
          name: "Mobile Wallets",
          icon: "💳",
          description: "Store money digitally for quick payments",
          features: [
            "Add money to your digital wallet",
            "Pay bills and recharge mobiles",
            "Get cashback and offers",
            "Works even without bank account",
            "Easy to use interface"
          ],
          apps: ["Paytm", "MobiKwik", "Freecharge", "Amazon Pay", "Ola Money"],
          steps: [
            "Download wallet app",
            "Add money using debit card",
            "Use wallet balance to pay",
            "Enjoy cashback offers",
            "Recharge and bill payments"
          ],
          color: "from-purple-500 to-pink-600"
        },
        {
          name: "Debit Card Online",
          icon: "💰",
          description: "Use your existing bank debit card for online payments",
          features: [
            "Use your existing bank card",
            "Shop online safely",
            "Automatic transaction records",
            "Protected by bank security",
            "Works on all websites"
          ],
          apps: ["Bank websites", "Shopping websites", "Bill payment sites"],
          steps: [
            "Enter card number on payment page",
            "Add expiry date and CVV",
            "Enter OTP sent to your mobile",
            "Confirm the payment",
            "Payment successful!"
          ],
          color: "from-teal-500 to-cyan-600"
        }
      ]
    },
    hi: {
      title: "डिजिटल भुगतान के तरीके",
      subtitle: "चुनें जो आपके लिए सबसे अच्छा हो",
      methods: [
        {
          name: "UPI (एकीकृत भुगतान इंटरफेस)",
          icon: "📱",
          description: "भारत में पैसे भेजने और प्राप्त करने का सबसे लोकप्रिय तरीका",
          features: [
            "केवल मोबाइल नंबर से पैसे भेजें",
            "तुरंत भुगतान के लिए QR कोड स्कैन करें",
            "किसी भी बैंक खाते के साथ काम करता है",
            "अधिकांश लेन-देन के लिए मुफ्त",
            "24/7 उपलब्ध"
          ],
          apps: ["Google Pay", "PhonePe", "Paytm", "BHIM", "Amazon Pay"],
          steps: [
            "Play Store से कोई भी UPI ऐप डाउनलोड करें",
            "अपने मोबाइल नंबर से रजिस्टर करें",
            "अपना बैंक खाता जोड़ें",
            "UPI PIN बनाएं",
            "पैसे भेजना शुरू करें!"
          ],
          color: "from-blue-500 to-indigo-600"
        },
        {
          name: "QR कोड भुगतान",
          icon: "📷",
          description: "सरल स्कैन और भुगतान - नंबर याद रखने की जरूरत नहीं",
          features: [
            "बस अपने फोन से QR कोड स्कैन करें",
            "राशि दर्ज करें और पुष्टि करें",
            "सभी दुकानों और स्टोरों में काम करता है",
            "नकदी ले जाने की जरूरत नहीं",
            "तुरंत भुगतान की पुष्टि"
          ],
          apps: ["सभी UPI ऐप्स QR स्कैनिंग का समर्थन करते हैं"],
          steps: [
            "अपना पेमेंट ऐप खोलें",
            "'QR कोड स्कैन करें' पर टैप करें",
            "कैमरा QR कोड पर करें",
            "भुगतान की राशि दर्ज करें",
            "अपने PIN से पुष्टि करें"
          ],
          color: "from-green-500 to-emerald-600"
        },
        {
          name: "मोबाइल वॉलेट",
          icon: "💳",
          description: "त्वरित भुगतान के लिए डिजिटल रूप से पैसा स्टोर करें",
          features: [
            "अपने डिजिटल वॉलेट में पैसा जोड़ें",
            "बिल भुगतान और मोबाइल रिचार्ज करें",
            "कैशबैक और ऑफर प्राप्त करें",
            "बैंक खाते के बिना भी काम करता है",
            "उपयोग में आसान इंटरफेस"
          ],
          apps: ["Paytm", "MobiKwik", "Freecharge", "Amazon Pay", "Ola Money"],
          steps: [
            "वॉलेट ऐप डाउनलोड करें",
            "डेबिट कार्ड से पैसा जोड़ें",
            "भुगतान के लिए वॉलेट बैलेंस का उपयोग करें",
            "कैशबैक ऑफर का आनंद लें",
            "रिचार्ज और बिल भुगतान"
          ],
          color: "from-purple-500 to-pink-600"
        },
        {
          name: "डेबिट कार्ड ऑनलाइन",
          icon: "💰",
          description: "ऑनलाइन भुगतान के लिए अपने मौजूदा बैंक डेबिट कार्ड का उपयोग करें",
          features: [
            "अपने मौजूदा बैंक कार्ड का उपयोग करें",
            "सुरक्षित रूप से ऑनलाइन खरीदारी करें",
            "स्वचालित लेन-देन रिकॉर्ड",
            "बैंक सुरक्षा द्वारा संरक्षित",
            "सभी वेबसाइटों पर काम करता है"
          ],
          apps: ["बैंक वेबसाइट", "शॉपिंग वेबसाइट", "बिल भुगतान साइट"],
          steps: [
            "भुगतान पेज पर कार्ड नंबर दर्ज करें",
            "एक्सपायरी डेट और CVV जोड़ें",
            "मोबाइल पर भेजा गया OTP दर्ज करें",
            "भुगतान की पुष्टि करें",
            "भुगतान सफल!"
          ],
          color: "from-teal-500 to-cyan-600"
        }
      ]
    }
  };

  return (
    <section id="methods" className="py-20 bg-white">
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

        {/* Enhanced Method Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {text[language].methods.map((method, index) => (
            <button
              key={index}
              onClick={() => setActiveMethod(index)}
              className={`px-4 md:px-6 py-3 md:py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 md:space-x-3 text-sm md:text-base ${
                activeMethod === index
                  ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-xl transform scale-105 border-2 border-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-gray-200'
              }`}
            >
              <span className="text-xl md:text-2xl">{method.icon}</span>
              <span className="hidden sm:inline font-medium">{method.name}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Active Method Details */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 md:p-12 border border-gray-200">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left Side - Enhanced Method Info */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start space-y-6">
                <div className="flex items-center space-x-4 text-center lg:text-left">
                  <div className={`w-20 h-20 bg-gradient-to-r ${text[language].methods[activeMethod].color} rounded-3xl flex items-center justify-center text-white text-4xl shadow-xl`}>
                    {text[language].methods[activeMethod].icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                      {text[language].methods[activeMethod].name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {text[language].methods[activeMethod].description}
                    </p>
                  </div>
                </div>

                {/* Enhanced Features */}
                <div className="w-full">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left">Key Features:</h4>
                  <div className="space-y-3">
                    {text[language].methods[activeMethod].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white/70 rounded-2xl p-3 backdrop-blur-sm">
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Popular Apps */}
                <div className="w-full">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left">Popular Apps:</h4>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {text[language].methods[activeMethod].apps.map((app, index) => (
                      <span key={index} className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-medium shadow-lg">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - How to Use */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">How to Get Started:</h4>
              <div className="space-y-4">
                {text[language].methods[activeMethod].steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 bg-gradient-to-r ${text[language].methods[activeMethod].color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2 text-green-700">
                  <span className="text-xl">💡</span>
                  <span className="font-semibold">Pro Tip:</span>
                </div>
                <p className="text-green-600 text-sm mt-2">
                  Start with small amounts to get comfortable, then gradually use it for larger transactions!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl">🔒</span>
            <h3 className="text-2xl font-bold">Security First!</h3>
          </div>
          <p className="text-lg mb-6 opacity-90">
            All these payment methods are regulated by the Reserve Bank of India (RBI) and are completely safe to use.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Learn About Safety Measures
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;
