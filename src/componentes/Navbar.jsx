import { Link } from "react-router-dom"

import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
        <p>
            <span className="pequeno">FL</span>
            <span className="grande">VEÍCULOS</span>
        </p>
        </div>
        <ul className="nav-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/empresa">Empresa</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar