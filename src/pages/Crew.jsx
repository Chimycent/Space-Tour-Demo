import bg from "../assets/crew/background-crew-desktop.jpg";
import data from "../assets/data.json";
import { useState } from "react";

const Crew = () => {
const [crew] = useState(data.crew);
const [index, setIndex] = useState(0)
const [isActive, setIsActive] = useState(0)

const current = crew[index]

function handleClick (args){
  setIndex(args)
  setIsActive(args)
}

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bg})`,
      }}
      className="crew h-screen flex gap-40 px-24 overflow-hidden  py-36"
    >
      <div className="details flex flex-col gap-5">
        <div className="text-white  ">
          <p className="flex barlow-condensed-regular text-[28px] gap-4 ml-20 tracking-widest">
            <span className="text-white opacity-[20%] barlow-condensed-bold">
              02
            </span>
            MEET YOUR CREW
          </p>
        </div>
        <div>
          <p className="uppercase text-white ml-[80px] text-3xl bellefair-regular opacity-[50%] mt-[60px]">
            {current.role}
          </p>
          <p className="uppercase text-white ml-[80px] mt-3 bellefair-regular text-5xl">
           {current.name}
          </p>
          <p className=" text-[#D0D6F9] w-[400px] ml-[80px] mt-9 bellefair-regular text-[18px] leading-6">
           {current.bio}
          </p>
        </div>
        <div className="flex absolute bottom-10 items-center gap-5 ml-[85px] mt-9">
          <div  onClick={()=>handleClick(0)} className={`${isActive===0 ? "bg-white w-[15px] h-[15px] ":"bg-[#979797] opacity-[17%] w-[10px] h-[10px] " } rounded-full cursor-pointer`}></div>
          <div onClick={()=>handleClick(1)} className={`${isActive===1 ? "bg-white w-[15px] h-[15px] ":"bg-[#979797] opacity-[17%] w-[10px] h-[10px] " }  rounded-full  cursor-pointer`} ></div>
          <div onClick={()=>handleClick(2)} className= {`${isActive===2 ? "bg-white w-[15px] h-[15px] ":"bg-[#979797] opacity-[17%] w-[10px] h-[10px] " } rounded-full  cursor-pointer`}></div>
          <div onClick={()=>handleClick(3)} className= {`${isActive===3 ? "bg-white w-[15px] h-[15px] ":"bg-[#979797] opacity-[17%]  w-[10px] h-[10px] " } rounded-full  cursor-pointer`}></div>
        </div>
      </div>
    
        <img src={current.images.webp} alt={current.name} className="object-cover h-[30rem] " />

    </div>
  );
};

export default Crew;