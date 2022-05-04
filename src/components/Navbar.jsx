import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 py-4 bg-slate-600 z-10'>
        <ul className='text-white flex '>
          <li class='elementsNavigation'>

            <Link to="home" smooth={true} offset={50} duration={600}>
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

          <li class='elementsNavigation'>

            <Link to="contact" smooth={true} duration={600}
              >Me Contacter
            </Link>
          </li>
        </ul>
    </div>
  )
}


export default Navbar