import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const text = {
    en: {
      title: "Real Stories from Real People",
      subtitle: "Hear How Digital Payments Transformed Lives Across India",
      
      testimonials: [
        {
          name: "Sunita Sharma",
          age: 45,
          location: "Village Khatauli, Uttar Pradesh",
          occupation: "Farmer & Vegetable Vendor",
          image: "👩‍🌾",
          story: "I used to struggle with making change when selling vegetables in the market. Sometimes customers didn't have exact money, and I would lose sales. After learning about UPI payments in our village workshop, everything changed! Now customers can pay me directly from their phones. I don't worry about carrying lots of cash or giving change. My sales have increased by 30% because people can buy even when they don't have cash.",
          impact: "Monthly income increased by ₹5,000",
          beforeAfter: {
            before: "Lost 3-4 sales daily due to change issues",
            after: "Never miss a sale, customers pay easily"
          },
          favoriteFeature: "QR code payments - customers just scan and pay!"
        },
        {
          name: "Ramesh Kumar",
          age: 38,
          location: "Nandgaon, Maharashtra",
          occupation: "Small Shop Owner",
          image: "👨‍💼",
          story: "Running a grocery store, I always worried about keeping large amounts of cash safe. During festivals, I had to keep ₹50,000-₹1,00,000 in the shop, which made me very nervous about theft. Now, 80% of my customers pay digitally. I sleep peacefully knowing my money is safe in the bank. The transaction records also help me understand which products sell most, so I can stock better.",
          impact: "Reduced cash handling by 80%",
          beforeAfter: {
            before: "Sleepless nights worrying about cash theft",
            after: "Peaceful sleep, money safe in bank"
          },
          favoriteFeature: "Automatic transaction records help track business"
        },
        {
          name: "Meera Devi",
          age: 52,
          location: "Sawai Madhopur, Rajasthan",
          occupation: "Housewife & Self-Help Group Leader",
          image: "👩‍🦳",
          story: "I manage a women's self-help group with 25 members. Earlier, collecting monthly contributions was very difficult. I had to visit each house, sometimes people weren't home, or they didn't have exact money. It took me 3-4 days every month. Now, everyone sends their contribution through UPI. I receive all payments in one day! We also started an online savings account for our group's emergency fund.",
          impact: "Saved 15 hours monthly in collection time",
          beforeAfter: {
            before: "3-4 days to collect monthly contributions",
            after: "All payments received in one day"
          },
          favoriteFeature: "Group members can pay anytime, from anywhere"
        },
        {
          name: "Vikash Singh",
          age: 28,
          location: "Muzaffarpur, Bihar",
          occupation: "Auto Rickshaw Driver",
          image: "🚗",
          story: "As an auto driver, getting exact change was always a problem. Passengers often gave me ₹500 notes for a ₹80 ride, and I had to spend time finding change. Sometimes I lost customers because of this. After starting to accept digital payments, my life became so much easier! Passengers appreciate that they don't need cash. I've also started getting ride bookings through apps, which increased my daily rides by 40%.",
          impact: "Daily rides increased by 8-10 trips",
          beforeAfter: {
            before: "Lost customers due to change problems",
            after: "Customers prefer my auto for easy payments"
          },
          favoriteFeature: "No more change hassles, instant payment"
        },
        {
          name: "Priya Patel",
          age: 34,
          location: "Anand, Gujarat",
          occupation: "Dairy Farmer & Milk Vendor",
          image: "🐄",
          story: "I supply fresh milk to 50+ families in my area. Every morning, I had to carry a heavy bag of coins for change, and keep track of who paid and who didn't. It was very confusing! Now my customers pay monthly through digital payments. I use a simple ledger app to track everything. No more handling dirty money or worrying about exact change. My customers also prefer the convenience.",
          impact: "100% payment collection, zero confusion",
          beforeAfter: {
            before: "Daily confusion about payments and change",
            after: "Clean, organized, digital payment tracking"
          },
          favoriteFeature: "Monthly subscription payments, no daily collection"
        },
        {
          name: "Gopal Yadav",
          age: 41,
          location: "Hardoi, Uttar Pradesh",
          occupation: "Barber Shop Owner",
          image: "✂️",
          story: "In my small barber shop, customers often came without enough cash, especially at month-end. I had to either give them credit or lose the customer. This affected my daily income badly. After learning about UPI, I put up a QR code in my shop. Now customers can pay immediately after their haircut. My daily income became more stable, and I don't have to maintain credit records anymore.",
          impact: "Zero credit customers, 100% immediate payments",
          beforeAfter: {
            before: "30% customers took services on credit",
            after: "Every customer pays immediately"
          },
          favoriteFeature: "QR code displayed in shop, instant payments"
        }
      ],

      stats: {
        title: "Impact Across India",
        data: [
          { label: "Lives Transformed", value: "500,000+", icon: "👥" },
          { label: "Villages Covered", value: "2,500+", icon: "🏘️" },
          { label: "Average Income Increase", value: "25%", icon: "📈" },
          { label: "Time Saved Daily", value: "2 Hours", icon: "⏰" },
          { label: "Success Rate", value: "97%", icon: "✅" },
          { label: "Safe Transactions", value: "100%", icon: "🛡️" }
        ]
      }
    },

    hi: {
      title: "असली लोगों की असली कहानियां",
      subtitle: "सुनें कि कैसे डिजिटल भुगतान ने पूरे भारत में जीवन बदल दिया",
      
      testimonials: [
        {
          name: "सुनीता शर्मा",
          age: 45,
          location: "गांव खतौली, उत्तर प्रदेश",
          occupation: "किसान और सब्जी विक्रेता",
          image: "👩‍🌾",
          story: "मैं बाजार में सब्जी बेचते समय खुदरा पैसे देने में परेशानी होती थी। कभी-कभी ग्राहकों के पास सही पैसे नहीं होते थे, और मेरी बिक्री छूट जाती थी। हमारे गांव की कार्यशाला में UPI भुगतान के बारे में सीखने के बाद, सब कुछ बदल गया! अब ग्राहक सीधे अपने फोन से मुझे भुगतान कर सकते हैं। मुझे बहुत सारे नकदी रखने या खुदरा देने की चिंता नहीं है। मेरी बिक्री 30% बढ़ गई है क्योंकि लोग तब भी खरीद सकते हैं जब उनके पास नकदी नहीं है।",
          impact: "मासिक आय में ₹5,000 की वृद्धि",
          beforeAfter: {
            before: "खुदरा पैसे की समस्या से रोज 3-4 बिक्री छूटती थी",
            after: "कभी भी बिक्री नहीं छूटती, ग्राहक आसानी से भुगतान करते हैं"
          },
          favoriteFeature: "QR कोड भुगतान - ग्राहक बस स्कैन करके भुगतान करते हैं!"
        },
        {
          name: "रमेश कुमार",
          age: 38,
          location: "नंदगांव, महाराष्ट्र",
          occupation: "छोटी दुकान के मालिक",
          image: "👨‍💼",
          story: "किराना स्टोर चलाते समय, मैं हमेशा बड़ी मात्रा में नकदी को सुरक्षित रखने की चिंता करता था। त्योहारों के दौरान, मुझे दुकान में ₹50,000-₹1,00,000 रखना पड़ता था, जिससे मुझे चोरी की बहुत चिंता होती थी। अब, मेरे 80% ग्राहक डिजिटल भुगतान करते हैं। मैं शांति से सोता हूं यह जानते हुए कि मेरा पैसा बैंक में सुरक्षित है। लेन-देन के रिकॉर्ड भी मुझे समझने में मदद करते हैं कि कौन से उत्पाद सबसे ज्यादा बिकते हैं।",
          impact: "नकदी हैंडलिंग में 80% कमी",
          beforeAfter: {
            before: "नकदी चोरी की चिंता से नींद नहीं आती थी",
            after: "शांति से सोता हूं, पैसा बैंक में सुरक्षित"
          },
          favoriteFeature: "स्वचालित लेन-देन रिकॉर्ड व्यापार ट्रैक करने में मदद करते हैं"
        },
        {
          name: "मीरा देवी",
          age: 52,
          location: "सवाई माधोपुर, राजस्थान",
          occupation: "गृहिणी और स्वयं सहायता समूह नेता",
          image: "👩‍🦳",
          story: "मैं 25 सदस्यों के साथ एक महिला स्वयं सहायता समूह का प्रबंधन करती हूं। पहले, मासिक योगदान इकट्ठा करना बहुत कठिन था। मुझे हर घर जाना पड़ता था, कभी-कभी लोग घर पर नहीं होते थे, या उनके पास सही पैसे नहीं होते थे। हर महीने मुझे 3-4 दिन लगते थे। अब, सभी अपना योगदान UPI के माध्यम से भेजते हैं। मुझे एक दिन में सभी भुगतान मिल जाते हैं! हमने अपने समूह के आपातकालीन फंड के लिए एक ऑनलाइन बचत खाता भी शुरू किया है।",
          impact: "संग्रह समय में मासिक 15 घंटे की बचत",
          beforeAfter: {
            before: "मासिक योगदान इकट्ठा करने में 3-4 दिन",
            after: "एक दिन में सभी भुगतान प्राप्त"
          },
          favoriteFeature: "समूह के सदस्य कभी भी, कहीं से भी भुगतान कर सकते हैं"
        },
        {
          name: "विकाश सिंह",
          age: 28,
          location: "मुजफ्फरपुर, बिहार",
          occupation: "ऑटो रिक्शा चालक",
          image: "🚗",
          story: "ऑटो चालक के रूप में, सही खुदरा पैसे मिलना हमेशा एक समस्या थी। यात्री अक्सर ₹80 की सवारी के लिए ₹500 के नोट देते थे, और मुझे खुदरा ढूंढने में समय बिताना पड़ता था। कभी-कभी इस वजह से मैं ग्राहक खो देता था। डिजिटल भुगतान स्वीकार करना शुरू करने के बाद, मेरा जीवन इतना आसान हो गया! यात्री इस बात की सराहना करते हैं कि उन्हें नकदी की जरूरत नहीं है। मैंने ऐप्स के माध्यम से राइड बुकिंग भी शुरू की है, जिससे मेरी दैनिक सवारी 40% बढ़ गई है।",
          impact: "दैनिक सवारी में 8-10 ट्रिप की वृद्धि",
          beforeAfter: {
            before: "खुदरा की समस्या से ग्राहक खो देता था",
            after: "आसान भुगतान के लिए ग्राहक मेरे ऑटो को प्राथमिकता देते हैं"
          },
          favoriteFeature: "कोई खुदरा परेशानी नहीं, तुरंत भुगतान"
        },
        {
          name: "प्रिया पटेल",
          age: 34,
          location: "आनंद, गुजरात",
          occupation: "डेयरी किसान और दूध विक्रेता",
          image: "🐄",
          story: "मैं अपने क्षेत्र में 50+ परिवारों को ताजा दूध सप्लाई करती हूं। हर सुबह, मुझे खुदरा के लिए सिक्कों का भारी बैग ले जाना पड़ता था, और ट्रैक रखना पड़ता था कि किसने भुगतान किया और किसने नहीं। यह बहुत भ्रमित करने वाला था! अब मेरे ग्राहक डिजिटल भुगतान के माध्यम से मासिक भुगतान करते हैं। मैं सब कुछ ट्रैक करने के लिए एक सरल लेजर ऐप का उपयोग करती हूं। अब न तो गंदे पैसे संभालने की जरूरत है और न ही सही खुदरा की चिंता। मेरे ग्राहक भी सुविधा पसंद करते हैं।",
          impact: "100% भुगतान संग्रह, शून्य भ्रम",
          beforeAfter: {
            before: "भुगतान और खुदरा के बारे में दैनिक भ्रम",
            after: "स्वच्छ, व्यवस्थित, डिजिटल भुगतान ट्रैकिंग"
          },
          favoriteFeature: "मासिक सब्सक्रिप्शन भुगतान, कोई दैनिक संग्रह नहीं"
        },
        {
          name: "गोपाल यादव",
          age: 41,
          location: "हरदोई, उत्तर प्रदेश",
          occupation: "नाई की दुकान के मालिक",
          image: "✂️",
          story: "मेरी छोटी नाई की दुकान में, ग्राहक अक्सर पर्याप्त नकदी के बिना आते थे, खासकर महीने के अंत में। मुझे या तो उन्हें उधार देना पड़ता था या ग्राहक को खो देना पड़ता था। इससे मेरी दैनिक आय बुरी तरह प्रभावित होती थी। UPI के बारे में सीखने के बाद, मैंने अपनी दुकान में एक QR कोड लगाया। अब ग्राहक अपने बाल कटवाने के तुरंत बाद भुगतान कर सकते हैं। मेरी दैनिक आय अधिक स्थिर हो गई, और मुझे अब उधार के रिकॉर्ड बनाए रखने की जरूरत नहीं है।",
          impact: "शून्य उधार ग्राहक, 100% तत्काल भुगतान",
          beforeAfter: {
            before: "30% ग्राहक उधार पर सेवा लेते थे",
            after: "हर ग्राहक तुरंत भुगतान करता है"
          },
          favoriteFeature: "दुकान में QR कोड लगाया, तुरंत भुगतान"
        }
      ],

      stats: {
        title: "पूरे भारत में प्रभाव",
        data: [
          { label: "बदले गए जीवन", value: "500,000+", icon: "👥" },
          { label: "कवर किए गए गांव", value: "2,500+", icon: "🏘️" },
          { label: "औसत आय वृद्धि", value: "25%", icon: "📈" },
          { label: "दैनिक समय की बचत", value: "2 घंटे", icon: "⏰" },
          { label: "सफलता दर", value: "97%", icon: "✅" },
          { label: "सुरक्षित लेन-देन", value: "100%", icon: "🛡️" }
        ]
      }
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % text[language].testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + text[language].testimonials.length) % text[language].testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
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

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {text[language].stats.data.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left - Person Info */}
            <div className="text-center lg:text-left">
              <div className="text-8xl mb-4 text-center">
                {text[language].testimonials[activeTestimonial].image}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {text[language].testimonials[activeTestimonial].name}
              </h3>
              <p className="text-gray-600 mb-1">
                Age: {text[language].testimonials[activeTestimonial].age}
              </p>
              <p className="text-gray-600 mb-1">
                📍 {text[language].testimonials[activeTestimonial].location}
              </p>
              <p className="text-blue-600 font-semibold mb-4">
                {text[language].testimonials[activeTestimonial].occupation}
              </p>
              
              <div className="bg-green-100 rounded-xl p-4 mb-4">
                <div className="text-green-800 font-semibold text-sm mb-2">Impact:</div>
                <div className="text-green-700 font-bold">
                  {text[language].testimonials[activeTestimonial].impact}
                </div>
              </div>
            </div>

            {/* Center - Story */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="text-6xl text-blue-200 mb-4 text-center lg:text-left">"</div>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  {text[language].testimonials[activeTestimonial].story}
                </p>
                <div className="text-6xl text-blue-200 text-right">"</div>
              </div>

              {/* Before/After */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h4 className="font-semibold text-red-700 mb-2">Before:</h4>
                  <p className="text-red-600 text-sm">
                    {text[language].testimonials[activeTestimonial].beforeAfter.before}
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">After:</h4>
                  <p className="text-green-600 text-sm">
                    {text[language].testimonials[activeTestimonial].beforeAfter.after}
                  </p>
                </div>
              </div>

              {/* Favorite Feature */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">💡 Favorite Feature:</h4>
                <p className="text-blue-600">
                  {text[language].testimonials[activeTestimonial].favoriteFeature}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
            >
              ←
            </button>
            
            <div className="flex space-x-2">
              {text[language].testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Testimonial Grid Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {text[language].testimonials.slice(0, 6).map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`bg-white rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                index === activeTestimonial ? 'ring-4 ring-blue-200 shadow-lg' : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">{testimonial.image}</span>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.occupation}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">
                {testimonial.story.substring(0, 120)}...
              </p>
              <div className="mt-3 text-xs text-green-600 font-semibold">
                {testimonial.impact}
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Your Success Story Starts Here!
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of people who have transformed their lives with digital payments. 
              Start your journey towards a safer, more convenient financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Book Free Workshop
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
