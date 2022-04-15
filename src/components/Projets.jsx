import React from 'react'
import FutureWorld_Img from '../assets/Future_World_Screenshot.png'
import DragonRush_Img from '../assets/DragonRush_Screenshot.png'
import FanTour_Img from '../assets/Fan Tour_Screenshot.png'
import MentorGoal_Img from '../assets/Mentor Goal_Screenshot.png'

const Projets = () => {
  return (
    <div name='projets' className='w-full md:h-screen text-white bg-slate-800 pt-44'>
        <div class='pageProjets'>
          <div className='pb-8'>
            <p class='titrePage'>Mes Projets <span className='font-bold text-amber-300'>.</span></p>
            <p className='text-2xl font-medium py-4 mb-10'>Vous pouvez voir ici tous mes projets récents ;</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

            <div name="FUTURE WORLD">
                <p className='font-medium text-3xl text-center'> FUTURE WORLD</p>
                <p className='font-thin italic text-amber-100'>Partenaire : Christophe L.</p>
                <p className='font-thin italic text-amber-100'>Technos utilisées : PHP, Laravel, HTML, CSS, MySQL</p>
              <img className='inset-y-0' src={FutureWorld_Img} alt="Projet Future World" />
              <p className='text-center'>Un site d'e-commence centrée sur la ventes de produits informatiques !</p>
              <div className='flex justify-center'>
                <a href="/">
                  <button class='boutonDemo'>Démonstration</button>
                </a>
                <a href="https://github.com/MarcOlivier91/Projet-Future-World" target="_blank" rel="noopener noreferrer">
                  <button class='boutonSourceCode'>Code Source</button>
                </a>
              </div>
              </div>

            <div name="DRAGON RUSH">
              <p className='font-medium text-3xl text-center'>DRAGON RUSH</p>
              <p className='font-thin italic text-amber-100'>Partenaire : Rio C.</p>
              <p className='font-thin italic text-amber-100'>Technos utilisées : HTML, CSS, JavaScript</p>
              <img className='inset-y-0' src={DragonRush_Img} alt="Projet Future World" />
              <p className='text-center'>Un mini-jeu assez simple type clicker game qui repose sur le calcul et la gestion de données.</p>
              <div className='flex justify-center'>
                <a href="https://marcolivier91.github.io/DragonRush-ClickerGame/" target="_blank" rel="noopener noreferrer">
                  <button class='boutonDemo'>Démonstration</button>
                </a>
                <a href="https://github.com/MarcOlivier91/DragonRush-ClickerGame" target="_blank" rel="noopener noreferrer">
                  <button class='boutonSourceCode'>Code Source</button>
                </a>
              </div>
              </div>

              <div name="FAN TOUR">
                <p className='font-medium text-3xl text-center'> FAN TOUR</p>
                <p className='font-thin italic text-amber-100'>Partenaire : Alexandre S.</p>
                <p className='font-thin italic text-amber-100'>Technos utilisées : HTML, CSS</p>
              <img className='inset-y-0' src={FanTour_Img} alt="Projet Future World" />
              <p className='text-center'>
                            Un site pour préparer un voyage au Japon et visiter les endroits populaires 
                            du fameux film d'animation 'Your Name'</p>
              <div className='flex justify-center'>
                <a href="/">
                  <button class='boutonDemo'>Démonstration</button>
                </a>
                <a href="https://github.com/MarcOlivier91/FanTour" target="_blank" rel="noopener noreferrer">
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