import About from "./Component/About/About";
import Banner from "./Component/Banner/Banner";
import Contact from "./Component/Contact/Contact";
import Education from "./Component/Education/Education";
import Navbar from "./Component/Navbar/Navbar";
import Projects from "./Component/Projects/Projects";
import Services from "./Component/Services/Services";
import Skills from "./Component/Skills/Skills";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#09101A] text-white font-inter md:px-10">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
      </div>
        <Footer></Footer>
    </>
  );
}

export default App;
