import React from 'react'
import FutureWorld_Img from '../assets/Future_World_Screenshot.png'

const Projets = () => {
  return (
    <div name='projets' className='w-full md:h-screen text-white bg-slate-800'>
        <div class='pageProjets'>
          <div className='pb-8'>
            <p class='titrePage'>Mes Projets <span className='font-bold text-amber-300'>.</span></p>
            <p className='text-2xl font-medium py-4'>Vous pouvez voir ici tous mes projets récents ;</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
            <div>
              <p className='font-bold text-3xl text-center'> FUTURE WORLD</p>
              <p className='font-thin italic text-amber-100'>Partenaire : Christophe C.</p>
              <p className='font-thin italic text-amber-100'>Technos utilisées : PHP, Laravel, HTML, CSS, MySQL</p>
              <img className='inset-y-0 left-0 w-96' src={FutureWorld_Img} alt="Projet Future World" />
              <p className='text-center'>Un site d'e-commence centrée sur la ventes de produits informatiques !</p>
              <div className='mx-auto'>
                <a href="/">
                  <button class='boutonDemo'>Démonstration</button>
                </a>
                <a href="https://github.com/MarcOlivier91/Future_World_Final">
                  <button class='boutonSourceCode'>Code Source</button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Projets