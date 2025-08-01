import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const CTASection = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    preferredTime: '',
    language: 'en'
  });

  const text = {
    en: {
      workshop: {
        title: "Join Our Free Digital Payment Workshop",
        subtitle: "Learn hands-on with expert guidance in your local language",
        benefits: [
          "100% Free Training",
          "Expert Instructors",
          "Hands-on Practice",
          "Certificate Completion",
          "Local Language Support",
          "Take-home Materials"
        ],
        form: {
          title: "Book Your Free Session",
          name: "Full Name",
          mobile: "Mobile Number",
          location: "Your Location",
          preferredTime: "Preferred Time",
          timeOptions: [
            "Morning (9 AM - 12 PM)",
            "Afternoon (2 PM - 5 PM)",
            "Evening (6 PM - 8 PM)",
            "Weekend Only"
          ],
          languagePreference: "Language Preference",
          submit: "Book My Free Workshop"
        }
      },
      
      downloads: {
        title: "Download Free Resources",
        subtitle: "Take learning materials with you",
        resources: [
          {
            title: "Complete Guide to UPI",
            description: "Step-by-step instructions with pictures",
            format: "PDF, 24 pages",
            languages: "Hindi, English, Regional",
            icon: "📚"
          },
          {
            title: "Safety Checklist",
            description: "Essential security tips and emergency contacts",
            format: "PDF, 8 pages",
            languages: "Hindi, English, Regional",
            icon: "🛡️"
          },
          {
            title: "Video Tutorials",
            description: "Visual demonstrations of all payment methods",
            format: "MP4, 45 minutes",
            languages: "Hindi, English, Regional",
            icon: "🎥"
          },
          {
            title: "Practice Exercises",
            description: "Safe practice scenarios to build confidence",
            format: "PDF, 12 pages",
            languages: "Hindi, English, Regional",
            icon: "✏️"
          }
        ]
      },

      help: {
        title: "Get Immediate Help",
        subtitle: "Connect with our support team",
        options: [
          {
            title: "WhatsApp Support",
            description: "Chat with experts on WhatsApp",
            contact: "+91-9876543210",
            hours: "9 AM - 9 PM",
            icon: "💬"
          },
          {
            title: "Phone Helpline",
            description: "Speak directly with our team",
            contact: "1800-123-4567",
            hours: "24/7 Available",
            icon: "📞"
          },
          {
            title: "Email Support",
            description: "Send your questions via email",
            contact: "help@digitalpayindia.org",
            hours: "Response in 24 hours",
            icon: "✉️"
          }
        ]
      },

      testimonialBanner: {
        title: "Join 500,000+ Success Stories",
        stats: [
          { number: "500K+", label: "People Trained" },
          { number: "2,500+", label: "Villages Covered" },
          { number: "97%", label: "Success Rate" },
          { number: "100%", label: "Safe Transactions" }
        ]
      }
    },

    hi: {
      workshop: {
        title: "हमारी मुफ्त डिजिटल भुगतान कार्यशाला में शामिल हों",
        subtitle: "अपनी स्थानीय भाषा में विशेषज्ञ मार्गदर्शन के साथ व्यावहारिक रूप से सीखें",
        benefits: [
          "100% मुफ्त प्रशिक्षण",
          "विशेषज्ञ प्रशिक्षक",
          "व्यावहारिक अभ्यास",
          "पूर्णता प्रमाणपत्र",
          "स्थानीय भाषा सहायता",
          "घर ले जाने वाली सामग्री"
        ],
        form: {
          title: "अपना मुफ्त सत्र बुक करें",
          name: "पूरा नाम",
          mobile: "मोबाइल नंबर",
          location: "आपका स्थान",
          preferredTime: "पसंदीदा समय",
          timeOptions: [
            "सुबह (9 AM - 12 PM)",
            "दोपहर (2 PM - 5 PM)",
            "शाम (6 PM - 8 PM)",
            "केवल सप्ताहांत"
          ],
          languagePreference: "भाषा प्राथमिकता",
          submit: "मेरी मुफ्त कार्यशाला बुक करें"
        }
      },
      
      downloads: {
        title: "मुफ्त संसाधन डाउनलोड करें",
        subtitle: "सीखने की सामग्री अपने साथ ले जाएं",
        resources: [
          {
            title: "UPI की पूरी गाइड",
            description: "चित्रों के साथ चरणबद्ध निर्देश",
            format: "PDF, 24 पृष्ठ",
            languages: "हिंदी, अंग्रेजी, क्षेत्रीय",
            icon: "📚"
          },
          {
            title: "सुरक्षा चेकलिस्ट",
            description: "आवश्यक सुरक्षा सुझाव और आपातकालीन संपर्क",
            format: "PDF, 8 पृष्ठ",
            languages: "हिंदी, अंग्रेजी, क्षेत्रीय",
            icon: "🛡️"
          },
          {
            title: "वीडियो ट्यूटोरियल",
            description: "सभी भुगतान तरीकों का दृश्य प्रदर्शन",
            format: "MP4, 45 मिनट",
            languages: "हिंदी, अंग्रेजी, क्षेत्रीय",
            icon: "🎥"
          },
          {
            title: "अभ्यास अभ्यास",
            description: "आत्मविश्वास बनाने के लिए सुरक्षित अभ्यास परिदृश्य",
            format: "PDF, 12 पृष्ठ",
            languages: "हिंदी, अंग्रेजी, क्षेत्रीय",
            icon: "✏️"
          }
        ]
      },

      help: {
        title: "तत्काल सहायता प्राप्त करें",
        subtitle: "हमारी सहायता टीम से जुड़ें",
        options: [
          {
            title: "WhatsApp सहायता",
            description: "WhatsApp पर विशेषज्ञों से चैट करें",
            contact: "+91-9876543210",
            hours: "सुबह 9 - रात 9",
            icon: "💬"
          },
          {
            title: "फोन हेल्पलाइन",
            description: "हमारी टीम से सीधे बात करें",
            contact: "1800-123-4567",
            hours: "24/7 उपलब्ध",
            icon: "📞"
          },
          {
            title: "ईमेल सहायता",
            description: "ईमेल के माध्यम से अपने प्रश्न भेजें",
            contact: "help@digitalpayindia.org",
            hours: "24 घंटे में उत्तर",
            icon: "✉️"
          }
        ]
      },

      testimonialBanner: {
        title: "500,000+ सफलता की कहानियों में शामिल हों",
        stats: [
          { number: "500K+", label: "प्रशिक्षित लोग" },
          { number: "2,500+", label: "कवर किए गए गांव" },
          { number: "97%", label: "सफलता दर" },
          { number: "100%", label: "सुरक्षित लेन-देन" }
        ]
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon to schedule your free workshop.');
  };

  return (
    <section id="workshop" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Testimonial Banner */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {text[language].testimonialBanner.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {text[language].testimonialBanner.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Workshop Info */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {text[language].workshop.title}
            </h3>
            <p className="text-xl opacity-90 mb-8">
              {text[language].workshop.subtitle}
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {text[language].workshop.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Workshop Features */}
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-4">What You'll Learn:</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• How to install and setup UPI apps safely</li>
                <li>• Making your first digital payment</li>
                <li>• Scanning QR codes and sending money</li>
                <li>• Recognizing and avoiding common scams</li>
                <li>• Setting up secure PINs and passwords</li>
                <li>• Troubleshooting common problems</li>
              </ul>
            </div>
          </div>

          {/* Right - Registration Form */}
          <div className="bg-white rounded-3xl p-8 text-gray-800">
            <h4 className="text-2xl font-bold mb-6 text-center">
              {text[language].workshop.form.title}
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {text[language].workshop.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {text[language].workshop.form.mobile}
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {text[language].workshop.form.location}
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {text[language].workshop.form.preferredTime}
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select preferred time</option>
                  {text[language].workshop.form.timeOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {text[language].workshop.form.languagePreference}
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी (Hindi)</option>
                  <option value="regional">Regional Language</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {text[language].workshop.form.submit}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>🔒 Your information is completely secure and private</p>
              <p>📞 We'll call you within 24 hours to confirm your session</p>
            </div>
          </div>
        </div>

        {/* Downloads Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {text[language].downloads.title}
            </h3>
            <p className="text-xl opacity-90">
              {text[language].downloads.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {text[language].downloads.resources.map((resource, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{resource.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
                <p className="text-sm opacity-90 mb-3">{resource.description}</p>
                <div className="text-xs opacity-75 mb-1">📄 {resource.format}</div>
                <div className="text-xs opacity-75 mb-4">🌐 {resource.languages}</div>
                <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {text[language].help.title}
            </h3>
            <p className="text-xl opacity-90">
              {text[language].help.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {text[language].help.options.map((option, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-5xl mb-4">{option.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">{option.title}</h4>
                  <p className="text-sm opacity-90 mb-4">{option.description}</p>
                  <div className="text-lg font-bold text-yellow-300 mb-1">{option.contact}</div>
                  <div className="text-sm opacity-75">{option.hours}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-gray-800 inline-block">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't Wait - Transform Your Life Today!
            </h3>
            <p className="text-lg mb-6">
              Join the digital payment revolution and enjoy safer, easier financial transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Book Workshop Now
              </button>
              <button className="bg-white text-gray-800 px-8 py-3 rounded-xl font-semibold text-lg border-2 border-gray-300 hover:shadow-lg transition-all duration-300">
                Call Us: 1800-123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
