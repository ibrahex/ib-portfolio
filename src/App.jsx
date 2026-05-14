import { useState } from 'react'




import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

function App() {

  return (

    <div className='container'>

      <Header />
      <div className='divider'></div>
      <Hero />
      <div className='divider'></div>
      <Main/>
      <div className='divider'></div>
      <Contact />
      <div className='divider'></div>
      <Footer />
      
    </div>
  )
}

{/* this is github ibrahi example */}

export default App
