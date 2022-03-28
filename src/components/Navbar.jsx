import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 py-4 bg-slate-800'>
        <ul className='text-white flex '>
          <li className='hover:text-cyan-200 duration-200'>Moi</li>
          <li className='hover:text-cyan-200 duration-200'>Mon expérience</li>
          <li className='hover:text-cyan-200 duration-200'>Mes projets</li>
          <li className='hover:text-cyan-200 duration-200'>Me contacter</li>
        </ul>
    </div>
  )
}


export default Navbar