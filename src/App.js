import { Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
};

export default App;