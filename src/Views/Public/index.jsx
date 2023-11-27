import React from 'react'
import { Navbar,Carousel,Welcome,Special,Inscription,Activities,Footer,Copy } from '../../Components/Public'
export default function Index() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Welcome/>
      <Special/>
      <Inscription/>
      <Activities/>
      <Footer/>
      <Copy/>
    </div>
  )
}
