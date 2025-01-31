import React from 'react'




import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarsoel/HomeSectionCarsoel'
import { mens_kurta } from '../../../Data/mens_kurta'

export const HomePage = () => {
  return (
    <div>
        <div>
          <MainCrosel/>
        </div>
        
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Kurtas"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>                                    
        </div>        
    </div>
  )
}
