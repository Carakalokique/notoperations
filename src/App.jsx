import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import Offer from './components/Offer/Offer'
import Problem from './components/Problem/Problem'
import Process from './components/Process/Process'
import Story from './components/Story/Story'
import Catch from './components/Catch/Catch'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Banner />
        <Offer />
        <Problem />
        <Process />
        <Story />
        <Catch />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}

export default App
