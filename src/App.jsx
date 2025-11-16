import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'

const Home = React.lazy(() => import('./pages/Home'))
const Services = React.lazy(() => import('./pages/Services'))
const ServicesNew = React.lazy(() => import('./pages/ServicesNew'))
const Specialities = React.lazy(() => import('./pages/Specialities'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Vision = React.lazy(() => import('./pages/Vision'))

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh' 
          }}>
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesNew />} />
            <Route path="/services-new" element={<Services />} />
            <Route path="/specialities" element={<Specialities />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App

