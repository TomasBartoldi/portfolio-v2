import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoLinkedinSquare, BiLogoGithub, /* BiLogoGmail */ } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'


const Navigation = () => {

  const [t, i18n] = useTranslation("global")

  const [activeLink, setActiveLink] = useState("about");
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName === activeLink ? null : linkName);
  };

  const isLinkActive = (linkName) => linkName === activeLink;

  useEffect(() => {
    const handleScrollAndClick = () => {
      const scrollPosition = window.scrollY;

      const aboutSection = document.getElementById('about').offsetTop;
      const experienceSection = document.getElementById('experience').offsetTop;
      const projectsSection = document.getElementById('projects').offsetTop;

      if (scrollPosition >= aboutSection && scrollPosition < experienceSection) {
        setActiveLink('about');
      } else if (scrollPosition >= experienceSection && scrollPosition < projectsSection) {
        setActiveLink('experience');
      } else if (scrollPosition >= projectsSection) {
        setActiveLink('projects');
      }
    };


    window.addEventListener('scroll', handleScrollAndClick);

    return () => {
      window.removeEventListener('scroll', handleScrollAndClick);
    };
  }, []);
  

  return (
    <div className=" sm:h-[100vh] top-0 sticky">
        <div className="flex flex-col justify-center sm:pt-8 sm:px-40 sm:p-0 p-4 gap-2">
        <div className='sm:py-6'>
               <div className='flex flex-row items-center justify-center rounded-full w-[90px] '>
                   <button 
                     onClick={() => {
                      i18n.changeLanguage("es");
                      setSelectedLanguage("es");
                    }} 
                   className={selectedLanguage === "es" ? "transition-all duration-300 bg-slate-400 text-[#0F172F] font-semibold w-1/2 border border-slate-400" : "transition-all duration-300 bg-[#0F172F] text-slate-400 font-semibold border border-slate-400 w-1/2"} style={{ borderTopLeftRadius: '5%', borderBottomLeftRadius: '5%' }}>ES</button>
                   <button 
                     onClick={() => {
                      i18n.changeLanguage("en");
                      setSelectedLanguage("en");
                    }} 
                   className={selectedLanguage === "en" ? "transition-all duration-300 bg-slate-400 text-[#0F172F] font-semibold w-1/2 border border-slate-400" : "transition-all duration-300 bg-[#0F172F] text-slate-400 font-semibold border border-slate-400 w-1/2"} style={{ borderTopRightRadius: '5%', borderBottomRightRadius: '5%' }}>EN</button>
               </div>
            </div>
            <h1 className="font-bold sm:text-[50px] text-[30px] " style={{ color: '#E4E4E4' }}>Tomas Bartoldi</h1>
            <h3 className="sm:text-[25px] text-[20px] " style={{ color: '#E4E4E4' }}>{t("navigation.position")}</h3>
            <p className="sm:text-[17px] text-gray max-w-sm text-slate-400">{t("navigation.description")}</p>
        </div>
        <div className="hidden sm:block sm:pt-20 sm:px-40">
            <nav>
                <ul className="flex flex-col gap-4">      
                    <li className="text-[13px] font-bold cursor-pointer group w-40">
                      <Link onClick={() => handleLinkClick('about')} to="about" smooth={true} offset={0} duration={600} className="flex flex-row items-center gap-3">
                        <hr
                          className={`transition-all bg-slate-600 border-[1px] group-hover:w-16 group-hover:border-slate-200 ${
                            isLinkActive('about')
                              ? 'w-16 border-slate-200'
                              : 'w-8 border-slate-600'
                          }`}
                        />
                        <span className={`flex flex-row items-center gap-3 ${
                            isLinkActive('about')
                              ? 'text-slate-200'
                              : 'text-slate-500 group-hover:text-slate-200'
                          }`}>
                        {t("navigation.li.about")}
                        </span>
                      </Link>
                    </li>
                                
                    <li className="text-[13px] font-bold cursor-pointer group w-40">
                      <Link onClick={() => handleLinkClick('experience')} to="experience" smooth={true} offset={10} duration={600} className="flex flex-row items-center gap-3">
                        <hr
                          className={`transition-all bg-slate-600 border-[1px] group-hover:w-16 group-hover:border-slate-200 ${
                            isLinkActive('experience')
                              ? 'w-16 border-slate-200'
                              : 'w-8 border-slate-600'
                          }`}
                        />
                        <span className={`flex flex-row items-center gap-3 ${
                            isLinkActive('experience')
                              ? 'text-slate-200'
                              : 'text-slate-500 group-hover:text-slate-200'
                          }`}>
                        {t("navigation.li.experience")}
                        </span>
                      </Link>
                    </li>
                    
                    <li className="text-[13px] font-bold cursor-pointer group w-40">
                      <Link onClick={() => handleLinkClick('projects')} to="projects" smooth={true} offset={10} duration={600} className="flex flex-row items-center gap-3">
                        <hr
                          className={`transition-all bg-slate-600 border-[1px] group-hover:w-16 group-hover:border-slate-200 ${
                            isLinkActive('projects')
                              ? 'w-16 border-slate-200'
                              : 'w-8 border-slate-600'
                          }`}
                        />
                        <span className={`flex flex-row items-center gap-3 ${
                            isLinkActive('projects')
                              ? 'text-slate-200'
                              : 'text-slate-500 group-hover:text-slate-200'
                          }`}>
                        {t("navigation.li.projects")}
                        </span>
                      </Link>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="sm:py-20 sm:px-40 sm:p-0 p-4 flex flex-col">
            <div className='flex flex-row gap-8'>
              <a href="https://github.com/TomasBartoldi" target="blank">
               <BiLogoGithub size={30} className='text-slate-600 hover:text-slate-300' />
              </a>
              <a href="https://www.linkedin.com/in/tomas-bartoldi-395818242/" target="blank">
               <BiLogoLinkedinSquare size={30} className='text-slate-600 hover:text-slate-300' />
              </a>
              <a href={`https://api.whatsapp.com/send?phone=5491168881990&text=${encodeURIComponent(
                  'Hola, me gustaría comunicarme contigo.'
                )}`} target="blank" rel="noopener noreferrer">
               <AiOutlineWhatsApp size={30} className='text-slate-600 hover:text-slate-300' />
              </a>
{/*               <a href="" target="blank" rel="noopener noreferrer">
               <BiLogoGmail size={30} className='text-slate-600 hover:text-slate-300' />
              </a> */}
            </div>
        </div>

    </div>
  )
}

export default Navigation