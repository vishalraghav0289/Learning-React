import { useCallback, useState,useEffect,useRef } from 'react'

import './App.css'

function App() {
  //Here we only determine that our password has 6 char usenumber and character is false

  const [length, setLength] = useState(8)
  const [isNumber, setisNumber] = useState(false)
  const [isChar, setisChar] = useState(false)
  const[password,setpassword]=useState("")
  const passwordRef= useRef(null)
    
  const passwordGenrator=useCallback(()=>{
    let currentPassword=""
    let str="ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwxyz"
    if(isNumber) str+='123456789'
    if(isChar)str+='!@#$%%&*(){}'

    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      currentPassword +=str.charAt(char);
    }
    setpassword(currentPassword);
    
  },[length,isNumber,isChar,setpassword])

  const copyPassword= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenrator()},[isNumber,length,isChar,setpassword,passwordGenrator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1>password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
        value={password}
        className='outline-none w-full p-1 px-3'
        placeholder='password'
        ref={passwordRef}
        readOnly
        />
        <button onClick={copyPassword}
        className=' cursor-hover outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy</button>
       </div>
       <div className='flex text-sm gap-x_2'>
         <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(parseInt(e.target.value))}}
          />
          <label>Length:{length}</label>
         </div>
         <div className='flex item-centre gap-x-1'>
          <input type='checkbox'
          defaultChecked={isNumber}
          id='numberInput'
          onChange={()=>{setisNumber((prev)=>!prev);}}
          />
          <label>Number</label>

          </div>
          <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={isChar} 
          id='charInput'
          onChange={() => setisChar(prev => !prev)}
          />
          <label>Characters</label>
         
         </div>
      </div>

    </div>
     
    </>
  )
}

export default App
