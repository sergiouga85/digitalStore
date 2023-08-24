import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <div>
        <Spinner className="spinner" thickness='4px'speed='0.65s'emptyColor='gray.200'color='black'size='xl'/>
    </div>
  )
}

export default Loading