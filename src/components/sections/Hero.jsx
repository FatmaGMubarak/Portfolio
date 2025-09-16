import avatar from '../../assets/Avatar.png'
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div id='homeSection'>
        <div className='w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-10 sm:mt-0'>
            <div className='p-10'>
                <h1 className='text-3xl font-bold'>
                    Hi, I'm <span className='text-customYellow1'>Fatma Gamal</span>
                </h1>
                <h2 className='text-2xl font-semibold'>
                    FrontEnd Developer | React.js
                </h2>
                <p className='text-xl mt-5 w-[80%]'>
                    I create modern, playful, and user-friendly web apps, blending creativity with modern tech
                </p>
            </div>

           <div>
             <div  className='relative  mt-24 sm:mt-36 mr-0 sm:mr-36 w-full'>
                <div className='flex justify-center items-center '>
                    <div className='group hover:animate-flipX relative flex justify-center items-center'>
<div className='bg-customBlue1 w-52 h-52 lg:w-72 lg:h-72 rounded-full relative'></div>
                    <div className='bg-[#e7ecef] w-44 h-44 lg:w-64 lg:h-64 rounded-full absolute'><img src={avatar} alt="" className='w-52 lg:w-80 absolute z-20' style={{ clipPath: "circle(50% at 50% 50%)" }}/>
</div>
                    </div>
                    
{Array.from({ length: 9 }).map((_, i) => (
  <div
    key={i}
    className=" absolute bg-customYellow1 hover:bg-customYellow2 w-1 h-32 bottom-0 origin-bottom transform animate-pulse "
    style={{
      transform: `rotate(${i * (180 / (9 - 1)) - 90}deg) translateY(-150px) `,
      top: "0",
    }}
  ></div>
))}
                </div>
              

            </div>
           </div>

        </div>
        <div className='p-10 flex justify-evenly items-center w-full lg:w-[30%] mt-0 lg:-mt-28'>
            <a href='/Fatma.pdf' target='_blank' className=" text-white bg-customBlue5 hover:bg-customBlue4 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Resume</a>
            <a href='mailto:fatmagmoubarak@gmail.com' className="text-white bg-customYellow1 hover:bg-customYellow2 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                
                Let's Talk
                <FaArrowRight className='inline ml-1'/>

                </a>

        </div>
    </div>
  )
}
