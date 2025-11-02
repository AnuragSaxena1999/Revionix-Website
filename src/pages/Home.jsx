import React from 'react'
import './Pages.css'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import AboutGrid from '../components/home/AboutGrid'
import CTA from '../components/shared/CTA'

function Home() {
  return (
    <div className="page">
      <Hero />
      <AboutGrid />
      <Features />
      <CTA 
        title="Ready to Transform Your Revenue Cycle?"
        description="Join hundreds of healthcare organizations already benefiting from our solutions."
        primaryButton={{
          text: "Schedule a Consultation",
          link: "/contact"
        }}
        secondaryButton={{
          text: "Contact Us Today",
          link: "/contact"
        }}
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop&q=80"
      />
    </div>
  )
}

export default Home