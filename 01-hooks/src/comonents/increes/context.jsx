import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext.jsx'
import Head from './head.jsx'

const Context = () => {
  const contextapi = useContext(AppContext)
  const filteredUsers = contextapi.sankha.filter((index) => index.age > 18)

  return (
    <div>
      <Head />
      {filteredUsers.map((user) => (
        <h1 key={user.no}>{user.name} - {user.age}</h1>
      ))}
      <button onClick={() => contextapi.setCount(contextapi.count + 1)}>Incirees</button>
      <button onClick={() => contextapi.setCount(contextapi.count - 1)}>Decrees</button>
    </div>
  )
}

export default Context
