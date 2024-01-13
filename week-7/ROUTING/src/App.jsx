import {BrowserRouter,Routes,Route, useNavigate  } from 'react-router-dom'
import './App.css'
import { lazy } from 'react'
import { Suspense } from 'react'
const Dashboard= lazy(()=>import('./components/Dashboard'))
const Landing = lazy(()=>import ('./components/Landing'))

function App() {
  

  //Suspense API
  return (
    <div>
      
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate=useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard Page
        </button>
      </div>
    </div>
  );
}
export default App
