import About from "../components/About"
import Experience from "../components/Experience"
import Navigation from "../components/Navigation"
import Projects from "../components/Projects"


const Home = () => {

  return (
    <div className="flex sm:flex-row flex-col w-full">
      <div className="w-full">
        <Navigation />
      </div>
      <div className="flex flex-col w-full">
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}

export default Home