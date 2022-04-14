import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 py-4 bg-slate-600'>
        <ul className='text-white flex '>
          <li class='elementsNavigation'>

            <Link to="home" smooth={true} duration={600}>
              Moi
              </Link>
            </li>

          <li class='elementsNavigation'>

            <Link to="exp" smooth={true} duration={600}>
              Mon expérience
            </Link>

            </li>
          <li class='elementsNavigation'>
            
            <Link to="projets" smooth={true} duration={600}
              >Mes projets
            </Link>
          </li>

          <li class='elementsNavigation'>Me contacter</li>
        </ul>
    </div>
  )
}


export default Navbar