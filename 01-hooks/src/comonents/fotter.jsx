import React ,{useContext} from 'react'
import { appContext } from '../context/app.jsx'
const Fotter = () => {
    const { phone, name } = useContext(appContext)
  return (
    <div>
      <h2>Footer</h2>
      <h3>Phone:{phone} </h3>
      <h3>name:{name} </h3>
    </div>
  )
}

export default Fotter
