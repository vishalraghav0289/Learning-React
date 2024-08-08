import { useState } from 'react'



function App() {
  const [color, setColor] = useState("yellow")

  return (
    <>
     <div className ="w-full h-screen duration-200"
     style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap jusitify-centre bottom-12  insert-x-0 px-2">
        <div 
        className='flex  flex-wrap justify-centre gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")}
          className='outline-none px-4  py-1 rounded-full  text-white shadow-lg'
          style={{backgroundColor: "red"}}>RED</button>
           <button onClick={()=>setColor("gray")}
           className='outline-none px-4  py-1 rounded-full  text-white shadow-lg'
          style={{backgroundColor: "gray"}}>GRAY</button>
           <button onClick={()=>setColor("pink")}
           className='outline-none px-4  py-1 rounded-full  text-white shadow-lg'
          style={{backgroundColor: "pink"}}>PINK</button>
           <button  onClick={()=>setColor("orange")} 
           className='outline-none px-4  py-1 rounded-full  text-white shadow-lg'
          style={{backgroundColor: "orange"}}>ORANGE</button>
           <button onClick={()=>setColor("blue")}
           className='outline-none px-4  py-1 rounded-full  text-white shadow-lg'
          style={{backgroundColor: "blue"}}>BLUE</button>
        </div></div>
     </div>
    </>
  )
}

export default App
