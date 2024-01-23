import React from 'react'
import HeroBox from './Components/HeroBox'
import Content from './Components/Content'
import Footer from './Components/Footer'


const page = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto flex flex-col'>
    <HeroBox/>
    <Content/>
    <Footer/>
    </div>
    </>
  )
}


export default page