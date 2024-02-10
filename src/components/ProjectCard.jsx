"use client";


import { motion } from "framer-motion";



const ProjectCard = ({ image, title, text }) => {
 
  return (
    <div
     
      className="w-[450px] h-[280px] rounded-md cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
      
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div>
       
      </motion.div>
    </div>
  );
};

export default ProjectCard;
