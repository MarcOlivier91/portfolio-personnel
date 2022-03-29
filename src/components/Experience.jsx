import React from 'react';
import HTML_Logo from '../assets/5847f5bdcef1014c0b5e489c.png';
import CSS_Logo from '../assets/CSS3_logo.svg.png';
import React_Logo from '../assets/React-icon.svg.png';
import JS_Logo from '../assets/logo-javascript-logo.png';
import Tailwind_Logo from '../assets/Tailwind_CSS_Logo.svg.png';
import Laravel_Logo from '../assets/1200px-Laravel.svg.png'

const Experience = () => {
  return (
    <div name="exp" className='bg-slate-600 text-gray-100'>
        <div className='max-w-[1000px] max-auto p-4 flex flex-col jusify-center w-full h-full'>
            <div>
                <p className='text-5xl font-medium inline border-b-4 border-b-amber-300'>Mon expérience</p>
                <p className='text-2xl font-medium py-4'>Voici les technologies que j'ai pu utiliser jusqu'a maintenant ;</p>
            </div>

            <div name="Expériences" className='w-full grid grid-cols-2 sm:grid-cols-6 gap-3 text-center py-8 place-items-center'>
                <div class='technos'>
                    <img src={HTML_Logo} alt="HTML Logo" />
                    <p class='nomTechno'>HTML</p>
                </div>
                <div class='technos'>
                    <img src={CSS_Logo} alt="CSS Logo" />
                    <p class='nomTechno'>CSS</p>
                </div>
                <div class='technos'>
                    <img src={JS_Logo} alt="JS Logo" />
                    <p class='nomTechno'>JavaScript</p>
                </div>
                <div class='technos'>
                    <img src={Laravel_Logo} alt="JS Logo" />
                    <p class='nomTechno'>Laravel</p>
                </div>                
                <div class='technos'>
                    <img src={React_Logo} alt="CSS Logo" />
                    <p class='nomTechno'>React JS</p>
                </div>
                <div class='technos'>
                    <img src={Tailwind_Logo} alt="CSS Logo" />
                    <p class='nomTechno'>Tailwind CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience