import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Services from '../components/Services'
import Profit from '../components/Profit'

function Home() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Profit />
    </div>
  )
}

export default Home
