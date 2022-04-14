import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 py-4 bg-slate-600'>
        <ul className='text-white flex '>
          <li class='elementsNavigation'><a href="/"> Moi</a></li>
          <li class='elementsNavigation'><a href="/Experience">Mon expérience</a></li>
          <li class='elementsNavigation'>Mes projets</li>
          <li class='elementsNavigation'>Me contacter</li>
        </ul>
    </div>
  )
}


export default Navbar