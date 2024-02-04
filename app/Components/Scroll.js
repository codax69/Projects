'use client'
import React, { useEffect, useState } from 'react'

const Scroll = ({url}) => {
  const Url = url
  const [products, setProducts] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)
  const [Loading, setLoading] = useState(false)
  const [scrollPer, setScrollPer] = useState(0)
  const handleScroll = () =>{
    const HowMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    setScrollPer((HowMuchScrolled/height)*100)
  }
  const fetchData = async() =>{
    try{
      const response = await fetch(Url)
      const result = await response.json()
      setProducts(result.products)
    }
    catch(error){
      setErrorMsg(error.message)
    }
  }
  useEffect(() => {
    fetchData()
  }, [Url])
  useEffect(() => {
    window,addEventListener('scroll',handleScroll)
  
    return () => {
      window.removeEventListener('scroll',()=>{})
    }
  }, [])
  
  console.log(products)
  return (
    <>
      <div className=' absolute top-0'>
        <div style={{width:`${scrollPer}%`}} className='fixed h-1 bg-white rounded-xl'></div>
      </div>
      {errorMsg && <div className="error">{errorMsg}</div>}
      <ul>
      {
        products && products.length !== 0?
        products.map((value,index)=>{
          return <li key={index}>{value.title}</li>
        })

        :null
      }
      </ul>
    </>
  )
}

export default Scroll
