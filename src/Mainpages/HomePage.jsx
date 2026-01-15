import Header from '../Header.jsx'
import Favorites from '../Components/Sections/FavoritesSection.jsx'
import FollowUs from '../Components/Sections/FollowSection.jsx'
import ExploreCategory from '../Components/Sections/ExploreCategory.jsx'
import '../CSS/homepage.css'
import { NavLink } from "react-router-dom"

function HomePage() {
    return (
        <>
            <div className="hero-banner">
                <Header />
                <div className="overlay">
                    <h1>
                        Filipino Meal <br />
                        Classics,
                        Made <br />
                        To Satisfy
                    </h1>

                    <NavLink to="/silogs">
                        <button>View Menu</button>
                    </NavLink>
                </div>
            </div>
            <Favorites />
            <FollowUs />
            <ExploreCategory />
        </>
    )
}

export default HomePage

/*
<p className="favorites">The Favorites</p>
            <h1 className="exploremenu">Explore Our Menu</h1>


*/