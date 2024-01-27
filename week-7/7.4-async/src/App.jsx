import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState,useRecoilValue} from 'recoil'
import { notifications, totalNotificationCountSelector } from './atoms'
import axios from "axios";

function App() {
  

  return (
    <RecoilRoot>
      <MainApp/>            
    </RecoilRoot>
  )
}

function MainApp(){
  const [networkCount,setNetworkCount]=useRecoilState(notifications);
  const totalNotificationCounter= useRecoilValue(totalNotificationCountSelector);
  return(
    <>
      <button>Home</button>      
      <button>My network({networkCount.network>=100?"99+":networkCount.network})</button>      
      <button>Jobs({networkCount.jobs})</button>      
      <button>Messages({networkCount.messaging})</button>      
      <button>Notifications({networkCount.notifications})</button>   
      <button>Me({totalNotificationCounter})
      </button>   
    </>
  )
}

export default App
