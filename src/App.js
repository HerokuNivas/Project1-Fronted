import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homeroute from './Routes/Homeroute';
import Documentation from './components/Documentation';
import HomeRoute from "./components/HomeRoute";
import OutputDocumentation from "./documentations/outputDocumentation";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeroute />}></Route>
        <Route path="/home" element={<HomeRoute/>}></Route>
        <Route path="/documentation" element={<Documentation/>}></Route>
        <Route path="/documentation/outputDocumentation" element={<OutputDocumentation/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
