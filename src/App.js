import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./components/pages/clients";
import Courses from "./components/pages/courses";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Login from "./components/pages/login";
import "./App.css";

const App = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Clients />}/>
                <Route path="/courses" element={<Courses />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;