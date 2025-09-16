import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";


export default function Skills() {
    const logo=[
        {
            title: "html",
            icon: <FaHtml5 className="text-[#E65100] text-[80px]"/>
        },
        {
            title: "css",
            icon: <IoLogoCss3 className="text-[#7E57C2] text-[80px]" />

        },
        {
            title: "js",
            icon: <RiJavascriptFill className="text-[#F0DB4F] text-[80px]"/>

        },
        {
            title: "react",
            icon: <RiReactjsFill className="text-[#0288D1] text-[80px]"/>
        },
        {
            title: "github",
            icon: <TbBrandGithubFilled className="text-[#3D3A3A] text-[80px]"/>
        },
    ]
  return (
    <>
    <div className='w-full px-10 lg:px-24 mt-7' id="skillSection">
        <h1 className='font-semibold text-2xl text-center'>Skills</h1>
    <div  className="grid grid-cols-3 w-full gap-10 justify-center items-center mt-7">
        {logo.map((ele, index)=>{
            return(
                
                <div key={index} className=" flex justify-center items-center w-full  ">
                <div className="bg-customBlue2 bg-opacity-50 w-[100%] lg:w-[40%] lg:h-[15vh] flex justify-center items-center  rounded-2xl drop-shadow-2xl hover: transition-transform hover:scale-105 duration-300">
                    {ele.icon}
                </div>
                </div>
                
            )
        })}
    </div>
    </div>


    </>
  )
}
