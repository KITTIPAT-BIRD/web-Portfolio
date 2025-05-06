import React from 'react'
import { motion } from 'framer-motion'
import cert1 from '../assets/cert1.png'
import cert2 from '../assets/cert2.png'

const Certificate = () => {
  return (
    <motion.div
    
    initial={{ opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{ opacity: 1, x:0 }}
    viewport={{ once: true }}
    
    className=' mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hiddien ' 
    id='Certificate'>
    
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Certificate </h1>
        
             
        <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'>
            
             
             <div className='flex flex-wrap justify-center gap-8'>
                <div className='max-w-[600px] border border-gray-200 border-opacity-50 chadow-lg rounded px-8 py-12 text-center mt-5 '>
                    <img src={cert1} alt="" />
                    <p className='text-xl text-gray-800 mt-5'>ใบ Certificate รับรองว่า ได้ผ่านการเรียนออนไลน์ตามเกณฑ์การวัดผลในรายวิชา
                    ทักษะคอมพิวเตอร์และเทคโนโลยีสารสนเทศและการสื่อสาร (45 ชั่วโมงการเรียนรู้)</p>
                </div>
                
                <div className='max-w-[600px] border border-gray-200 border-opacity-50 chadow-lg rounded px-8 py-12 text-center mt-5'>
                    <img src={cert2} alt="" />
                    <p className='text-xl text-gray-800 mt-5 '>ใบ Certificate รับรองว่าได้ผ่านการเรียนออนไลน์ตามเกณฑ์การวัดผลในรายวิชา
                    โปรแกรม Python สำหรับการคำนวณทางวิทยาศาสตร์ (8 ชั่วโมงการเรียนรู้)</p>
                </div>
                
            </div>

        
        </div>
    </motion.div>
  )
}

export default Certificate