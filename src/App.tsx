import React from 'react'
import Header from './components/common/Header'
import Hero from './components/section/Hero.tsx'
import Stats from './components/section/Stats.tsx'
import FoundationStrategy from './components/section/FoundationStrategy.tsx'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <FoundationStrategy />
    </div>
  )
}

export default App