import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gp from '../../assets/gp.png'
import aicheP from '../../assets/ChatGPT Image Sep 7, 2025, 05_25_22 PM.png'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function Projects() {

    const projects = [
        {
            index: 0,
            title: "NeuroHaus (Graduation Project)",
            description: "A graduation project focused on building a smart home dashboard that tracks, predicts, and visualizes energy consumption across different rooms. The system empowers users to optimize electricity usage, reduce waste, and lower bills.",
            img: gp
        },
        {
            index: 1,
            title: "Aiche Dashboards (Admins)",
            description: "A custom-built admin dashboard system designed for the AIChE student chapter. The platform streamlines committee and member management, allowing admins to create and assign posts, track activities, and oversee multiple sections efficiently.",
            img: aicheP
        },


    ]
        const [currentIndex, setCurrentIndex] = useState(0);
    const viewNext = () =>{
        setCurrentIndex((prev)=>{
            return prev + 1 === projects.length ? 0 : prev + 1 
        })

    }
    const viewPrevious = () =>{
       setCurrentIndex((prev)=>{
        return prev -1 <0 ? projects.length -1 : prev - 1;
       })

    }
    const currentProject = projects[currentIndex];
  return (
    <>
    <div className='w-full px-5 sm:px-32 mt-7 h-[90vh] sm:h-[37vh]' id="projectSection">
        <h1 className='font-semibold text-2xl text-center'>Projects</h1>
        <div className="flex justify-center items-center">
            <button
            onClick={viewPrevious}
            className='w-12 h-12 rounded-full bg-customPink1 flex justify-center items-center hover:transition-transform hover:scale-110 duration-300 hover:bg-customPink3 mt-[5%]'>
                <FaArrowLeft className="text-white"/>
            </button>
            <AnimatePresence mode="wait">
                <motion.div className="flex flex-col sm:flex-row w-[90%]" key={projects[currentIndex].index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}>
                                <div className="-mt-[5%]">
                <img src={currentProject.img} alt={currentProject.title} />
            </div>
            <div className="flex flex-col mt-[5%]">
                <h2 className="text-xl font-bold text-center">{currentProject?.title}</h2>
                <h3 className="text-lg font-semibold mt-3 text-center">{currentProject?.description}</h3>
            </div>
                </motion.div>
            </AnimatePresence>
                
                        <button
                        onClick={viewNext}
                        className='w-12 h-12 rounded-full bg-customPink1 flex justify-center items-center hover:transition-transform hover:scale-110 duration-300 hover:bg-customPink3 mt-[5%]'>
                <FaArrowRight className="text-white"/>
            </button>
        </div>
    </div>
    
    </>
  )
}
