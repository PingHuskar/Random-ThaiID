import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import gsap from 'gsap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [id, setId] = useState(localStorage.getItem(`id`) || 'XXXXXXXXXXXXX')
  function getRndInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
  }
  function GenID() {
    const gen13: number = Math.floor(Math.random() * (8 - 1 + 1) ) + 1
    const gen12: number = getRndInteger(0, 9)
    const gen11: number = getRndInteger(0, 9)
    const gen10: number = getRndInteger(0, 9)
    const gen9: number = getRndInteger(0, 9)
    const gen8: number = getRndInteger(0, 9)
    const gen7: number = getRndInteger(0, 9)
    const gen6: number = getRndInteger(0, 9)
    const gen5: number = getRndInteger(0, 9)
    const gen4: number = getRndInteger(0, 9)
    const gen3: number = getRndInteger(0, 9)
    const gen2: number = getRndInteger(0, 9)
    const sum1: number = gen13 * 13
                       + gen12 * 12
                       + gen11 * 11
                       + gen10 * 10
                       + gen9 * 9
                       + gen8 * 8
                       + gen7 * 7
                       + gen6 * 6
                       + gen5 * 5
                       + gen4 * 4
                       + gen3 * 3
                       + gen2 * 2
    const mod11sum1: number = sum1 % 11
    const gen1: number = (11 - mod11sum1) % 10
    localStorage.setItem(`id`, `${gen13}${gen12}${gen11}${gen10}${gen9}${gen8}${gen7}${gen6}${gen5}${gen4}${gen3}${gen2}${gen1}`)
    toast(`Gen Complete`)
    setId(localStorage.getItem(`id`)?.toString() || '')
  }
  useEffect(() => {
    gsap.fromTo(`.output`,{
      x:0,
      fontSize: 20,
      letterSpacing: -15,
    },{
      x:0,
      fontSize: 30,
      letterSpacing: 2,
      scale: 1,
      duration: 1
    })
  },[id])
  return (
    <div className="App">
      <h1>Random ThaiID</h1>
      <Link to={`https://github.com/PingHuskar/Random-ThaiID/README.md`} target={`_blank`}>README</Link>
      <div className="output" title='Click To Copy' onClick={(e) => {
        e.preventDefault()
        navigator.clipboard.writeText(e.currentTarget.innerText)
        toast(`Copied: ${e.currentTarget.innerText}`)
      }}>
        {id}
      </div>
      <button onClick={() => {
        GenID()
      }}>Random</button>
      <ToastContainer />
    </div>
  )
}

export default App
