import Navbar from "./Navbar";
import Hero from "./Hero";
import '../App.css';
import UniqueFeatures from "./UniqueFeatures";  

export default function Section1() {
  return (
    <div className="bg-darkGreen py-10 px-44 pb-32">
      <Navbar />
      <Hero />
      <UniqueFeatures />
    </div>
  );
}
