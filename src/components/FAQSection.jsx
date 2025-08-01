import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const FAQSection = () => {
  const { language } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState(null);

  const text = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Clear Answers to Your Most Common Doubts",
      categories: [
        {
          name: "Getting Started",
          icon: "🚀",
          faqs: [
            {
              question: "What if I don't know how to use a smartphone properly?",
              answer: "Don't worry! Our workshops start with basic smartphone usage. We teach you step-by-step, starting from how to hold the phone, how to tap, and gradually move to payment apps. Most people learn within 2-3 sessions. We also provide printed guides with pictures for practice at home."
            },
            {
              question: "Do I need internet connection all the time?",
              answer: "You need internet only when making the payment. Most UPI apps work with very slow internet too. If you don't have WiFi, you can use mobile data - each payment uses very little data (less than 1MB). Many apps also work offline for small amounts and sync when internet comes back."
            },
            {
              question: "How do I install UPI apps?",
              answer: "1) Open Play Store on your phone, 2) Search for 'Google Pay' or 'PhonePe', 3) Tap 'Install', 4) Once installed, tap 'Open', 5) Follow the setup instructions. Don't worry if you make mistakes - you can always start over! We also help you install during workshops."
            },
            {
              question: "What if my phone breaks or gets lost?",
              answer: "Your money is safe! It's stored in your bank account, not in the phone. You can install the same apps on a new phone and access your money using your mobile number and bank details. We recommend writing down important numbers and keeping them safe."
            }
          ]
        },
        {
          name: "Safety & Security",
          icon: "🛡️",
          faqs: [
            {
              question: "Is digital payment really safe? What if someone steals my money?",
              answer: "Digital payments are much safer than carrying cash! Banks use advanced security and RBI monitors everything. Every transaction is protected by your PIN that only you know. If someone steals your cash, it's gone forever. But digital payments can be tracked and recovered. Banks also provide insurance for fraud cases."
            },
            {
              question: "What should I do if I send money to wrong person by mistake?",
              answer: "1) Don't panic! 2) Immediately call your bank's customer care, 3) Provide transaction details (you'll get SMS confirmation), 4) Banks can help recover money if reported quickly, 5) You can also contact the receiver and request them to return the money. This is why we always say 'Check twice, pay once!'"
            },
            {
              question: "Someone is asking for my PIN or OTP on phone, what should I do?",
              answer: "NEVER share your PIN or OTP with anyone! Banks never ask for PIN/OTP over phone. Hang up immediately and report to bank. Remember: PIN and OTP are like your house keys - never give them to strangers. Only enter PIN/OTP on your own phone when YOU are making a payment."
            },
            {
              question: "How do I know if a payment app is genuine?",
              answer: "1) Only download from Google Play Store or Apple App Store, 2) Check ratings and reviews, 3) Look for apps by known companies (Google Pay, PhonePe, Paytm, BHIM), 4) Verify the developer name, 5) Ask us in workshops if you're unsure. Never download payment apps from unknown websites or links in SMS."
            }
          ]
        },
        {
          name: "Technical Issues",
          icon: "⚙️",
          faqs: [
            {
              question: "What if payment fails but money is deducted from my account?",
              answer: "This sometimes happens due to network issues. Don't worry! 1) Check your bank SMS to confirm if money was actually deducted, 2) If yes, the money will automatically return to your account within 24-48 hours, 3) If it doesn't return, contact your bank with transaction details, 4) Keep screenshots of failed transaction as proof."
            },
            {
              question: "My UPI app is not working, what should I do?",
              answer: "Try these steps: 1) Check if you have internet connection, 2) Close the app and open again, 3) Restart your phone, 4) Check if your bank account is active, 5) Try using a different UPI app, 6) Contact app customer support, 7) Visit your bank branch if problem continues."
            },
            {
              question: "How do I remember all the different PINs?",
              answer: "Use the same PIN for UPI apps (different from ATM PIN for security). Choose something memorable but not obvious like birth date. You can create a pattern that makes sense to you but is hard for others to guess. Never write PINs in your phone or on paper. Practice using the PIN regularly so you remember it."
            },
            {
              question: "QR code is not scanning properly, what's wrong?",
              answer: "1) Clean your phone camera lens, 2) Make sure there's enough light, 3) Hold phone steady about 6 inches from QR code, 4) If QR code is damaged or blurry, ask the shop owner for a new one, 5) You can also pay using mobile number instead of QR code, 6) Some very old phones may have difficulty scanning - ask for help."
            }
          ]
        },
        {
          name: "Costs & Limits",
          icon: "💰",
          faqs: [
            {
              question: "Do I have to pay charges for digital payments?",
              answer: "Most UPI payments are completely FREE! You don't pay anything for: sending money to friends/family, paying at shops via UPI, receiving money. Some charges may apply for: credit card payments, wallet-to-bank transfers, international payments. Always check before making payment - the app will show you if there are any charges."
            },
            {
              question: "Is there a limit on how much money I can send per day?",
              answer: "Yes, for safety reasons there are limits: UPI - ₹1 lakh per day, Wallet - Usually ₹10,000-₹20,000 per month, Debit Card - Depends on your bank. These limits can be changed by contacting your bank. For larger amounts, you can use net banking or visit bank branch. Daily limits reset at midnight."
            },
            {
              question: "Can I use digital payments for small amounts like ₹5-₹10?",
              answer: "Absolutely! Digital payments work for any amount from ₹1 to ₹1 lakh. It's perfect for buying tea (₹5), bus ticket (₹10), or vegetables (₹50). Small shop owners love it because they don't need to worry about giving change for small amounts. No minimum limit for most payments."
            },
            {
              question: "What if I don't have a bank account?",
              answer: "You can still use digital payments! 1) Open a basic bank account (only ₹1 needed in some banks), 2) Use mobile wallets like Paytm that don't always need bank account, 3) Jan Dhan Yojana provides free bank accounts, 4) Some wallets allow you to add money using cash at shops. We can help you open a bank account during our workshops."
            }
          ]
        }
      ],
      
      helpSection: {
        title: "Still Need Help?",
        subtitle: "We're here to support you every step of the way",
        options: [
          {
            title: "Join Our Free Workshop",
            description: "Hands-on training with real devices and expert guidance",
            icon: "👨‍🏫",
            action: "Book Workshop"
          },
          {
            title: "Call Our Helpline",
            description: "Speak to our trained volunteers in your local language",
            icon: "📞",
            action: "Call Now"
          },
          {
            title: "Visit Learning Center",
            description: "Find the nearest digital literacy center in your area",
            icon: "📍",
            action: "Find Center"
          },
          {
            title: "Download Guide",
            description: "Step-by-step illustrated guides in multiple languages",
            icon: "📚",
            action: "Download"
          }
        ]
      }
    },

    hi: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      subtitle: "आपकी सबसे आम शंकाओं के स्पष्ट उत्तर",
      categories: [
        {
          name: "शुरुआत करना",
          icon: "🚀",
          faqs: [
            {
              question: "यदि मुझे स्मार्टफोन का सही तरीके से उपयोग नहीं आता है तो क्या करूं?",
              answer: "चिंता न करें! हमारी कार्यशालाएं बुनियादी स्मार्टफोन उपयोग से शुरू होती हैं। हम आपको चरणबद्ध तरीके से सिखाते हैं, फोन कैसे पकड़ना है, कैसे टैप करना है से शुरू करके धीरे-धीरे भुगतान ऐप्स तक जाते हैं। ज्यादातर लोग 2-3 सत्रों में सीख जाते हैं। हम घर पर अभ्यास के लिए चित्रों के साथ प्रिंटेड गाइड भी प्रदान करते हैं।"
            },
            {
              question: "क्या मुझे हमेशा इंटरनेट कनेक्शन की जरूरत होती है?",
              answer: "आपको केवल भुगतान करते समय इंटरनेट की जरूरत होती है। ज्यादातर UPI ऐप्स बहुत धीमे इंटरनेट के साथ भी काम करते हैं। यदि आपके पास WiFi नहीं है, तो आप मोबाइल डेटा का उपयोग कर सकते हैं - हर भुगतान में बहुत कम डेटा (1MB से कम) का उपयोग होता है। कई ऐप्स छोटी राशि के लिए ऑफलाइन भी काम करते हैं और इंटरनेट आने पर सिंक हो जाते हैं।"
            },
            {
              question: "मैं UPI ऐप्स कैसे इंस्टॉल करूं?",
              answer: "1) अपने फोन पर Play Store खोलें, 2) 'Google Pay' या 'PhonePe' खोजें, 3) 'Install' पर टैप करें, 4) इंस्टॉल होने के बाद, 'Open' पर टैप करें, 5) सेटअप निर्देशों का पालन करें। यदि आप गलती करते हैं तो चिंता न करें - आप हमेशा फिर से शुरू कर सकते हैं! हम कार्यशालाओं के दौरान इंस्टॉल करने में भी मदद करते हैं।"
            },
            {
              question: "यदि मेरा फोन टूट जाता है या खो जाता है तो क्या होगा?",
              answer: "आपका पैसा सुरक्षित है! यह आपके बैंक खाते में संग्रहीत है, फोन में नहीं। आप नए फोन पर वही ऐप्स इंस्टॉल कर सकते हैं और अपने मोबाइल नंबर और बैंक विवरण का उपयोग करके अपने पैसे तक पहुंच सकते हैं। हम सुझाव देते हैं कि महत्वपूर्ण नंबरों को लिखकर सुरक्षित रखें।"
            }
          ]
        },
        {
          name: "सुरक्षा",
          icon: "🛡️",
          faqs: [
            {
              question: "क्या डिजिटल भुगतान वास्तव में सुरक्षित है? यदि कोई मेरा पैसा चुरा लेता है तो क्या होगा?",
              answer: "डिजिटल भुगतान नकदी ले जाने से कहीं ज्यादा सुरक्षित है! बैंक उन्नत सुरक्षा का उपयोग करते हैं और RBI सब कुछ मॉनिटर करता है। हर लेन-देन आपके PIN द्वारा सुरक्षित है जो केवल आप जानते हैं। यदि कोई आपकी नकदी चुराता है, तो वह हमेशा के लिए चली जाती है। लेकिन डिजिटल भुगतान को ट्रैक किया जा सकता है और रिकवर किया जा सकता है। बैंक धोखाधड़ी के मामलों के लिए बीमा भी प्रदान करते हैं।"
            },
            {
              question: "यदि मैं गलती से गलत व्यक्ति को पैसे भेज दूं तो क्या करूं?",
              answer: "1) घबराएं नहीं! 2) तुरंत अपने बैंक के कस्टमर केयर को कॉल करें, 3) लेन-देन विवरण प्रदान करें (आपको SMS पुष्टि मिलेगी), 4) यदि जल्दी रिपोर्ट किया जाए तो बैंक पैसे वापस करने में मदद कर सकते हैं, 5) आप रिसीवर से भी संपर्क कर सकते हैं और उनसे पैसे वापस करने का अनुरोध कर सकते हैं। इसीलिए हम हमेशा कहते हैं 'दो बार चेक करें, एक बार भुगतान करें!'"
            },
            {
              question: "कोई व्यक्ति फोन पर मेरा PIN या OTP मांग रहा है, मुझे क्या करना चाहिए?",
              answer: "कभी भी अपना PIN या OTP किसी के साथ साझा न करें! बैंक कभी भी फोन पर PIN/OTP नहीं मांगते। तुरंत फोन काट दें और बैंक को रिपोर्ट करें। याद रखें: PIN और OTP आपकी घर की चाबियों की तरह हैं - कभी भी अजनबियों को न दें। केवल अपने फोन पर PIN/OTP डालें जब आप खुद भुगतान कर रहे हों।"
            },
            {
              question: "मैं कैसे जानूं कि कोई भुगतान ऐप असली है?",
              answer: "1) केवल Google Play Store या Apple App Store से डाउनलोड करें, 2) रेटिंग और रिव्यू देखें, 3) ज्ञात कंपनियों के ऐप्स देखें (Google Pay, PhonePe, Paytm, BHIM), 4) डेवलपर नाम सत्यापित करें, 5) यदि आप अनिश्चित हैं तो कार्यशालाओं में हमसे पूछें। कभी भी अज्ञात वेबसाइटों या SMS में लिंक से भुगतान ऐप्स डाउनलोड न करें।"
            }
          ]
        },
        {
          name: "तकनीकी समस्याएं",
          icon: "⚙️",
          faqs: [
            {
              question: "यदि भुगतान फेल हो जाता है लेकिन मेरे खाते से पैसे कट जाते हैं तो क्या करूं?",
              answer: "यह कभी-कभी नेटवर्क की समस्या के कारण होता है। चिंता न करें! 1) अपने बैंक SMS की जांच करें कि वास्तव में पैसे कटे हैं या नहीं, 2) यदि हां, तो पैसे 24-48 घंटों के अंदर अपने आप आपके खाते में वापस आ जाएंगे, 3) यदि वापस नहीं आते, तो लेन-देन विवरण के साथ अपने बैंक से संपर्क करें, 4) प्रमाण के रूप में असफल लेन-देन के स्क्रीनशॉट रखें।"
            },
            {
              question: "मेरा UPI ऐप काम नहीं कर रहा है, मुझे क्या करना चाहिए?",
              answer: "ये चरण आजमाएं: 1) जांचें कि आपके पास इंटरनेट कनेक्शन है या नहीं, 2) ऐप बंद करके फिर से खोलें, 3) अपना फोन रीस्टार्ट करें, 4) जांचें कि आपका बैंक खाता सक्रिय है या नहीं, 5) कोई दूसरा UPI ऐप इस्तेमाल करने की कोशिश करें, 6) ऐप कस्टमर सपोर्ट से संपर्क करें, 7) समस्या जारी रहने पर अपनी बैंक शाखा में जाएं।"
            },
            {
              question: "मैं सभी अलग-अलग PIN कैसे याद रखूं?",
              answer: "UPI ऐप्स के लिए एक ही PIN का उपयोग करें (सुरक्षा के लिए ATM PIN से अलग)। कुछ यादगार लेकिन स्पष्ट नहीं जैसे जन्म तिथि चुनें। आप एक ऐसा पैटर्न बना सकते हैं जो आपके लिए समझ में आए लेकिन दूसरों के लिए अनुमान लगाना कठिन हो। कभी भी अपने फोन में या कागज पर PIN न लिखें। PIN का नियमित उपयोग करें ताकि आप इसे याद रख सकें।"
            },
            {
              question: "QR कोड ठीक से स्कैन नहीं हो रहा है, क्या गलत है?",
              answer: "1) अपने फोन के कैमरा लेंस को साफ करें, 2) सुनिश्चित करें कि पर्याप्त रोशनी है, 3) फोन को QR कोड से लगभग 6 इंच की दूरी पर स्थिर रखें, 4) यदि QR कोड क्षतिग्रस्त या धुंधला है, तो दुकान के मालिक से नया मांगें, 5) आप QR कोड के बजाय मोबाइल नंबर का उपयोग करके भी भुगतान कर सकते हैं, 6) कुछ बहुत पुराने फोन में स्कैन करने में कठिनाई हो सकती है - मदद मांगें।"
            }
          ]
        },
        {
          name: "लागत और सीमाएं",
          icon: "💰",
          faqs: [
            {
              question: "क्या मुझे डिजिटल भुगतान के लिए शुल्क देना पड़ता है?",
              answer: "ज्यादातर UPI भुगतान बिल्कुल मुफ्त हैं! आप इनके लिए कुछ भी भुगतान नहीं करते: दोस्तों/परिवार को पैसे भेजना, UPI के माध्यम से दुकानों में भुगतान करना, पैसे प्राप्त करना। कुछ शुल्क लग सकते हैं: क्रेडिट कार्ड भुगतान, वॉलेट-टू-बैंक ट्रांसफर, अंतर्राष्ट्रीय भुगतान। भुगतान करने से पहले हमेशा जांचें - ऐप आपको दिखाएगा यदि कोई शुल्क है।"
            },
            {
              question: "क्या प्रति दिन कितनी राशि भेज सकते हैं की कोई सीमा है?",
              answer: "हां, सुरक्षा कारणों से सीमाएं हैं: UPI - प्रति दिन ₹1 लाख, वॉलेट - आमतौर पर प्रति महीने ₹10,000-₹20,000, डेबिट कार्ड - आपके बैंक पर निर्भर करता है। ये सीमाएं आपके बैंक से संपर्क करके बदली जा सकती हैं। बड़ी राशि के लिए, आप नेट बैंकिंग का उपयोग कर सकते हैं या बैंक शाखा में जा सकते हैं। दैनिक सीमाएं मध्यरात्रि में रीसेट हो जाती हैं।"
            },
            {
              question: "क्या मैं ₹5-₹10 जैसी छोटी राशि के लिए डिजिटल भुगतान का उपयोग कर सकता हूं?",
              answer: "बिल्कुल! डिजिटल भुगतान ₹1 से ₹1 लाख तक की किसी भी राशि के लिए काम करते हैं। यह चाय (₹5), बस टिकट (₹10), या सब्जियां (₹50) खरीदने के लिए बिल्कुल सही है। छोटे दुकानदार इसे पसंद करते हैं क्योंकि उन्हें छोटी राशि के लिए खुदरा देने की चिंता नहीं करनी पड़ती। ज्यादातर भुगतानों के लिए कोई न्यूनतम सीमा नहीं है।"
            },
            {
              question: "यदि मेरा बैंक खाता नहीं है तो क्या करूं?",
              answer: "आप अभी भी डिजिटल भुगतान का उपयोग कर सकते हैं! 1) एक बुनियादी बैंक खाता खोलें (कुछ बैंकों में केवल ₹1 की जरूरत), 2) मोबाइल वॉलेट जैसे Paytm का उपयोग करें जिन्हें हमेशा बैंक खाते की जरूरत नहीं होती, 3) जन धन योजना मुफ्त बैंक खाते प्रदान करती है, 4) कुछ वॉलेट आपको दुकानों में नकदी का उपयोग करके पैसे जोड़ने की सुविधा देते हैं। हम हमारी कार्यशालाओं के दौरान बैंक खाता खोलने में मदद कर सकते हैं।"
            }
          ]
        }
      ],
      
      helpSection: {
        title: "अभी भी मदद चाहिए?",
        subtitle: "हम हर कदम पर आपका साथ देने के लिए यहां हैं",
        options: [
          {
            title: "हमारी मुफ्त कार्यशाला में शामिल हों",
            description: "वास्तविक डिवाइस और विशेषज्ञ मार्गदर्शन के साथ व्यावहारिक प्रशिक्षण",
            icon: "👨‍🏫",
            action: "कार्यशाला बुक करें"
          },
          {
            title: "हमारी हेल्पलाइन पर कॉल करें",
            description: "अपनी स्थानीय भाषा में हमारे प्रशिक्षित स्वयंसेवकों से बात करें",
            icon: "📞",
            action: "अभी कॉल करें"
          },
          {
            title: "लर्निंग सेंटर पर जाएं",
            description: "अपने क्षेत्र में निकटतम डिजिटल साक्षरता केंद्र खोजें",
            icon: "📍",
            action: "केंद्र खोजें"
          },
          {
            title: "गाइड डाउनलोड करें",
            description: "कई भाषाओं में चरणबद्ध चित्रित गाइड",
            icon: "📚",
            action: "डाउनलोड करें"
          }
        ]
      }
    }
  };

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <section id="faq" className="py-20 bg-white">
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

        {/* FAQ Categories */}
        <div className="space-y-8">
          {text[language].categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8">
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {category.name}
                </h3>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                  
                  return (
                    <div key={faqIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </span>
                        <div className={`text-2xl text-blue-500 transform transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}>
                          ↓
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {text[language].helpSection.title}
            </h3>
            <p className="text-xl text-gray-600">
              {text[language].helpSection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {text[language].helpSection.options.map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl p-6 text-white text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h4 className="text-xl font-bold mb-3">{option.title}</h4>
                <p className="text-sm opacity-90 mb-6">{option.description}</p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 w-full">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            💡 Quick Tips for Success
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold text-gray-800">Start Small</div>
              <div className="text-sm text-gray-600">Begin with ₹10-₹20 payments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <div className="font-semibold text-gray-800">Practice with Family</div>
              <div className="text-sm text-gray-600">Send money to relatives first</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📝</div>
              <div className="font-semibold text-gray-800">Keep Records</div>
              <div className="text-sm text-gray-600">Check transaction history regularly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-semibold text-gray-800">Ask for Help</div>
              <div className="text-sm text-gray-600">Don't hesitate to seek assistance</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Don't let questions hold you back. Join our community of successful digital payment users!
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
