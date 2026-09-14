import React, { useContext } from 'react'
import { appContext } from '../../context/app'
import Head from './head.jsx'

const context = () => {
  const contextapi = useContext(appContext)
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

export default context
