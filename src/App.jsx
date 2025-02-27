import React from 'react'
import Login from './components/Login' 
import Registeration from './components/Registration'
import { Routes, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import YoutubeSummarizer from './components/YoutubeSummarizer'
import FC from "./components/FC"
import Verify from './components/Verify'
import FlashCards from './components/FlashCards'
import Summary from './components/Summary'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/register" element = {< Registeration/>} />
        <Route path = "/login" element = {< Login/>} />
        <Route path = "/" element = {<Landing />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
        <Route path = "/verify" element = {<Verify />} />
        <Route path = "/flash-card-form" element = {<FC />} />
        <Route path = "/flash-cards" element = {<FlashCards />} />
        <Route path="/youtubeSummarizer" element={<YoutubeSummarizer />} />
        <Route path="/youtubeSummarizer/summary" element={<Summary />} />
      </Routes>

      <Footer />
    </div>
    
  )
}

export default App

