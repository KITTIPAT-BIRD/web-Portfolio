import React from 'react'
import { motion } from 'framer-motion'
import i from '../assets/I.png'

const About = () => {
  return (
    <motion.div 
    
    initial={{opacity: 0, x:200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0 }}
    viewport={{once: true }}
    
    className='flex flex-col items-center justify-center w-full min-h-screen p-14 md:px-20 lg:px-32 overflow-hidden '
    id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 font-light'>Me</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'> I am Front-end Developer</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 mt-10'>
            <img src={i} className='w-full sm:w-150 md:gap-20 ' alt="" />
            <div className='flex flex-col items-center md:items-start md:gap-20'>
                <div className='flex flex-col gap-6  md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-2xl font-medium text-gray-800'>ข้อมูลส่วนตัว: </p>
                        <p className='text-xl text-gray-600 mt-3'>ชื่อ: กิตติพัฒน์ คำเหลือ</p>
                        <p className='text-xl text-gray-600 mt-3'>ชื่อเล่น: เบิร์ด</p>
                        <p className='text-xl text-gray-600 mt-3'>อายุ: 22</p>
                        <p className='text-xl text-gray-600 mt-3'>Email: kittipat.kamlea2002@gmail.com</p>
                        
                    </div>
                    <div>
                        <p className='text-2xl font-medium text-gray-800 mt-5'>การศึกษา</p>
                        <p className='text-xl text-gray-600 mt-3'>Bangkok University</p>
                        <p className='text-xl text-gray-600 mt-3'>ปริญญาตรีคณะเทคโนโลยีสารสนเทศและนวัตกรรม ภาควิชาวิทยาการคอมพิวเตอร์ </p>
                        <p className='text-xl text-gray-600 mt-3'>เกรดเฉลี่ย: 3.15</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About