import { Link } from "react-router-dom";

export default function Header(){
    return (
        <nav className="navigation black-blue">
            <ul className="navigation-links">
                <li><Link to="/">Clients</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}