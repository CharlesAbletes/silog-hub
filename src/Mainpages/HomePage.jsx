import { NavLink } from "react-router-dom"

import Favorites from '../Components/Sections/FavoritesSection.jsx'
import FollowUs from '../Components/Sections/FollowSection.jsx'
import ExploreCategory from '../Components/Sections/ExploreCategory.jsx'
import HeroMarquee from '../Components/Sections/HeroMarquee.jsx'
import FeedbackSection from '../Components/Sections/FeedBackSection.jsx'

import '../CSS/homepage.css'

function HomePage() {
    return (
        <>
            <div className="hero-banner">
                <div className="overlay">
                    <h1 className="overlay-text">
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
            <HeroMarquee />
            <FeedbackSection />
        </>
    )
}

export default HomePage