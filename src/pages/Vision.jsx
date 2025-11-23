import React from "react";
import "./Vision.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCogs, FaRocket, FaUsers, FaBrain, FaChartLine, FaShieldAlt, FaNetworkWired, FaRobot } from "react-icons/fa";

export default function Vision() {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="page vision-page">

      {/* ===== HERO SECTION ===== */}
      <header className="vision-hero">
        <div className="vision-overlay"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="vision-hero-content"
        >
          <h1>Our Vision</h1>
          <p className="vision-sub">
            Shaping the future of healthcare revenue management with intelligence, transparency and scale.
          </p>
          <p className="lead">
            We are building an AI-integrated automation platform that transforms every RCM workflow —
            using predictive intelligence, process automation, and smart decisioning to accelerate reimbursements
            and improve financial outcomes.
          </p>

          {/* <div className="vision-actions">
            <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
            <Link to="/services" className="btn btn-secondary">Explore Services</Link>
          </div> */}
        </motion.div>

        <motion.div
          className="vision-stats"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <div className="stat-item"><span>+30%</span> Faster Claim Processing</div>
          <div className="stat-item"><span>98%</span> Audit Accuracy</div>
          <div className="stat-item"><span>75%</span> Manual Effort Reduced</div>
        </motion.div>
      </header>

      {/* ===== HIGHLIGHTS GRID ===== */}
      <section className="vision-highlights-grid">
        {[
          { icon: <FaCogs />, title: "Smart Automation", desc: "Automating repetitive processes with precision and transparency." },
          { icon: <FaBrain />, title: "AI-Driven Insights", desc: "Predict denials and surface actions before revenue impact." },
          { icon: <FaUsers />, title: "Human + Machine", desc: "Empowering teams—not replacing expertise." }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="highlight-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="highlight-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ===== AI & INNOVATION SECTION ===== */}
      <section className="ai-innovation">
        <motion.div
          className="ai-left"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          <h2>Innovation Through AI</h2>
          <p>
            Our AI engine continuously learns from real-world billing outcomes, payer behavior patterns,
            and claim history—empowering healthcare organizations with real-time intelligence to improve
            resolution speed, reduce denials, and recover lost revenue.
          </p>

          <ul>
            <li>Machine learning-based denial prediction & risk scoring</li>
            <li>Automated claims routing to the right specialist or workflow</li>
            <li>NLP-powered document extraction for faster processing</li>
            <li>AI-driven work queues to prioritize highest-value actions</li>
            <li>Real-time performance analytics with financial forecasting</li>
          </ul>
        </motion.div>

        <motion.div
          className="ai-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80"
            alt="AI Innovation"
          />
        </motion.div>
      </section>

      {/* ===== TECHNOLOGY PROCESS TIMELINE ===== */}
      <section className="tech-process">
        <h2>Powered by Advanced Technology</h2>
        <div className="process-grid">
          <div className="process-step">
            <FaRobot className="icon-step" />
            <h4>AI Recommendation Engine</h4>
            <p>Guides staff with action-based prioritization for faster recovery cycles.</p>
          </div>

          <div className="process-step">
            <FaNetworkWired className="icon-step" />
            <h4>Connected RCM Ecosystem</h4>
            <p>Unified workflows stitched across eligibility, coding, claims & payments.</p>
          </div>

          <div className="process-step">
            <FaChartLine className="icon-step" />
            <h4>Predictive Analytics</h4>
            <p>Outcome forecasting & denial probability modeling for strategic planning.</p>
          </div>
        </div>
      </section>

      {/* ===== EXISTING FEATURES SECTION ===== */}
      <section className="vision-features">
        <h2>Our Long-Term Commitments</h2>
        <div className="features-grid">
          {[
            { icon: <FaRocket />, title: "Transforming Operations", desc: "Automation accessible to every healthcare organization." },
            { icon: <FaChartLine />, title: "Driving Value", desc: "Delivering measurable financial performance improvements." },
            { icon: <FaUsers />, title: "Human + Machine Synergy", desc: "Blending skilled teams with intelligent automation." },
            { icon: <FaShieldAlt />, title: "Continuous Innovation", desc: "Evolving ahead of industry needs and compliance." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
