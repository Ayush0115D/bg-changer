import { useState } from "react"

function App() {
  const [color,setColor]=useState("black");

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
  onClick={()=>setColor("DarkRed")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor:"DarkRed"}}>Red
          </button>
          <button
            onClick={()=>setColor("DarkBlue")}
          className="outline-none px-4 py-1 rounded-full  text-white  shadow-lg "
          style={{backgroundColor:"DarkBlue"}}>Blue
          </button>
          <button 
            onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full  text-white  shadow-lg "
          style={{backgroundColor:"green"}}>Green
          </button>
          <button
            onClick={()=>setColor("brown")}
          className="outline-none px-4 py-1 rounded-full  text-white  shadow-lg "
          style={{backgroundColor:"brown"}}>Brown
          </button>
          <button   onClick={()=>setColor("grey")}
          className="outline-none px-4 py-1 rounded-full  text-white  shadow-lg "
          style={{backgroundColor:"grey"}}>Grey
          </button>
           <button   onClick={()=>setColor("skyblue")}
          className="outline-none px-4 py-1 rounded-full  text-white  shadow-lg "
          style={{backgroundColor:"skyblue"}}>Skyblue
          </button>
        </div>
      </div>
     </div>
    
  )
}
export default App
