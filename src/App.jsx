import { useState } from "react"


function App() {
  const [color,setColor]=useState("skyblueq");

  return (
  
    <div className="w-full h-screen"
style={{backgroundColor:color}}  
     >
      <div className="fixed flex flex-wrap justify-center  bottom-12
      inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
        rounded-3xl">

          <button 
  //  onClick={setColor("red")} //parameter pass krna pdega bcoz syntax he esa he..func ko bs pass krke kaam na chlega
  // toh better option callback he lelo
  onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor:"red"}}>Red
          </button>
          <button
            onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1 rounded-full  text-white  shadow-lg "
          style={{backgroundColor:"blue"}}>blue
          </button>
          <button 
            onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full  text-white  shadow-lg "
          style={{backgroundColor:"green"}}>green
          </button>
          <button
            onClick={()=>setColor("brown")}
          className="outline-none px-4 py-1 rounded-full  text-white  shadow-lg "
          style={{backgroundColor:"brown"}}>brown
          </button>
          <button   onClick={()=>setColor("grey")}
          className="outline-none px-4 py-1 rounded-full  text-white  shadow-lg "
          style={{backgroundColor:"grey"}}>grey
          </button>
        </div>
      </div>
     </div>
    
  )
}
export default App
