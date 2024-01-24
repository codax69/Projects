import React from 'react'
import ImageSidler from '../Components/ImageSidler'

const page = () => {
  return (
    <>
    <ImageSidler url={"https://picsum.photos/v2/list?page=1&limit=5"}/>
    </>
  )
}

export default page