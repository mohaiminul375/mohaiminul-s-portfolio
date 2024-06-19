import About from "./Component/About/About";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#09101A] text-white font-inter px-10">
      <Banner></Banner>
      <About></About>
      </div>
    </>
  );
}

export default App;
