import { createContext, useState } from 'react';

export const appContext = createContext(null);

const ContextProvider = (props) => {
  // const phone = '467585958';
  // const name = 'Sankha'
  const [count, setCount] = useState(0)
  const sankha = [
    {
      name:'Rahul',
      age:23,
      no:1
    },
    {
      name:'Sanu',
      age:28,
      no:2
    },
    {
      name:'Suman',
      age:10,
      no:3
    },
    {
      name:'Kunal',
      age:19,
      no:4
    },
  ]

  return (
    <appContext.Provider value={{ count , setCount ,sankha}}>
      {props.children}
    </appContext.Provider>
  );
};

export default ContextProvider;