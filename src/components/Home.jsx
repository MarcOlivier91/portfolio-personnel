import React from 'react'
import Photo from '../assets/Photo_Marc-Olivier.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-800'>
        
        <div className='max-w-[1000px] mx-auto px-2 flex flex-col justify-center h-full'>
            <h1 className='font-medium text-white text-6xl'>Bonjour, je suis Marc-Oliver Sossou.
              <span><img className='w-40 mx-auto rounded-full shadow-sm' src={Photo} alt="Visage de Marc-Olivier" /></span>
            </h1> 
            <p className='font-light text-amber-50 text-3xl test-justify'>
              J'ai 20 ans et je suis un étudiant à l'école ETNA.
              Afin de poursuivre mes études et de monter en compétence,
              je suis à la recherche d'une alternance qui débute en Juillet 2022 pour une 
              durée de 7 mois.

            </p>
            <p className='font-light text-amber-100 text-2xl'>
              Bienvenue sur mon portfolio ! Ici, vous trouvez quelques projets
              que j'ai pu réaliser à l'école ou bien pendant mon temps libre.
              
            </p>
            
        </div>
    </div>
  )
}

export default Home