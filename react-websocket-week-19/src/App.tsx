import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null| WebSocket>(null)
  const [latestMessage,setLatestMessages]=useState([])
  const [message,setSendMessage]=useState("")

  useEffect(()=>{
    const socket=new WebSocket('ws://localhost:8080')
    socket.onopen=()=>{
      console.log('Connected');
      setSocket(socket)
    }
    socket.onmessage=(message)=>{
      console.log('Received message:',message.data);
      setLatestMessages(message.data)
    }

    return ()=>{
      socket.close()
    }
  },[])



  if(!socket){
    return <div>
     Connecting to server Loading...
    </div>
  }

  return (
   <>
   <input onChange={(e)=>{
    setSendMessage(e.target.value)
   }}></input>
   <button onClick={()=>{
    socket.send(message)
   }}>Send</button>
    {latestMessage}
   </>
  )
}

export default App
