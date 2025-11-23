import React from 'react'
import './Values.css'
import { 
  FaBalanceScale, 
  FaBullseye, 
  FaHandshake, 
  FaUsers, 
  FaLightbulb 
} from 'react-icons/fa'

const values = [
  {
    title: 'Integrity',
    text: 'We maintain the highest standards of honesty and ethics in all our interactions.',
    icon: FaBalanceScale
  },
  {
    title: 'Accuracy',
    text: 'Every claim, report, and transaction is handled with precision to ensure reliable results.',
    icon: FaBullseye
  },
  {
    title: 'Accountability',
    text: 'We take full responsibility for the performance of our services and the outcomes we deliver.',
    icon: FaHandshake
  },
  {
    title: 'Client-Centric',
    text: "Our solutions are tailored to the unique needs of each provider we serve.",
    icon: FaUsers
  },
  {
    title: 'Innovation',
    text: 'We continuously seek smarter ways to optimize processes, leveraging technology and expertise to drive efficiency.',
    icon: FaLightbulb
  }
]

export default function Values() {
  return (
    <section className="values-section">
      <div className="values-inner">
        <h2 className="values-title" data-aos="fade-up">Our Values</h2>
        <p className="values-intro" data-aos="fade-up" data-aos-delay="100">These principles guide everything we do — ensuring our clients can trust us to manage their revenue cycle efficiently and professionally.</p>

        <div className="values-grid">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="value-card" 
              data-aos="fade-up" 
              data-aos-delay={i * 100}>
              <div className="value-icon">
                <v.icon />
              </div>
              <div className="value-content">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
