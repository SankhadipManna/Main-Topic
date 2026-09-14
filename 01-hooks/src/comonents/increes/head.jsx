import React, { useContext } from 'react'
import { appContext } from '../../context/app'
const head = () => {
    const {count} = useContext(appContext)
    
  return (
    <div>
      <h1>No:{count}</h1>
    </div>
  )
}

export default head
