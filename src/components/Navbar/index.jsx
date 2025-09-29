import { Link } from "react-router-dom";

export const Navbar =() => {
    return(
        <nav className="flex gap-4 border-b">
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}