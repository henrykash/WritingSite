import React from 'react'
import testimonyInfo from '../../public/testimonials.json'
import ReactStars from "react-rating-stars-component";

 const Testimonials = () => {
    const entityOne = {
        size: 30,
        value: 25,
        edit: false
      };
      const entityTwo = {
        size: 30,
        value: 25,
        edit: false
      };
      const entityThree = {
        size: 30,
        value: 25,
        edit: false
      };
    return (
        <div className="bg-gradient-to-r from-white via-red-700 to-white">
            <p className='font-extrabold text-2xl'>See what guys are saying about our services...</p>
            <hr />
            {testimonyInfo.map((info) => {
                return(
                    <div className="grid grid-cols-3">
                        
                        <div>
                            <ReactStars {...entityOne} />
                            <h2 className='font-extrabold text-3xl'>{info.name1}</h2>
                            <p className='text-xl'>{info.msg1}</p>
                        </div>
                        <div>
                            <ReactStars {...entityTwo} />
                            <h2 className='font-extrabold text-3xl'>{info.name2}</h2>
                            <p className='text-xl'>{info.msg2}</p>
                        </div>
                        <div>
                            <ReactStars {...entityThree} />
                            <h2 className='font-extrabold text-3xl'>{info.name3}</h2>
                            <p className='text-xl'>{info.msg3}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Testimonials