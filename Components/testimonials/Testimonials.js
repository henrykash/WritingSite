import React from 'react'
import testimonyInfo from '../../public/testimonials.json'

 const Testimonials = () => {
    return (
        <div className="bg-gradient-to-r from-white via-red-700 to-white">
            <p className='font-extrabold text-2xl'>See what guys are saying about our services...</p>
            <hr />
            {testimonyInfo.map((info) => {
                return(
                    <div className="grid grid-cols-3" id="testimonials">
                    <div>
                        <h2 className='font-extrabold text-3xl'>{info.name1}</h2>
                        <p className='text-xl'>{info.msg1}</p>
                    </div>
                    <div>
                        <h2 className='font-extrabold text-3xl'>{info.name2}</h2>
                        <p className='text-xl'>{info.msg2}</p>
                    </div>
                    <div>
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