import { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:7000/api/users")
    .then(res => res.json())
    .then(res =>{
        console.log(res)
        setData(res)
    })
  }, [])
  return (
    <div className="mt-40 flex flex-col h-screen w-screen items-center">
      <h1>Test</h1>
      <div>
    {data?.map(item =>(
        <div key={item.id}>
            <p className="bg-pink-700">{item.username}</p>
            </div>
    ))}
      </div>
    </div>
  );
};

export default Test;