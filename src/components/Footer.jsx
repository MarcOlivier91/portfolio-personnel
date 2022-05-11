import React from 'react'

const Footer = () => {
  return (
    <div name="footer" className='bg-black w-full h-16 '>
        <div className='items-center mx-auto'>
            <div name="texte_footer" className='font-light text-white text-center text-2xl'>
                <p>
                    Ce site a été réalisé avec React JS et Tailwind CSS.  
                        <span className='ml-2 hover:text-slate-400 duration-200'> 
                            <a href='https://github.com/MarcOlivier91/portfolio-personnel/tree/master' 
                            target="_blank" rel="noopener noreferrer">
                                Voir le code source.
                            </a> 
                        </span>
                    </p>
            </div>
        </div>
    </div>
  )
}

export default Footer