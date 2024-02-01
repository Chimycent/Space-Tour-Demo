import bg from "../assets/technology/background-technology-desktop.jpg";
import data from "../assets/data.json";
import { useState } from "react";

const Technology = () => {
  const [technology] = useState(data.technology);
  const [index, setIndex] = useState(0)
  const [isActive, setIsActive] = useState(0)
  
  const current = technology[index]

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
    className="h-screen flex px-24 overflow-hidden  py-36"

  >
     <div className="details flex flex-col gap-5">
     <div className="text-white  ">
          <p className="flex barlow-condensed-regular text-[28px] gap-4 ml-20 tracking-widest">
            <span className="text-white opacity-[20%] barlow-condensed-bold">
              03
            </span>
            SPACE LAUNCH 101
          </p>
        </div>

        <div>
          <span className="uppercase text-white ml-[80px] bellefair-regular mt-[60px]">THE TERMINOLOGY...</span>
          <p className="uppercase text-white ml-[80px] mt-3 bellefair-regular text-5xl">
           {current.name}
          </p>
          <p className=" text-[#D0D6F9] w-[400px] ml-[80px] mt-9 bellefair-regular text-[18px] leading-6">
           {current.description}
          </p>
        </div>

        <div className="flex flex-col absolute items-center gap-5 mr-[85px] mt-9  text-[28px]">
          <div  onClick={()=>handleClick(0)} className={`${isActive=== 0 ? "text-black bg-white w-[50px] h-[50px]  border-white rounded-full pl-4":"text-white w-[50px] h-[50px] border rounded-full pl-4" } cursor-pointer`}>1</div>
          <div onClick={()=>handleClick(1)} className={`${isActive=== 1 ? " text-black bg-white w-[50px] h-[50px]  border-white rounded-full  pl-4":" text-white w-[50px] h-[50px] border rounded-full pl-4" } cursor-pointer`} >2</div>
          <div onClick={()=>handleClick(2)} className= {`${isActive=== 2 ? " text-black bg-white w-[50px] h-[50px]  border-white rounded-full  pl-4":"text-white w-[50px] h-[50px] border rounded-full pl-4" } cursor-pointer`}>3</div>
        </div>

      </div>
      <img src={current.images.portrait} alt={current.name} className="h-[400px] w-[400px] absolute right-0" />

  </div>
  
  )
}

export default Technology