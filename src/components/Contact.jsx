import React from 'react'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import MyPDF from '../assets/CV_Marc-Olivier.pdf';

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen text-white bg-slate-800 pt-44 my-auto px-24'>
        <div>
        <p class='titrePage'>Me Contacter<span className='font-bold text-amber-300'>.</span></p>
        <p className='text-2xl font-medium py-4 mb-10'>Je reste à votre disposition. Si vous voulez me contacter pour échanger davantage,
        vous pouvez le faire via les coordonnées ci-dessous et consulter mon CV plus bas.</p>
        </div>

        <div name='Contacts' className='grid gap-8 justify-center'>
          <ul>
            <li>
              <div name='LINKEDIN'>
                <p className='text-2xl font-medium'>

                  <span className='inline-block mr-3'>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" 
                    backgroundColor="rgba(19,96,136,1)" iconSize="5" roundness="20%" url="https://www.linkedin.com/in/marcolivier-sossou/" size="40" />
                  </span>
                <a href="https://www.linkedin.com/in/marcolivier-sossou/" target="_blank" rel="noopener noreferrer">LINKEDIN </a>
              </p>
            </div>
          </li>

            <li>
              <div name='MAIL'>
                <p className='text-2xl font-medium'>

                  <span className='inline-block mr-3'>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" 
                    backgroundColor="rgba(19,96,136,1)" iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                  </span>
                  Par mail : smarc.mailpro@gmail.com
                </p>
              </div>
            </li>

            <li>
              <div name='TELEPHONE'>
                <p className='text-2xl font-medium items-center'>

                  <span className='inline-block mr-3'>
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="whatsapp" iconColor="rgba(255,255,255,1)" 
                    backgroundColor="rgba(19,96,136,1)" iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                  </span>
                  Par téléphone au : 06 81 29 67 39
                </p>
              </div>
            </li>
          </ul>

          <div name="CV" className='mx-auto'>
          <a href="../assets/CV_Marc-Olivier.pdf" download="Mon CV">
            <button class='boutonBleu'>
              Voir mon CV !
            </button> 
            </a>
          </div>

        </div>
    </div>
  )
}

export default Contact