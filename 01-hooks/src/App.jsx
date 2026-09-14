// import React from 'react'
// import { useState } from 'react'
// export const App = () => {
//  const [count, setCount] = useState(0)

//  const increase = () =>{
//   setCount(car=>car + 1)
//   setCount(car=>car + 1)
//   setCount(car=>car + 1)
//   setCount(car=>car + 1)
//  }
// console.log(count)
//   return (
//     <div>
//      <h1>Count : {count}</h1>
//      <button onClick={increase}>Increase</button>
//     </div>
//   )
// }
// export default App
// import React from 'react'
// import {useEffect, useState} from 'react'

// export const App = () => {
//   const [count,setCount] = useState(0)
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount( count => count+2)
//     },2000)  //
//   },[count])
//   return (
//     <div>
//       <h1>i've rendered {count} times!</h1>
//     </div>
//   )
// }
// export default App
// import React,{useEffect,useRef} from 'react'

// export const App = () => {
// const inputEle = useRef()
//   const btnCLICKED = ()=>{
//     console.log(inputEle.current)
//     inputEle.current.style.background = 'blue';
//   }
//   return (
//     <div>
//      <input type="text" name="" ref={inputEle} id="" />
//      <button onClick={btnCLICKED}>Click Me</button>
//     </div>
//   )
// }
// export default App



// import React,{useState,useMemo} from 'react'

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [count, setCount] = useState(0);

//   function cubeNum(num) {
  //     console.log('Calculation is done');
  //     return Math.pow(num, 3);
  //   }
  
  //   const cube = useMemo(()=> cubeNum(number),[number]);
  
  //   return (
    //     <div>
    //       <input
    //         type="number"
    //         value={number}
    //         onChange={(e) => setNumber(Number(e.target.value))}
    //       />
    //       <h1>Cub of the number : {cube}</h1>
    //       <button onClick={() => setCount(count + 1)}>Counter++</button>
    //       <h1>Counter: {count}</h1>
    //     </div>
    //   );
    // }
    
    // export default App
    
    
//     import React,{useState,useCallback} from 'react'
//     import Header from './comonents/header'
//     const App = () => {
//     const [count, setCount] = useState(0);
//     const newf = useCallback(()=>{

//     },[])
//   return (
//     <div>
//       <Header newf={newf} />
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(prev=>prev+1)}>Increase</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Profile from './comonents/profile.jsx'
// import Footer from './comonents/fotter.jsx'
// const App = () => {
//   return (
//     <div>
//       <Profile />
//       <Footer />
//     </div>
//   )
// }

// export default App
import React from 'react'
import Context from './comonents/increes/context.jsx'
const App = () => {
  return (
    <div>
      <Context />
    </div>
  )
}

export default App



