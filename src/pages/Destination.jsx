import bg from "../assets/destination/background-destination-desktop.jpg";
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

  // console.log(p)

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bg})`,
      }}
      className=" h-screen px-36 pt-24 text-white flex flex-col justify-center items-start"
    >
      <h2>
        <b>01</b> PICK YOUR DESTINATION
      </h2>
      <div className="flex">
        <img src={current.images.webp} alt="" />
        <div>
          <div
            className="flex  gap-5 barlow-condensed-regular *:cursor-pointer 
            *:py-3 *:px-1"
          >
            <p className={`${isActive === 0 ? "border-b-2 border-white": ""}`} onClick={() => handleClick(0)}>MOON</p>
            <p className={`${isActive === 1 ? "border-b-2 border-white": ""}`} onClick={() => handleClick(1)}>MARS</p>
            <p className={`${isActive === 2 ? "border-b-2 border-white": ""}`} onClick={() => handleClick(2)}>TITAN</p>
            <p className={`${isActive === 3 ? "border-b-2 border-white": ""}`} onClick={() => handleClick(3)}>EUROPA</p>
          </div>
          <div className="flex flex-col">
            <h1 className="bellefair-regular text-3xl">{current.name}</h1>
            <p>{current.description}</p>
          </div>
          <div className="flex">
            <div>
              <p>avg distance</p>
              <h3>{current.distance}</h3>
            </div>
            <div>
              <p>Estimated tavel</p>
              <h3>{current.travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;