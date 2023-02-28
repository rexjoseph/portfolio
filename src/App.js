import { Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import Bop from "./pages/Bop";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/work/bop" element={<Bop />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
};

export default App;