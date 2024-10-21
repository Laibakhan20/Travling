import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
<div className="relative h-screen  items-center justify-center bg-cover bg-center text-white" style={{
      backgroundImage: "url(/image.jpg)",
    }}>
       <div className="absolute inset-0 bg-black opacity-40"></div>
       <header>
        <Navbar />
        <Hero/>
        <About/>
        <Contact/>
        <Footer/>
       </header>

       
       
  
    
  </div>
  

     
      
      

   
   
    
  );
}
