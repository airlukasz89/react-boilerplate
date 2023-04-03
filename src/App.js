import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Courses from "./components/pages/courses";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Login from "./components/pages/login";
import "./App.css";

export default function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/courses" element={<Courses />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    );
}