import Header from './components/common/Header'
import Hero from './components/section/Hero.tsx'
import Stats from './components/section/Stats.tsx'
import FoundationStrategy from './components/section/FoundationStrategy.tsx'
import Services from './components/section/Services'
import UpcomingEvents from './components/section/UpcomingEvent.tsx'
import CTABanner from './components/section/CTABanner.tsx'
import CommunityStories from './components/section/CommunityStories.tsx'
import Partners from './components/section/OurPartners.tsx'
import ContactUs from './components/section/ContactUs.tsx'
import Footer from './components/common/Footer.tsx'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <FoundationStrategy />
      <Services />
      <UpcomingEvents />
      <CTABanner />
      <CommunityStories />
      <Partners />
      <ContactUs />
      <Footer />  
    </div>
  )
}

export default App;