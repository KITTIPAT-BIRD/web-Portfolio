import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

import bg from '../assets/bg2.png'


const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
        style={{ backgroundImage: `url(${bg})` }} id='Header'>
        <Navbar/>
        <motion.div 
        
        initial={{ opacity: 0 , y:100}}
        transition={{duration: 1.5}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-black'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Hello</h2>
        <p className='text-3xl sm:text-4xl md:text-[62px] mt-10'>I'm Kittipat Kamlue</p>
        <p className='text-1 sm:text-2xl md:text-[30px] '>I'm frontend developer</p>
        
        <div className='space-x-6 mt-6'>
            <a href="#About" className='border px-8 py-3 rounded '>About ME</a>
        </div>
        
        </motion.div>
        
        
    </div>
  )
}

export default Header