import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './Components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="GETOUT" className="min-h-screen w-full bg-neutral-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
    <div id="pleaseSTOP" className='grid grid-cols-1 grid-rows-3 sm:grid-rows-3 sm:grid-cols-1 gap-2 place-items-center'>
       <h1 className='font-inter text-white text-4xl sm:text-5xl md:text-[4.5rem] mt-64 md:mt-[50%] lg:mt-48 animate__animated animate__fadeInUp'>Is It Worth Going To?</h1>
       <Search></Search>
       <h6 className='font-inter text-slate-400 text-xs md:text-md mb-64 md:mb-64 animate__animated animate__fadeIn'>Made by Sahil Talwar</h6>
    </div>
    </div>
  )
}

export default App
