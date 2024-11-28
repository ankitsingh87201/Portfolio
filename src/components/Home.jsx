import React from 'react'
import pic from "../../public/my3.jpg"

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20' >
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>WelCome To My PORTFOLIO.</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, I'm a</h1>
            {/* <span className='text-red-700 font-bold'>Developer</span> */}
            <ReactTyped
          className='text-red-700 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className='text-sm md:text-md  text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed aperiam doloremque distinctio aspernatur aliquid, molestiae minus quaerat rem dolores exercitationem eaque fugit vitae obcaecati voluptatibus tenetur libero necessitatibus adipisci provident esse iusto commodi! Cumque corrupti, beatae eius maiores alias quidem, cupiditate dignissimos ab voluptatum at iusto, nesciunt quae sed?</p>
        <br />
            {/*social media icons */}
            <div className='flex flex-col items-center
             md:flex-row justify-between space-y-6 md:space-y-0'>
            <div className='space-y-2'>
                <h1 className='font-bold'>Available On</h1>
                <ul className='flex space-x-5'>
                    <li> <a href="https://www.facebook.com/" target="_blank"
                    >
                        <FaFacebook className='text-2xl cursor-pointer'/></a></li>
                        
                    <li>
                    <a href="https://www.linkedin.com/" target="_blank"
                    ><FaLinkedin className='text-2xl cursor-pointer'/></a></li>
                    <li>
                    <a href="https://www.youtube.com/" target="_blank"
                    ><FaYoutube className='text-2xl cursor-pointer'/></a></li>
                    <li>
                    <a href="https://www.instagram.com/" target="_blank"
                    ><FaSquareInstagram className='text-2xl cursor-pointer'/></a></li>
                </ul>
               
                
                
                


            </div>
            <div className='space-y-2'>
                <h1 className='font-bold'>Currently working on</h1>
                <div className='flex space-x-5'>

                <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <FaNode className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>

                </div>
            </div>

            </div>
           
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
        <img src={pic}  className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
        </div>
        </div>
    </div>
    <hr />
 
    </>
  );
}

export default Home
