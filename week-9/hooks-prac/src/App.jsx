import { useEffect, useState } from 'react'
import axios from 'axios'

function useIsOnline(){
  const [isOnline,setIsOnline]=useState(window.navigator.onLine);

  useEffect(()=>{
    window.addEventListener("online",()=>{
      setIsOnline(true);
    })

    window.addEventListener("offline",()=>{
      setIsOnline(false);
    })
  })

  return isOnline;
}

function App() {
  const isOnline=useIsOnline();

  if(isOnline){
    return "You are online yay!"
  }

  return "You are offline"
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App