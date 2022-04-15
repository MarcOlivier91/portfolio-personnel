import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-800'>
        
        <div className='max-w-[1000px] mx-auto px-2 flex flex-col justify-center h-full mb-60'>
            <h1 className='font-medium text-white text-6xl'>Bonjour, je suis Marc-Oliver Sossou.</h1> 
            <p className='font-light text-amber-50 text-3xl'>
              J'ai 20 ans et je suis un étudiant en recherche 
              d'une alternance en tant que développeur web front-end.
            </p>
            <p className='font-light text-amber-50 text-2xl pb-20'>
              Bienvenue sur mon portfolio !
            </p>

        </div>
    </div>
  )
}

export default Home