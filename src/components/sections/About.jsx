import development from '../../assets/wDevelopment.png'
import hosting from '../../assets/wHosting.png'
import design from '../../assets/wDesign.png'
export default function About() {
  return (
    <div className="flex flex-col lg:flex-row w-full" id="aboutSection">
<div className="flex">
        <div>
          <div className='flex flex-col h-[100vh] items-center justify-center gap-y-1 pl-10'>
                <div className='bg-customBlue1 w-1 h-[25%] rounded-sm'></div>
                <div className='bg-customBlue1 w-5 h-5 rounded-full'></div>
                <div className='bg-customBlue1 w-1 h-[25%] rounded-sm'></div>
                <div className='bg-customBlue1 w-5 h-5 rounded-full'></div>
                <div className='bg-customBlue1 w-1 h-[25%] rounded-sm'></div>
            </div>
    </div>
    <div className="flex w-full">


    <div className="flex flex-col mt-[8%] gap-y-[20%]">
    <div className="flex flex-row justify-between items-center gap-x-5">
        <img src={development} alt="" className="w-20 h-20"/>
            <h2 className="text-xl">Web Development</h2>
    </div>
    <div className="flex flex-row justify-between items-center gap-x-5">
        <img src={hosting} alt="" className="w-20 h-20"/>
            <h2 className="text-xl">Web Hosting</h2>
    </div>
    <div className="flex flex-row justify-between items-center gap-x-5">
        <img src={design} alt="" className="w-20 h-20"/>
            <h2 className="text-xl">Web Design</h2>
    </div>
    </div>

        </div>
</div>
    <div className="mt-[8%] w-full ml-0 text-center lg:text-left lg:ml-[30%]">
        <h1 className="text-3xl font-bold">About Me</h1>
        <h2 className="text-xl font-medium mt-4">
            Hi, I’m Fatma Gamal — a passionate Front End Developer specializing in building modern, user-friendly web applications with React.js. I enjoy transforming ideas into digital experiences that are both functional and visually engaging.
        </h2>
        <h2 className="text-xl font-medium mt-4">
            Over the past years, I’ve worked on projects ranging from smart dashboards to interactive portfolios, combining creativity with technical precision. I thrive on solving problems, optimizing performance, and delivering solutions that make an impact.
        </h2>
        <h2 className="text-xl font-medium mt-4">
            Beyond coding, I’m continuously exploring new technologies, designing intuitive interfaces, and finding creative ways to merge functionality with personality.
        </h2>
        <h2 className="text-xl font-medium mt-4">
         My goal is simple: to bring innovation, reliability, and a touch of creativity to every project I work on.
        </h2>
        <h2 className="text-xl font-medium mt-4">
            If you’re looking for someone who can turn your vision into reality — let’s connect! I’d love to collaborate and create something meaningful together.
        </h2>
    </div>
    </div>
  )
}
