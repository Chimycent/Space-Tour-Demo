import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Navbar from "./components/Navbar";
// import { IoMenu } from "react-icons/io5";
import Test from "./pages/Test";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/technology"  element={<Technology/>}/>
        <Route path="/crew" element={<Crew/>} />
        <Route path="/destination" element={<Destination/>} />
      </Routes>
    </div>
  );
}

export default App;
