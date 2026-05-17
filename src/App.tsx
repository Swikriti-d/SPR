import Header from './components/common/Header'
import Hero from './components/section/Hero.tsx'
import Stats from './components/section/Stats.tsx'
import FoundationStrategy from './components/section/FoundationStrategy.tsx'
import Services from './components/section/Services'
import UpcomingEvents from './components/section/UpcomingEvent.tsx'
import CTABanner from './components/section/CTABanner.tsx'
import CommunityStories from './components/section/CommunityStories.tsx'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="relative z-20 -mt-20 px-6 sm:px-10 md:px-20 lg:px-28">
      <Stats />
      </div>
      <FoundationStrategy />
      <Services />
      <UpcomingEvents />
      <CTABanner />
      <CommunityStories />
    </div>
  )
}

export default App;