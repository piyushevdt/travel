import DestinationDetail from '@/components/Destination/DestinationDetail'
import React from 'react'

const page = ({ params }) => {
  return (
    <div>
      <DestinationDetail params={params} />
    </div>
  )
}

export default page
