"use client"

import { useState, useEffect, useRef } from "react";
import "./DevelopmentProcess1.css";

const stages = [
  {
    id: 1,
    title: "Initial Discovery & Requirement Gathering",
    description:
      "We begin by understanding your clinic’s operations through a detailed discovery session. This includes identifying your software tools, payer mix, specialty needs, documentation methods, and internal workflow structure",
    illustration: "/Images/img1.jpg",
  },
  {
    id: 2,
    title: "Dedicated Process Expert Assignment",
    description:
    "A dedicated Process Expert is assigned as your primary point of contact. They study your existing RCM setup in depth and map your current processes to identify gaps and opportunities for improvement.",
    illustration: "/Images/img1.jpg",
  },
  {
    id: 3,
    title: "Customized Workflow Design",
    description:"Based on the findings, the Process Expert creates a tailored workflow strategy aligned with your clinic’s unique requirements. This ensures smooth integration with your current system while maintaining accuracy, compliance, and turnaround expectations.",
    illustration: "/Images/img1.jpg",
  },
  {
    id: 4,
    title: "Validation & Approval of the Workflow",
    description:
      "The proposed workflow is reviewed with your team for feedback. After validating all steps — eligibility, authorizations, charge entry, coding, submissions, and follow-ups — the workflow is finalized for implementation." ,
    illustration: "/Images/img1.jpg",
  },
  
  {
    id: 5,
    title: "Team Formation & Dedicated Ownership",
    description:
      "Once the workflow is approved, a specialized RCM team is assembled exclusively for your account. Your Process Expert leads and monitors the team to ensure accountability, consistency, and timely execution of each task.",
    illustration: "/Images/img1.jpg",
  },
  {
    id: 6,
    title: "Ongoing Monitoring, Reporting & Optimization",
    description:
      "We maintain continuous communication through weekly/monthly reviews, performance tracking, and feedback sessions. Our approach ensures full transparency and constant optimization of your revenue cycle.",
   illustration: "/Images/img1.jpg",
  }
  

]

export default function DevelopmentProcess1() {
  const [activeStage, setActiveStage] = useState(1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef(null)
  const stageRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const windowHeight = window.innerHeight
      const scrollTop = window.pageYOffset

      // Calculate scroll progress within the container
      const startScroll = containerTop - windowHeight / 2
      const endScroll = containerTop + containerHeight - windowHeight / 2
      const progress = Math.max(0, Math.min(1, (scrollTop - startScroll) / (endScroll - startScroll)))

      setScrollProgress(progress)

      // Determine active stage based on scroll position
      const stageHeight = containerHeight / stages.length
      const currentStageIndex = Math.min(stages.length - 1, Math.floor(progress * stages.length))

      setActiveStage(currentStageIndex + 1)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="development-process" ref={containerRef}>
      <div className="container">
        {/* <div className="header">
          <h2 className="title">Our Development Process</h2>
          <p className="subtitle">
            From concept to launch, we follow a proven methodology that ensures your project's success
          </p>
        </div> */}

        <div className="content">
          {/* Progress Bar */}
          <div className="progress-sidebar">
            <div className="progress-track">
              <div className="progress-fill" style={{ height: `${scrollProgress * 100}%` }} />
            </div>
            <div className="stage-indicators">
              {stages.map((stage, index) => (
                <div
                  key={stage.id}
                  className={`stage-indicator ${activeStage >= stage.id ? "active" : ""}`}
                  style={{ top: `${(index / (stages.length - 1)) * 100}%` }}
                >
                  <div className="stage-number">{stage.id}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stages Content */}
          <div className="stages-content">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                ref={(el) => (stageRefs.current[index] = el)}
                className={`stage ${activeStage >= stage.id ? "active" : ""}`}
              >
                <div className="stage-illustration">
                  <img
                    src={stage.illustration || "/placeholder.svg"}
                    alt={stage.title}
                    className="illustration-image"
                  />
                </div>
                <div className="stage-info">
                  <h3 className="stage-title">{stage.title}</h3>
                  <p className="stage-description">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}