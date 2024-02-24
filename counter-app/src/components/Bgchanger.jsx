import React, { useState } from 'react'

const Bgchanger = () => {
    const [color, setColor] = useState("blue")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <h1 className='flex flex-wrap justify-center text-black' style={{
        fontFamily: "cursive", fontSize: 25, fontWeight: 800,  color: color === "black" ? "white" : "black"
      }}>{color.toUpperCase()}</h1>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl'>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "red", color: 'white'}} onClick={() => {setColor("red")}} >Red</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "green", color: 'white'}} onClick={() => {setColor("green")}} >Green</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "blue", color: 'white'}} onClick={() => {setColor("blue")}} >Blue</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "olive", color: 'white'}} onClick={() => {setColor("olive")}} >Olive</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "gray", color: 'white'}} onClick={() => {setColor("gray")}} >Gray</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "yellow", color: 'black'}} onClick={() => {setColor("yellow")}} >Yellow</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "pink", color: 'white'}} onClick={() => {setColor("pink")}} >Pink</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "purple", color: 'white'}} onClick={() => {setColor("purple")}} >Purple</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "white", color: 'black'}} onClick={() => {setColor("white")}} >White</button>
      <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "black", color: 'white'}} onClick={() => {setColor("black")}} >Black</button>
      </div>
    </div>
    </div>
  )
}

export default Bgchanger
