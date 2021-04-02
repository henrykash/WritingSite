import React from 'react'
import AboutInfo from '../../public/about.json'

 const AboutUs = () => {
  return (
    <div>
      {AboutInfo.map((info) => {
        return(
          <div className=''>
            <h2 className='bg-red-700 table-cell font-extrabold text-3xl'>About {info.title}</h2>
            <p className='text-xl'>{info.about}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AboutUs
