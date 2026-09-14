import React, { useContext } from 'react'
import { appContext } from '../context/app'
const Contact = () => {
    const { phone,name } = useContext(appContext)
  return (
    <div>
      <h2>Contact</h2>
      <h3>Phone:{phone} </h3>
      <h3>Name:{name} </h3>
    </div>
  )
}

export default Contact
