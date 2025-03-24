import { motion } from 'framer-motion'
import React from 'react'

const Contact = () => {
  return (
    <motion.div
    
    initial={{ opacity: 0 , y:100}}
    transition={{duration: 1.5}}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    id='Contact'
    >  
    <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact</h1>
    <div className='container text-gray-500 mx-auto py-10 px-6 lg:px-32 w-full overflow-hidden'>
        <p className='text-xl text-gray-700 mt-2'>Name: Kittipat kamlue</p>
        <p className='text-xl text-gray-700 mt-2'>Email: kittipat.kamlea2002@bumail.net</p>
        <p className='text-xl text-gray-700 mt-2'>Phone: 0933916717</p>
        <p className='text-xl text-gray-700 mt-2'>Linkedin: https://www.linkedin.com/in/kittipat-kamlue-104760327/</p>
        <p className='text-xl text-gray-700 mt-2'>Github: KITTIPAT-BIRD</p>
    </div>
    </motion.div>
  )
}

export default Contact