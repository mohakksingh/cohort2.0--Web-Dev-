import { useMemo, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const[counter,setCounter]=useState(0);

  return<>
    <button onClick={()=>{
      setCounter(counter+1)
    }}>Counter({counter})</button>
  </>
}



export default App;