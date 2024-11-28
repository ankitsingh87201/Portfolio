import React from 'react'
import react from "../../public/reactjs.png"
import mongoDB from "../../public/mongodb.png"
import js from "../../public/js.png"
import node from "../../public/nodejs.png"
import paython from "../../public/paython.jpeg"

function Portfolio() {
        const cardItem=[
            {
                id:1,
                logo:react,
                name:"React JS"
            },
            {
                id:2,
                logo:mongoDB,
                name:"MongoDB"
            },
            {
                id:3,
                logo:js,
                name:"JavaScript"
            },
            {
                id:4,
                logo:node,
                name:"Node JS"
            },
            {
                id:5,
                logo:paython,
                name:"Python"
            },

        ]

        

  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                {cardItem.map(({id, logo, name}) => (
                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                        <div>
                            <div className='px-4 font-bold text-xl mb-2'>{name}
                                <p className='  text-gray-700'>Welcome to my Projects, this Projects really learn something.</p>
                            </div>
                            <div className='justify-around'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Source Code </button>
                            </div>
                        </div>
                    </div>
                ))

                }

            </div>

        </div>
      
    </div>
  )
}

export default Portfolio
