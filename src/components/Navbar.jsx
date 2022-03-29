import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 py-4 bg-slate-800'>
        <ul className='text-white flex '>
          <li class='elementsNavigation'>Moi</li>
          <li class='elementsNavigation'>Mon expérience</li>
          <li class='elementsNavigation'>Mes projets</li>
          <li class='elementsNavigation'>Me contacter</li>
        </ul>
    </div>
  )
}


export default Navbar