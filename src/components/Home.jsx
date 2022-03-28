import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-600'>
        
        <div className='max-w-[1000px] mx-auto px-2 flex flex-col justify-center h-full'>
            <h1 className='font-medium text-white text-5xl'>Bonjour, je suis Marc-Oliver Sossou.</h1> 
            <p className='font-light text-amber-50 text-2xl'>
              J'ai 20 et je suis un étudiant en recherche 
              d'une alternance en tant que développeur web front-end.
            </p>
            <p className='font-light text-amber-50 text-2xl'>
              Bienvenue sur mon portfolio !
            </p>
        </div>
    </div>
  )
}

export default Home