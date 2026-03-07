import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground(){

 const particlesInit = async (main)=>{
  await loadFull(main);
 };

 return(
  <Particles
   init={particlesInit}
   options={{
    particles:{
     number:{ value:40 },
     size:{ value:3 },
     move:{ enable:true, speed:1 },
     opacity:{ value:0.4 }
    }
   }}
   className="absolute inset-0"
  />
 );
}