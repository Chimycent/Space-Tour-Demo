import bg from "../assets/destination/background-destination-desktop.jpg";
import bgMobile from "../assets/destination/background-destination-mobile.jpg";
import data from "../assets/data.json";
import { useState } from "react";

const Destination = () => {
  const [destination] = useState(data.destinations);
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const current = destination[index];

  console.log(typeof current);

  const handleClick = (args) => {
    setIndex(args);
    setIsActive(args)

  };

  return (
    <div
      className=" bgMobile  overflow-hidden lg:h-screen h-full lg:px-36 py-24 lg:py-0 pt-24 text-white flex flex-col justify-center  items-center lg:items-start"
    >
      <h2 className="barlow-condensed-light lg:text-2xl text-base gap-2 flex text-center tracking-widest">
        <b className="text-slate-700 barlow-condensed-medium font-semibold">01</b> PICK YOUR DESTINATION
      </h2>
      <div className="flex flex-col justify-center lg:flex-row h-full mt-10  w-full lg:gap-60 gap-20  lg:mx-20  items-center">
        <img className="lg:h-[80%] h-[15rem] " src={current.images.webp} alt="" />
        <div className="flex gap-10 flex-col lg:w-[37%] w-fit items-center " >
          <div
            className="flex  gap-5 barlow-condensed-regular *:cursor-pointer 
            *:py-3 *:px-1"
          >
            <p className={`${isActive === 0 ? "border-b-2 border-white": ""}`} onClick={() => handleClick(0)}>MOON</p>
            <p className={`${isActive === 1 ? "border-b-2 border-white": ""}`} onClick={() => handleClick(1)}>MARS</p>
            <p className={`${isActive === 2 ? "border-b-2 border-white": ""}`} onClick={() => handleClick(2)}>TITAN</p>
            <p className={`${isActive === 3 ? "border-b-2 border-white": ""}`} onClick={() => handleClick(3)}>EUROPA</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="bellefair-regular lg:text-8xl text-[56px]  uppercase">{current.name}</h1>
            <p className="barlow-regular lg:text-base text-sm text-[#D0D6F9]  text-center px-16 ">{current.description}</p>
          </div>
          <div className="flex items-center flex-col lg:flex-row gap-3 *:flex *:flex-col *:items-center *:gap-2 lg:gap-14">
            <div>
              <p className="barlow-condensed-extralight uppercase text-xs tracking-widest">avg distance</p>
              <h3 className="bellefair-regular text-2xl">{current.distance}</h3>
            </div>
            <div>
              <p className="barlow-condensed-extralight uppercase text-xs tracking-widest">Estimated tavel</p>
              <h3 className="bellefair-regular text-2xl">{current.travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

// style={{
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   backgroundImage: `url(${bg})`,
// }}