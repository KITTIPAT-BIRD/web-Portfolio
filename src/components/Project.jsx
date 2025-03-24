import React from 'react'
import { motion } from 'framer-motion'
import pj1 from '../assets/pj1.png'
import pj2 from '../assets/pj2.png'
import pj3 from '../assets/pj3.png'
import pj4 from '../assets/pj4.png'
import pj5 from '../assets/pj5.png'


const Project = () => {
  return (
    <motion.div
    
    initial={{ opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{ opacity: 1, x:0 }}
    viewport={{ once: true }}
    
    className=' mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hiddien ' 
    id='Projects'>
    
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projectssp <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-600 mb-1 max-w-80 mx-auto'>ผลงานจากการพัฒนาเว็บไซต์</p>
             
        <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'>
            
             
             <div className='flex flex-wrap justify-center gap-8'>
                <div className='max-w-[600px] border border-gray-200 border-opacity-50 chadow-lg rounded px-8 py-12 text-center mt-5 '>
                    <img src={pj1} alt="" />
                    <p className='text-xl text-gray-600 mt-5 '>ผลงานการผึกเขียนเว็บไซต์ Real Estate Website ภาษาที่ใช้ html css js เครื่องมือที่ใช้ React และ Tailwind CSS</p>
                </div>
                
                <div className='max-w-[600px] border border-gray-200 border-opacity-50 chadow-lg rounded px-8 py-12 text-center mt-5'>
                    <img src={pj2} alt="" />
                    <p className='text-xl text-gray-600 mt-5'>ผลงานการผึกเขียนเว็บไซต์ จองที่พัก chill chill Hotel ที่มีระบบ crud  ภาษาที่ใช้ html css js python เครื่องมือที่ใช้ Angular backend ใช้ nodejs datadase ใช้ mysql</p>
                </div>
                
                <div className='max-w-[600px] border border-gray-200 border-opacity-50 chadow-lg rounded px-8 py-12 text-center mt-5'>
                    <img src={pj3} alt="" />
                    <p className='text-xl text-gray-600 mt-5'>ผลงานการผึกเขียนเว็บไซต์ DESIGN SLIDER ANIMAL ภาษาที่ใช้ html css js </p>
                </div>
                
                <div className='max-w-[600px] border border-gray-200 border-opacity-50 chadow-lg rounded px-8 py-12 text-center mt-5'>
                    <img src={pj4} alt="" />
                    <p className='text-xl text-gray-600 mt-5'>ผลงานการผึกเขียนเว็บไซต์ โชว์น้ำผลไม้ ภาษาที่ใช้ html css js </p>
                </div>
                
                <div className='max-w-[600px] border border-gray-200 border-opacity-50 chadow-lg rounded px-8 py-12 text-center mt-5'>
                    <img src={pj5} alt="" />
                    <p className='text-xl text-gray-600 mt-5'>ผลงานการผึกเขียนเว็บไซต์ Dashboard ภาษาที่ใช้ html css js เครื่องมือที่ใช้ React และ Tailwind CSS</p>
                </div>
            </div>

        
        </div>
    </motion.div>
  )
}

export default Project