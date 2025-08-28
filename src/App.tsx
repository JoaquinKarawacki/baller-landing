import { useState } from 'react'
import Header from "./sections/header";
import Hero from "./sections/hero";
import HowItWorks from "./sections/HowItWorks";
import Demos from "./sections/Demo";
import Web from "./sections/Web";
import Footer from "./sections/Footer";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
         <main>
          <Hero/>
            <HowItWorks/>
            <Demos/>
            <Web/>
         </main>
          <Footer/>
    </>
  )
}

export default App
