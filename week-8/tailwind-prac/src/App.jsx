import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  

  return (
    <div>
    
      <RevenueCard title={"Amount Pending"} amount={"92,132.20"}  orderCount={13}/>
    </div>
  )
}

export default App
