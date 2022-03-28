import React from 'react';
import HTML_Logo from '../assets/5847f5bdcef1014c0b5e489c.png';
import CSS_Logo from '../assets/CSS3_logo.svg.png';
import React_Logo from '../assets/React-icon.svg.png';
import JS_Logo from '../assets/logo-javascript-logo.png';
import Tailwind_Logo from '../assets/Tailwind_CSS_Logo.svg.png'

const Experience = () => {
  return (
    <div name="exp" className='bg-slate-600'>
        <div className='max-w-[1000px] max-auto p-4 flex flex-col jusify-center w-full h-full'>
            <div>
                <p className='text-5xl font-medium inline text-gray-200 py-3'>Mon expérience</p>
                <p>Voici les technologies que j'ai pu utiliser jusqu'a maintenant ;</p>
            </div>

            <div name="Expériences">
                <div>
                    <img className='w-20 mx-auto' src={HTML_Logo} alt="HTML Logo" />
                    <p>HTML</p>
                </div>
                <div>
                    <img src={CSS_Logo} alt="CSS Logo" />
                    <p>CSS</p>
                </div>
                <div>
                    <img src={JS_Logo} alt="JS Logo" />
                    <p>JavaScript</p>
                </div>                
                <div>
                    <img src={React_Logo} alt="CSS Logo" />
                    <p>React JS</p>
                </div>
                <div>
                    <img src={Tailwind_Logo} alt="CSS Logo" />
                    <p>Tailwind CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience