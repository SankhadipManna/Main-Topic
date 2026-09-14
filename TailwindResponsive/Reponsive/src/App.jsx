import React from 'react'
import Navbar from './compontent/nav.jsx'
import Main from './compontent/Main.jsx'
import Featuer from './compontent/featuer.jsx'
import Item from './compontent/Item.jsx'
import Contact from './compontent/Contact.jsx'
import Fotter from './compontent/Fotter.jsx'
import Slidebar from './compontent/Slidebar.jsx'
import SearchBar from './compontent/SearchBar.jsx'
const App = () => {
  return (
    <div >
      <Navbar />
      <Main />
      <Featuer />
      <Slidebar />
      <Item />
      <Contact />
      <SearchBar />
      <Fotter />
    </div>
  )
}

export default App
