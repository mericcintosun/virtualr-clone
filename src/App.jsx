import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { Navbar } from './components/Navbar'
import Pricing from './components/Pricing'
import Testiominals from './components/Testiominals'
import Workflow from './components/Workflow'
import './index.css'
function App() {


  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Hero/>
    <Feature />
    <Workflow />
    <Pricing />
    <Testiominals />
    <Footer />
    </div>
    </>
  )
}

export default App