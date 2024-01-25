'use client'
import React, { useEffect, useState } from 'react'

const LoadMore = () => {
    const [Product, setProduct] = useState([])
    const [Loading, setLoading] = useState(false)
    const [CountClick, setCountClick] = useState(0)
    const limit = 10 // the number of items to fetch per page
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${CountClick * limit}&select=title,price`
    const fetchProduct = async() =>{
        try{
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json() 
            console.log(data)
            if(data){
                setProduct(data) 
                setLoading(false) 
            }
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
      fetchProduct()
    }, [url])
    if(Loading){
        return <div className='flex items-center top-48 font-bold text-2xl tracking-tighter'><span>Please Wait | Data Loading....!</span></div>
    }
  return (
    <>
  <div>
   {
    Product && Product.length ? 
    Product.map((value,index)=>{
        return <div>{value.object.index}</div>
    })
    :null
   }
  </div>
  <button className='' onClick={() => setCountClick(CountClick + 1)}>Load More</button>
    </>
  )
}

export default LoadMore
