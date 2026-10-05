import { StrictMode, useEffect, useRef, useState } from 'react';
import './App.css'
import Navbar from './Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
  // Lifecycle hooks
  let [a, setA] = useState("JavaScript");
  //  to print use a , to update a value use setA
  let re = useRef(null)
  
  useEffect(()=>{
    console.log("this is useEffect")

    if (re.current){
      re.current.placeholder = 'text'
    }
  },[] // [a] idhula changes irudhan once idhu call agum
  )

  function updateA(){
    setA("Java");
    console.log(a);
  }
  const arr=["Loshini","Mirnali","Deepak","Abdul kalam"]

  return (
    <>
    <Navbar b={a}/>
       <p>{a}</p>
       {arr.map((e)=>(
        <>
        <p>{e}</p>
        </>
       ))}
       <input type='text' onChange={(e)=>setA(e.target.value)}/>
       <button onClick={updateA}>update</button>
    </>
  )
}

export default App
// rfc
// npm create vite@latest --template -react
// npm run dev
// props- compounent to another component
// client side rendering and server side
// lifecycle hooks
// useState used to manage the var useState
// useEffect-page load aagurapo automatic ah call aagum, var value change aagurapo useeffect ulla iruka code call aagum
// useRef- re
// useContext instant of props, if we have multiple components to share across child
// Routing to install (npm i react-router-dom)
// useParams- share components using URLs
