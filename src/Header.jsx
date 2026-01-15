import './CSS/header.css'
import { NavLink } from "react-router-dom"

function Header() {

    return(
        <>
            <header>
                <h1 className="brand-name">
                    <img src="/siloghub_logo_4k - white.png" alt="Silog Hub logo" />
                </h1>

                <nav>
                    <ul>
                        <li className="homepage"><NavLink to="/">Home Page</NavLink></li>
                        <li className="silogs"><NavLink to="/silogs">Silogs</NavLink></li>
                        <li className="combomeals"><NavLink to="/combomeals">Combo Meals</NavLink></li>
                        <li className="familypacks"><NavLink to="/familypacks">Family Packs</NavLink></li>
                        <li className="aboutus"><NavLink to="/aboutus">About Us</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header