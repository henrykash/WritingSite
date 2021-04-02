import React from 'react'
import testimonyInfo from '../../public/testimonials.json'

 const Testimonials = () => {
    return (
        <div>
            {testimonyInfo.map((info) => {
                return(
                    <div className="grid grid-rows-4">
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