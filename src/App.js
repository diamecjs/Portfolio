import Inicio from "./Pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Certificaciones from "./Pages/Certificaciones";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/certifications" element={<Certificaciones />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
