import { useState } from "react"
import { Link } from "react-scroll"

export default function NavBar() {
  const sections = [
    {
      id:"homeSection",
      title: "Home"
    },
    {
      id:"aboutSection",
      title: "About"
    },
    {
      id:"projectSection",
      title: "Projects"
    },
    {
      id:"skillSection",
      title: "Skills"
    },
    {
      id:"connectSection",
      title: "Connect"
    },
  ]
  const [activeSession, setActiveSession] = useState("homeSection");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
<nav className=" fixed w-full z-50 top-0 start-0 h-[10%] bg-[#003566]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
    <a
      href="https://flowbite.com/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
        F.G Portfolio
      </span>
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <a
        href="/Fatma.pdf"
        download="Fatma_Gamal_CV.pdf"
        className="text-white bg-[#ffbd00] hover:bg-[#f4d172] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
      >
        Download Resume
      </a>
      <button
      onClick={()=>setMenuOpen(!menuOpen)}
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded={menuOpen}

      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
     <div
          className={`${
            menuOpen ? "block bg-customPink2 mt-3 rounded-lg border border-gray-100" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1 `}
          id="navbar-sticky"
        >
      <ul className="flex flex-col p-0  md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      {sections.map((ele)=>{
        return (
          
                  <li key={ele.id}>
          <Link
            to={ele.id}
            smooth={true}
            duration={300}
            spy={true}
            offset={-80}
            onSetActive={()=>setActiveSession(ele.id)}
            onClick={(()=> setActiveSession(ele.id))}
            activeClass="active-link"
            className={`block py-2 px-3  rounded-sm bg-transparent ${activeSession === ele.id ? `text-customYellow1` : `text-white`} cursor-pointer hover:text-customYellow1`}
          >
            {ele.title}
          </Link>
        </li>
          
        )
      })}
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}
