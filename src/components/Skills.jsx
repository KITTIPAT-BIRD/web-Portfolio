import { motion } from 'framer-motion'
import React from 'react'

const Skills = () => {
  return (
    <motion.div 
      className="container mx-auto py-10 px-6 lg:px-32 w-full overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-gray-900">
        My <span className="underline  underline-offset-4 decoration-1 under font-light">Skills</span>
      </h1>

      {/* Skill Sections */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Soft Skills & Description */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            ผมชอบพัฒนาเว็บไซต์และชอบเรียนรู้ภาษาการเขียนโปรแกรมต่างๆ เช่น HTML, CSS, JavaScript และเฟรมเวิร์กอย่าง React 
            นอกจากนี้ ผมยังคอยติดตามเทคโนโลยีใหม่ๆ และพัฒนาทักษะของตัวเองอยู่เรื่อยๆ
          </p>

          <h2 className="text-2xl font-semibold text-gray-600 underline decoration-2">Soft Skills</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>ความคิดสร้างสรรค์</li>
            <li>การทำงานเป็นทีม</li>
            <li>การปรับตัวและความยืดหยุ่น</li>
            <li>การประณีประนอม</li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-600 underline decoration-2">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {["HTML", "CSS", "JavaScript", "PHP", "Python", "React"].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-3 rounded-lg text-center shadow-md font-medium text-gray-900"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.div>
  ))}
  </div>
</div>
</div>
</motion.div>
);
};
export default Skills