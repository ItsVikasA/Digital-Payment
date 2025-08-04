import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { language } = useLanguage();

  const text = {
    en: {
      brand: {
        title: "Digital Pay India",
        subtitle: "Empowering Every Rupee",
        description: "Making digital payments accessible, safe, and simple for every Indian. Join the financial revolution and secure your future."
      },
      
      links: {
        quickLinks: {
          title: "Quick Links",
          items: [
            { name: "About Digital Payments", href: "#about" },
            { name: "Benefits", href: "#benefits" },
            { name: "Payment Methods", href: "#methods" },
            { name: "Safety Tips", href: "#safety" },
            { name: "Success Stories", href: "#testimonials" },
            { name: "FAQ", href: "#faq" }
          ]
        },
        
        support: {
          title: "Support",
          items: [
            { name: "Free Workshop", href: "#workshop" },
            { name: "Download Guide", href: "#downloads" },
            { name: "Video Tutorials", href: "#tutorials" },
            { name: "Help Center", href: "#help" },
            { name: "Contact Us", href: "#contact" },
            { name: "Report Issue", href: "#report" }
          ]
        },
        
        resources: {
          title: "Resources",
          items: [
            { name: "UPI Guide", href: "#upi-guide" },
            { name: "Safety Checklist", href: "#safety-checklist" },
            { name: "Mobile Apps", href: "#apps" },
            { name: "Bank Information", href: "#banks" },
            { name: "Government Schemes", href: "#schemes" },
            { name: "Success Metrics", href: "#metrics" }
          ]
        }
      },

      contact: {
        title: "Get Help",
        items: [
          {
            icon: "📞",
            label: "24/7 Helpline",
            value: "1800-123-4567",
            description: "Free calling from any network"
          },
          {
            icon: "💬",
            label: "WhatsApp Support",
            value: "+91-7019003366",
            description: "Chat in your language"
          },
          {
            icon: "✉️",
            label: "Email Support",
            value: "help@digitalpayindia.org",
            description: "Response within 24 hours"
          },
          {
            icon: "📍",
            label: "Find Centers",
            value: "2,500+ locations",
            description: "Digital literacy centers near you"
          }
        ]
      },

      emergency: {
        title: "Emergency Contacts",
        items: [
          { name: "Cybercrime Helpline", number: "1930" },
          { name: "Banking Ombudsman", number: "14448" },
          { name: "UPI Complaints", number: "18001201740" },
          { name: "Consumer Forum", number: "1915" }
        ]
      },

      social: {
        title: "Follow Us",
        platforms: [
          { name: "Facebook", icon: "📘", followers: "500K+" },
          { name: "YouTube", icon: "📺", followers: "200K+" },
          { name: "Instagram", icon: "📷", followers: "100K+" },
          { name: "Twitter", icon: "🐦", followers: "150K+" }
        ]
      },

      legal: {
        copyright: "© 2025 Digital Pay India. All rights reserved.",
        links: [
          "Privacy Policy",
          "Terms of Service",
          "Accessibility",
          "Disclaimer"
        ],
        disclaimer: "This initiative is supported by the Government of India's Digital India program and Reserve Bank of India guidelines."
      },

      certifications: {
        title: "Certified & Trusted",
        items: [
          { name: "RBI Approved", icon: "🏛️" },
          { name: "ISO 27001", icon: "🔒" },
          { name: "Digital India", icon: "🇮🇳" },
          { name: "NPCI Partner", icon: "💳" }
        ]
      }
    },

    hi: {
      brand: {
        title: "डिजिटल पे इंडिया",
        subtitle: "हर रुपये को सशक्त बनाना",
        description: "हर भारतीय के लिए डिजिटल भुगतान को सुलभ, सुरक्षित और सरल बनाना। वित्तीय क्रांति में शामिल हों और अपना भविष्य सुरक्षित करें।"
      },
      
      links: {
        quickLinks: {
          title: "त्वरित लिंक",
          items: [
            { name: "डिजिटल भुगतान के बारे में", href: "#about" },
            { name: "फायदे", href: "#benefits" },
            { name: "भुगतान के तरीके", href: "#methods" },
            { name: "सुरक्षा सुझाव", href: "#safety" },
            { name: "सफलता की कहानियां", href: "#testimonials" },
            { name: "सवाल-जवाब", href: "#faq" }
          ]
        },
        
        support: {
          title: "सहायता",
          items: [
            { name: "मुफ्त कार्यशाला", href: "#workshop" },
            { name: "गाइड डाउनलोड करें", href: "#downloads" },
            { name: "वीडियो ट्यूटोरियल", href: "#tutorials" },
            { name: "सहायता केंद्र", href: "#help" },
            { name: "संपर्क करें", href: "#contact" },
            { name: "समस्या रिपोर्ट करें", href: "#report" }
          ]
        },
        
        resources: {
          title: "संसाधन",
          items: [
            { name: "UPI गाइड", href: "#upi-guide" },
            { name: "सुरक्षा चेकलिस्ट", href: "#safety-checklist" },
            { name: "मोबाइल ऐप्स", href: "#apps" },
            { name: "बैंक जानकारी", href: "#banks" },
            { name: "सरकारी योजनाएं", href: "#schemes" },
            { name: "सफलता मेट्रिक्स", href: "#metrics" }
          ]
        }
      },

      contact: {
        title: "सहायता प्राप्त करें",
        items: [
          {
            icon: "📞",
            label: "24/7 हेल्पलाइन",
            value: "1800-123-4567",
            description: "किसी भी नेटवर्क से मुफ्त कॉलिंग"
          },
          {
            icon: "💬",
            label: "WhatsApp सहायता",
            value: "+91-9876543210",
            description: "अपनी भाषा में चैट करें"
          },
          {
            icon: "✉️",
            label: "ईमेल सहायता",
            value: "help@digitalpayindia.org",
            description: "24 घंटे के अंदर जवाब"
          },
          {
            icon: "📍",
            label: "केंद्र खोजें",
            value: "2,500+ स्थान",
            description: "आपके नजदीक डिजिटल साक्षरता केंद्र"
          }
        ]
      },

      emergency: {
        title: "आपातकालीन संपर्क",
        items: [
          { name: "साइबर अपराध हेल्पलाइन", number: "1930" },
          { name: "बैंकिंग लोकपाल", number: "14448" },
          { name: "UPI शिकायत", number: "18001201740" },
          { name: "उपभोक्ता फोरम", number: "1915" }
        ]
      },

      social: {
        title: "हमें फॉलो करें",
        platforms: [
          { name: "Facebook", icon: "📘", followers: "500K+" },
          { name: "YouTube", icon: "📺", followers: "200K+" },
          { name: "Instagram", icon: "📷", followers: "100K+" },
          { name: "Twitter", icon: "🐦", followers: "150K+" }
        ]
      },

      legal: {
        copyright: "© 2025 डिजिटल पे इंडिया। सभी अधिकार सुरक्षित।",
        links: [
          "गोपनीयता नीति",
          "सेवा की शर्तें",
          "पहुंच",
          "अस्वीकरण"
        ],
        disclaimer: "यह पहल भारत सरकार के डिजिटल इंडिया कार्यक्रम और भारतीय रिज़र्व बैंक के दिशानिर्देशों द्वारा समर्थित है।"
      },

      certifications: {
        title: "प्रमाणित और भरोसेमंद",
        items: [
          { name: "RBI अनुमोदित", icon: "🏛️" },
          { name: "ISO 27001", icon: "🔒" },
          { name: "डिजिटल इंडिया", icon: "🇮🇳" },
          { name: "NPCI पार्टनर", icon: "💳" }
        ]
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">₹</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{text[language].brand.title}</h3>
                <p className="text-teal-400">{text[language].brand.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {text[language].brand.description}
            </p>

            {/* Certifications */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">{text[language].certifications.title}</h4>
              <div className="flex flex-wrap gap-3">
                {text[language].certifications.items.map((cert, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg px-3 py-2 flex items-center space-x-2">
                    <span className="text-lg">{cert.icon}</span>
                    <span className="text-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-3">{text[language].social.title}</h4>
              <div className="flex space-x-4">
                {text[language].social.platforms.map((platform, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-1">{platform.icon}</div>
                    <div className="text-xs text-gray-400">{platform.followers}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{text[language].links.quickLinks.title}</h4>
            <ul className="space-y-2">
              {text[language].links.quickLinks.items.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{text[language].links.support.title}</h4>
            <ul className="space-y-2">
              {text[language].links.support.items.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{text[language].links.resources.title}</h4>
            <ul className="space-y-2">
              {text[language].links.resources.items.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Emergency Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-800">
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">{text[language].contact.title}</h4>
            <div className="space-y-4">
              {text[language].contact.items.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-teal-400 font-bold">{item.value}</div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h4 className="text-xl font-semibold mb-6">{text[language].emergency.title}</h4>
            <div className="bg-red-900 bg-opacity-20 rounded-xl p-4 border border-red-700">
              <div className="space-y-3">
                {text[language].emergency.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{item.name}</span>
                    <span className="font-bold text-red-400">{item.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              {text[language].legal.copyright}
            </div>
            
            <div className="flex flex-wrap gap-4">
              {text[language].legal.links.map((link, index) => (
                <a key={index} href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto">
              {text[language].legal.disclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-teal-400 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
