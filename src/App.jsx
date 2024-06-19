import About from "./Component/About/About";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#09101A] text-white font-inter px-10">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Services></Services>
      </div>
    </>
  );
}

export default App;
