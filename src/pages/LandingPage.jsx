import React from 'react'
import NavBar from '../components/sections/NavBar'
import Hero from '../components/sections/Hero'
import Separator from '../components/Separator'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Connect from '../components/sections/Connect'
export default function LandingPage() {
  return (
    <>
    <div className='min-h-screen flex flex-col w-full overflow-x-hidden'>
        <NavBar/>
    <Hero/>
    <div className='w-full '>
    <Separator/>

    </div>
    <div>
    <About/>

    </div>
        <div className='w-full'>
    <Separator/>

    </div>
    <Projects/>
  <div className='w-full '>
    <Separator/>
    </div>
<Skills/>
  <div className='w-full '>
    <Separator/>
    </div>
    <Connect/>
    </div>
    </>
  )
}
