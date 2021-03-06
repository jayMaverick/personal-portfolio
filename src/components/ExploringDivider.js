import React from 'react'

const ExploringDivider = () => {
    return (
        <aside className='
          h-32 mt-20 mb-8 bg-polygonLgBg bg-contain bg-center bg-no-repeat
          desktop:h-72 desktop:pt-10 desktop:my-60 fade fadeOut
        '>
        
          <h3 className='
            relative text-mobile-lg-button font-tertiary text-center z-10
            desktop:text-hero-heading
          '>Technologies Currently Exploring</h3>
          <div className='flex justify-evenly mt-2'>
              <ul className='
                font-secondary text-center text-mobile-exploring-text ml-2 relative z-10
                desktop:text-pg-heading
                '>
                  <li className='
                    font-primary text-nav-menu-subheading desktop:text-desktop-exploring-cat
                    '>Front-End</li>
                  <li>Tailwind CSS</li>
                  <li>TypeScript</li>
                  <li>Next.js</li>
              </ul>
              <p className='
                font-secondary text-nav-menu-subheading py-4 relative z-10
                desktop:text-desktop-exploring-cat desktop:py-8
                '>{"<Express>"}</p>
              <ul className='
                font-secondary text-center text-mobile-exploring-text mr-2 relative z-10
                desktop:text-pg-heading
                '>
                  <li className='
                    font-primary text-nav-menu-subheading
                    desktop:text-desktop-exploring-cat
                    '>Back-End</li>
                  <li>MongoDB</li>
                  <li>Node.js</li>
                  <li>Apollo</li>
              </ul>
          </div>  
        </aside>
    )
}

export default ExploringDivider
