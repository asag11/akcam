
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// styles
import GlobalStyles from "./styles/GlobalStyles";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import 'react-toastify/dist/ReactToastify.css';


// import NotFound from "./pages/single/NotFound";


import { ToastContainer } from 'react-toastify';
import Hakkimizda from "./pages/Hakkimizda";
import Imalat from "./pages/Imalat";
import Projeler from "./pages/Projeler";
import Iletisim from "./pages/Iletisim";
import ProjectItem from "./pages/ProjectItem";

function App() {


  return (
    <Router>
        <GlobalStyles />
        <ToastContainer  className={"toast-container"}/>
        <Routes>

          <Route
            path="/"
            element={
                <MainLayout />
            }
          >
            <Route index element={<Home />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/imalat" element={<Imalat />} />
            <Route path="/projeler" element={<Projeler />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/projeler/c-evi" element={<ProjectItem />} />

          </Route>
        </Routes>
    </Router>
  );
}

export default App;
