import React from 'react'

const header = () => {
    console.log("header rendered")
  return (
    <div>
      <h2>Header </h2>
    </div>
  )
}

export default React.memo(header)
