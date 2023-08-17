import { useTranslation } from 'react-i18next'
import weather from '../assets/weather.jpg'
import becoming from '../assets/becomingfit.jpg'
import manly from '../assets/manly.jpg'
import spotify from '../assets/spotify.jpg'
import countries from '../assets/countries.jpg'
import { BiLogoGithub } from 'react-icons/bi'
import { GoProjectSymlink } from 'react-icons/go'


const Projects = () => {

  const [t] = useTranslation("global")

  return (
    <section id='projects' className="sm:py-40 py-20 flex flex-col sm:gap-6 gap-10 sm:pr-40">

        <p className='sm:hidden block px-4 text-slate-200 font-bold'>{t("navigation.li.projects")}</p>
       
        <div className="flex sm:flex-row flex-col gap-6 p-4 group bg-transparent hover:bg-slate-600 hover:bg-opacity-10 rounded-[5px] ">
            <img src={manly}  alt="weather_project" className='sm:w-28 sm:h-20 rounded-sm' />
            <div className='flex flex-col gap-3 bg-transparent'>
              <h1 className='text-slate-300 font-semibold bg-transparent'>{t("projects.manly.name")}</h1>
              <p className='max-w-sm text-slate-500 bg-transparent'>{t("projects.manly.description")}</p>
              <div className='flex flex-wrap gap-3 max-w-sm bg-transparent'>
              <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>HTML</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>TailwindCSS</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Framer Motion</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Javascript</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>React</div>
             </div>
             <a href="https://www.northmanlycleaners.com/" target="blank" className='bg-transparent'>
               <GoProjectSymlink size={30} className='text-slate-600 hover:text-slate-300 bg-transparent' />
            </a>
            </div>
        </div>
        

        <div className="flex sm:flex-row flex-col gap-6 p-4 group bg-transparent hover:bg-slate-600 hover:bg-opacity-10 rounded-[5px] ">
            <img src={becoming}  alt="weather_project" className='sm:w-28 sm:h-20 rounded-sm' />
            <div className='flex flex-col gap-3 bg-transparent'>
              <h1 className='text-slate-300 font-semibold bg-transparent'>{t("projects.becoming.name")}</h1>
              <p className='max-w-sm text-slate-500 bg-transparent'>{t("projects.becoming.description")}</p>
              <div className='flex flex-wrap gap-3 max-w-sm bg-transparent'>
              <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>HTML</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>CSS</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Javascript</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>React</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Redux</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Node Js</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Express</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>PostgreSQL</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Sequelize</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Material UI</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Firebase</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Google Login</div>
             </div>
             <a href="https://github.com/TomasBartoldi/Becoming_Fit" target="blank" className='bg-transparent'>
               <BiLogoGithub size={30} className='text-slate-600 hover:text-slate-300 bg-transparent' />
            </a>
            </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-6 p-4 group bg-transparent hover:bg-slate-600 hover:bg-opacity-10 rounded-[5px] ">
            <img src={countries}  alt="weather_project" className='sm:w-28 sm:h-20 rounded-sm' />
            <div className='flex flex-col gap-3 bg-transparent'>
              <h1 className='text-slate-300 font-semibold bg-transparent'>{t("projects.countries.name")}</h1>
              <p className='max-w-sm text-slate-500 bg-transparent'>{t("projects.countries.description")}</p>
              <div className='flex flex-wrap gap-3 max-w-sm bg-transparent'>
              <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>HTML</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>CSS</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Javascript</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>React</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Redux</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Node Js</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Express</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>PostgreSQL</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Sequelize</div>
             </div>
             <a href="https://github.com/TomasBartoldi/CountriesApp" target="blank" className='bg-transparent'>
               <BiLogoGithub size={30} className='text-slate-600 hover:text-slate-300 bg-transparent' />
            </a>
            </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-6 p-4 group bg-transparent hover:bg-slate-600 hover:bg-opacity-10 rounded-[5px] ">
            <img src={spotify}  alt="weather_project" className='sm:w-28 sm:h-20 rounded-sm' />
            <div className='flex flex-col gap-4 bg-transparent'>
              <h1 className='text-slate-300 font-semibold bg-transparent'>{t("projects.spotify.name")}</h1>
              <p className='max-w-sm text-slate-500 bg-transparent'>{t("projects.spotify.description")}</p>
              <div className='flex flex-wrap gap-3 max-w-sm bg-transparent'>
              <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>HTML</div>
              <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>CSS</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Styled-components</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Spotify API</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Javascript</div>
                  <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>React</div>
             </div>
              <a href="https://github.com/TomasBartoldi/Spotify-clone" target="blank" className='bg-transparent'>
               <BiLogoGithub size={30} className='text-slate-600 hover:text-slate-300 bg-transparent' />
              </a>
            </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-6 p-4 group bg-transparent hover:bg-slate-600 hover:bg-opacity-10 rounded-[5px] ">
            
            <img src={weather}  alt="weather_project" className='sm:w-28 sm:h-20 rounded-sm' />
            <div className='flex flex-col gap-4 bg-transparent'>
              <h1 className='text-slate-300 font-semibold bg-transparent'>{t("projects.weather.name")}</h1>
              <p className='max-w-sm text-slate-500 bg-transparent'>{t("projects.weather.description")}</p>
              <div className='flex flex-wrap gap-3 max-w-sm bg-transparent'>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>HTML</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>CSS</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Javascript</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>React</div>
             </div>
             <div className='flex flex-row gap-4 bg-transparent'>
              <a href="https://github.com/TomasBartoldi/Weather-App" target="blank" className='bg-transparent'>
               <BiLogoGithub size={30} className='text-slate-600 hover:text-slate-300 bg-transparent' />
              </a>
              <a href="https://weather-app-umber-iota-34.vercel.app/" target="blank" className='bg-transparent'>
               <GoProjectSymlink size={30} className='text-slate-600 hover:text-slate-300 bg-transparent' />
              </a>
             </div>
            </div>
        </div>

    </section>
  )
}

export default Projects