import React from 'react'
import Header from './components/common/Header'
import Hero from './components/section/Hero.tsx'
import Stats from './components/section/Stats.tsx'
import FoundationStrategy from './components/section/FoundationStrategy.tsx'
import Services from './components/section/Services'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <FoundationStrategy />
      <Services />
    </div>
  )
}

export default App