import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homeroute from './Routes/Homeroute';
import Documentation from './components/Documentation';
function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeroute />}></Route>
        <Route path="/documentation" element={<Documentation/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
