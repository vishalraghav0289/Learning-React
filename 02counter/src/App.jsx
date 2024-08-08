import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const addValue=()=>{
    if(count<20){
    setCount(count+1);
    }
  }
    
  const removeValue=()=>{
    if(count>0){
    
    setCount(count-1);
    }}

  return (
    <>
    <h1>currentCountis {count}</h1>

    <button
    onClick={addValue}>increase the value</button>

    <br/>

    <button
    onClick={removeValue}>decrease the Value</button>

    </>
  )
}

export default App
