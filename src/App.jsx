
import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext.jsx'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import BenefitsSection from './components/BenefitsSection'
import PaymentMethodsSection from './components/PaymentMethodsSection'
import SafetySection from './components/SafetySection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <IntroSection />
        <BenefitsSection />
        <PaymentMethodsSection />
        <SafetySection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
