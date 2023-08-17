import { useTranslation } from 'react-i18next'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import resume from '../assets/CV_tomasbartoldi.pdf'

const Experience = () => {

    const [t] = useTranslation("global")

  return (
    <section id='experience' className=" sm:pt-40 pt-10 flex flex-col gap-6 sm:pr-40">

      <p className='sm:hidden block px-4 text-slate-200 font-bold'>{t("navigation.li.experience")}</p>
      
      <a href="https://www.devforgeconsulting.com" target="blank">
        <div className="flex sm:flex-row flex-col gap-6 p-4 group bg-transparent hover:bg-slate-600 hover:bg-opacity-10 rounded-[5px] ">
           <p className='text-slate-500 text-[14px] font-semibold bg-transparent'>2023 - {t("experience.devforge.present")}</p>
           <div className='flex flex-col gap-3 bg-transparent'>
             <h1 className='flex flex-row gap-2 text-slate-300 font-semibold bg-transparent group-hover:underline'>{t("experience.devforge.company")} <AiOutlineArrowUp size={20} className='text-slate-300 bg-transparent group-hover:animate-bounce' /></h1>
             <h3 className='text-slate-500 font-semibold bg-transparent'> {t("experience.devforge.position")}</h3>
             <p className='max-w-sm text-slate-500 bg-transparent'>{t("experience.devforge.description")}</p>
             <div className='flex flex-wrap gap-3 max-w-sm bg-transparent'>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>HTML</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>CSS</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Javascript</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Typescript</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>React</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>React Native</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Node Js</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>PostgreSQL</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>MongoDB</div>
             </div>
           </div>
        </div>
      </a>

      <a href="https://dra-mweed.vercel.app" target="blank">
        <div className="flex sm:flex-row flex-col gap-6 p-4 group bg-transparent hover:bg-slate-600 hover:bg-opacity-10 rounded-[5px] ">
           <p className='text-slate-500 text-[14px] font-semibold bg-transparent'>2023 - {t("experience.dramweed.present")}</p>
           <div className='flex flex-col gap-3 bg-transparent'>
             <h1 className='flex flex-row gap-2 text-slate-300 font-semibold bg-transparent group-hover:underline'>{t("experience.dramweed.company")} <AiOutlineArrowUp size={20} className='text-slate-300 bg-transparent group-hover:animate-bounce' /></h1>
             <h3 className='text-slate-500 font-semibold bg-transparent'> {t("experience.dramweed.position")}</h3>
             <p className='max-w-sm text-slate-500 bg-transparent'>{t("experience.dramweed.description")}</p>
             <div className='flex flex-wrap gap-3 max-w-sm bg-transparent'>
             <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>HTML</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>CSS</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Javascript</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Typescript</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>React</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Node Js</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>PostgreSQL</div>
             </div>
           </div>
        </div>
      </a>

        <div className="flex sm:flex-row flex-col gap-6 p-4 group bg-transparent hover:bg-slate-600 hover:bg-opacity-10 rounded-[5px] ">
           <p className='text-slate-500 text-[14px] font-semibold bg-transparent'>{t("experience.treep.present")} 2023</p>
           <div className='flex flex-col gap-3 bg-transparent'>
             <h1 className='text-slate-300 font-semibold bg-transparent'>{t("experience.treep.company")}</h1>
             <h3 className='text-slate-500 font-semibold bg-transparent'> {t("experience.treep.position")}</h3>
             <p className='max-w-sm text-slate-500 bg-transparent'>{t("experience.treep.description")}</p>
             <div className='flex flex-wrap gap-3 max-w-sm bg-transparent'>
             <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>CSS</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Javascript</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>React Native</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>Node Js</div>
                <div className='text-[14px] rounded-full bg-[#20696B] bg-opacity-10 font-semibold p-2 text-[#20696B]'>PostgreSQL</div>
             </div>
           </div>
        </div>

        <div className='flex flex-row items-center group w-60'>
          <a href={resume} download="CV_tomasbartoldi" className='flex flex-row items-center group w-60'>
         <button className=' text-slate-300 font-bold text-md px-4 group-hover:underline '>{t("experience.resume")} </button>
         <AiOutlineArrowDown size={20} className='text-slate-300 group-hover:animate-bounce' />
         </a>
        </div>
    </section>
  )
}

export default Experience