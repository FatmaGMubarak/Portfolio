import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Connect() {
  return (
    
    <div className='w-full mt-7 px-2 lg:pr-0 lg:pl-10 mb-5 ' id="connectSection">
    <h2 className='text-2xl font-semibold'>
        CONNECT WITH ME
    </h2>
    <div className='flex justify-evenly items-center mt-10'>
 <a href="mailto:fatmagmoubarak@gmail.com" className="text-white bg-[#ffbd00] hover:bg-[#f4d172] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                
                Let's Talk
                <FaArrowRight className='inline ml-1'/>

                </a>
                <div className="w-[70%] lg:w-[40%] bg-customBlue2 bg-opacity-50 drop-shadow-xl flex justify-evenly items-center rounded-2xl px-5 py-4 gap-x-1 lg:gap-x-0">
                    <a href="https://www.facebook.com/share/19c7ZAk116/?mibextid=wwXIfr" target="_blank"><FaFacebook className="inline text-[50px] text-customBlue5 hover:text-customBlue4"/></a>
                    <a href="https://www.instagram.com/fatmaa.mubarak?igsh=dGthYmNnaWJveHJ2&utm_source=qr" target="_blank"><FaInstagram className="inline text-[50px] text-customBlue5 hover:text-customBlue4"/></a>
                    <a href="https://www.linkedin.com/in/fatma-mubarak-85a46630b" target="_blank"><FaLinkedin className="inline text-[50px] text-customBlue5 hover:text-customBlue4"/></a>
                    <a href="https://github.com/FatmaGMubarak" target="_blank"><FaGithub className="inline text-[50px] text-customBlue5 hover:text-customBlue4"/></a>

                </div>
    </div>
    </div>
    
    
  )
}
