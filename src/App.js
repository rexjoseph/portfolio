import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Bop from "./pages/Bop";

const App = () => {
  return (
    <Routes>
      <Route exact path="/#/portfolio" element={<Home />} />
      <Route path="/#/portfolio/bop" element={<Bop />} />
      {/* <Route path="*" element={<Home />} /> */}
      {/*  */}
    </Routes>
  )
};

export default App;