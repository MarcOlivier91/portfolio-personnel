import React from 'react';
import HTML_Logo from '../assets/5847f5bdcef1014c0b5e489c.png';
import CSS_Logo from '../assets/CSS3_logo.svg.png';
import React_Logo from '../assets/React-icon.svg.png';
import JS_Logo from '../assets/logo-javascript-logo.png';
import Tailwind_Logo from '../assets/Tailwind_CSS_Logo.svg.png';
import Laravel_Logo from '../assets/1200px-Laravel.svg.png';
import Docker_Logo from '../assets/Moby-logo.webp';
import Python_Logo from '../assets/python logo.png'

const Experience = () => {
  return (
    <div name="exp" className='bg-slate-600 text-gray-100'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
            <div>
                <p className='text-5xl font-medium inline border-b-4 border-b-amber-300'>Mon expérience</p>
                <p className='text-2xl font-medium py-4'>Voici les technologies que j'ai pu utiliser jusqu'a maintenant ;</p>
            </div>

            <div name="Expériences" class='experiences'>
                <div class='technos'>
                    <img className='w-20 mx-auto' src={HTML_Logo} alt="HTML Logo" />
                    <p class='nomTechno'>HTML</p>
                </div>
                <div class='technos'>
                    <img className='w-20 mx-auto' src={CSS_Logo} alt="CSS Logo" />
                    <p class='nomTechno'>CSS</p>
                </div>
                <div class='technos'>
                    <img className='w-20 mx-auto' src={JS_Logo} alt="JS Logo" />
                    <p class='nomTechno'>JavaScript</p>
                </div>
                <div class='technos'>
                    <img className='w-20 mx-auto' src={Python_Logo} alt="Python Logo" />
                    <p class='nomTechno'>Python</p>
                </div>
                <div class='technos'>
                    <img className='w-20 mx-auto' src={Laravel_Logo} alt="Laravel Logo" />
                    <p class='nomTechno'>Laravel</p>
                </div>                
                <div class='technos'>
                    <img className='w-20 mx-auto' src={React_Logo} alt="React JS Logo" />
                    <p class='nomTechno'>React JS</p>
                </div>
                <div class='technos'>
                    <img className='w-20 mx-auto' src={Tailwind_Logo} alt="Tailwind CSS Logo" />
                    <p class='nomTechno'>Tailwind CSS</p>
                </div>
                <div class='technos'>
                    <img className='w-20 mx-auto' src={Docker_Logo} alt="Docker Logo" />
                    <p class='nomTechno'>Docker</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience