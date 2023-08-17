import { useTranslation } from 'react-i18next'
import { TbBrandFramerMotion, TbHtml, TbBrandReactNative, TbBrandNextjs, TbBrandBootstrap, TbBrandFigma } from 'react-icons/tb'
import { MdCss } from 'react-icons/md'
import { DiScrum } from 'react-icons/di'
import { AiFillGitlab } from 'react-icons/ai'
import { SiExpress, SiSequelize, SiMongoose } from 'react-icons/si'
import { BiLogoGithub, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoRedux, BiLogoNodejs, BiLogoPostgresql, BiLogoMongodb, BiLogoDocker, BiLogoTailwindCss } from 'react-icons/bi'

const About = () => {

    const [t] = useTranslation("global")

  return (
    <section id='about' className="sm:pt-[120px] sm:pr-40 sm:p-0 p-4 flex flex-col gap-10">
      <div className='flex flex-col gap-2'>
        <p className='sm:hidden block text-slate-200 font-bold'>{t("navigation.li.about")}</p>
        
        <p className="text-slate-400 text-[17px] ">
            {t("about.description")}
        </p>
      </div>
        <div className="flex flex-wrap items-center gap-2">
            <TbHtml size={50} className='text-slate-500' />
            <MdCss size={60} className='text-slate-500' />
            <BiLogoJavascript size={50} className='text-slate-500' />
            <BiLogoTypescript size={50} className='text-slate-500' />
            <BiLogoReact size={50} className='text-slate-500' />
            <TbBrandReactNative size={50} className='text-slate-500' />
            <BiLogoRedux size={50} className='text-slate-500' />
            <TbBrandNextjs size={50} className='text-slate-500' />
            <BiLogoNodejs size={50} className='text-slate-500' />
            <SiExpress size={50} className='text-slate-500' />
            <BiLogoPostgresql size={50} className='text-slate-500' />
            <SiSequelize size={50} className='text-slate-500' />
            <BiLogoMongodb size={50} className='text-slate-500' />
            <SiMongoose size={50} className='text-slate-500' />
            <BiLogoDocker size={50} className='text-slate-500' />
            <BiLogoTailwindCss size={50} className='text-slate-500' />
            <TbBrandBootstrap size={50} className='text-slate-500' />
            <TbBrandFigma size={50} className='text-slate-500' />
            <TbBrandFramerMotion size={50} className='text-slate-500' />
            <BiLogoGithub size={50} className='text-slate-500' />
            <AiFillGitlab size={50} className='text-slate-500' />
            <DiScrum size={50} className='text-slate-500' />
        </div>
        
    </section>
  )
}

export default About