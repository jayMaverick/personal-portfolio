import React from 'react'
import Header from './Header'
import DesktopProfilePic from '../assets/images/desktop/greyProfilePic3.jpeg';
import DesktopTriangleBg from '../assets/images/desktop/triangle.png';
import HeroButton from './buttons/HeroButton';
import MdButton from './buttons/MdButton';

const hero = (props) => {
   return (
        <section className=''>
            <Header />
            <div className='
               px-mobile-x-pg-padding desktop:w-10/12 desktop:flex desktop:mx-auto desktop:mt-40
               desktop:justify-end desktop:px-48 
              '>
            <h1 className='
              relative z-10 mt-12
              text-center text-purp font-secondary text-hero-heading 
              mobile:text-hero-lg-heading
              desktop:text-left desktop:w-desktop-heading-w desktop:text-desktop-hero-heading
              desktop:flex desktop:flex-wrap desktop:absolute desktop:left-52 desktop:pl-16 desktop:z-20 fade fadeOut
              '>Building Intuitive Web<br />Applications</h1>
            <img src={DesktopProfilePic} 
                 alt='full stack developer' 
                 className='
                   relative w-40 mx-auto z-10 my-12 
                   desktop:my-0 desktop:mx-0 rounded-cards
                   desktop:w-desktop-w fade fadeOut shadow-lg
                  '></img>
            <div className='w-full absolute left-0 top-mobile-triangle-position fade fadeOut'>
            <img src={DesktopTriangleBg} 
                 alt='background triangle' 
                 className='
                   w-72 mx-auto 
                   mobile:left-10 mobile:w-80 desktop:w-triangle-desktop-w
                   desktop:absolute desktop:-top-10 desktop:left-1/4 fade fadeOut
                '></img>
                </div>
            {/* desktop images */}
            </div>
            <MdButton  buttonClass='
                invisible absolute -top-10
                bg-baby-blue text-pg-heading 
                text-center rounded-button w-mobile-triangle-position 
                font-tertiary text-dark-black desktop:visible desktop:left-52 desktop:ml-16
                py-1 desktop:top-mobile-lg-bg-square-top-position fade fadeOut
              ' 
              buttonText='View My Work'
              url='#portfolio' />
            <HeroButton />
        </section>
    )
}

export default hero
