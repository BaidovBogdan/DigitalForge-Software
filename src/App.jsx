import { useState } from 'react'
import UncontrolledExample from "./components/ControlledCarousel"
import "./App.css"
import SecondPageInfo from './components/SecondPageInfo'
import ThirdPageInfo from './components/ThirdPageInfo'
import MenuPage from './components/menu4Page'
import FivePagePhoto from './components/FivePagePhoto'
import SixPage from './components/SixPage'
import SevenPage from "./components/SevenPage"
import EightPage from './components/EightPage'

function App() {

  return (
    <div className='fullSite'>
      <>
        <UncontrolledExample/>
      </>

      <section className='secondPage'>
        <SecondPageInfo/>
      </section>
      <section className='thirdPage'>
        <ThirdPageInfo/>
      </section>

      <>
        <MenuPage/>
      </>

      <>
        <FivePagePhoto/>
      </>

      <>
        <SixPage/>
      </>
      
      <>
        <SevenPage/>
      </>

      <>
        <EightPage/>
      </>

    </div>
  )
}
export default App
