import HotelDetailPage from '@/components/Hotels/hotelsDetails'
import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <HotelDetailPage params={params}/>
    </div>
  )
}

export default page
