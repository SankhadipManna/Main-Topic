import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext.jsx'
const Head = () => {
  const {count} = useContext(AppContext)
    
  return (
    <div>
      <h1>No:{count}</h1>
    </div>
  )
}

export default Head
