import HeroContent from "./HeroContent";

const Hero = ()=>{
  return (

<div className="relative flex items-center justify-center h-full w-full">
  
 <video 
 loop
 autoPlay
 muted
 className="absolute w-full h-full top-[10px] z-[10] left-0 object-cover"
  >
   <source src="/gold.mp4" type="video/mp4" />
 </video>

<video
loop
autoPlay
muted
className="absolute w-full h-full -bottom-[360px] left-0 z-[10]  object-cover rotate-180"
>

<source  src="/gold.mp4" type="video/mp4"/>


</video>
<HeroContent />
  
</div>


  )
};

export default Hero;