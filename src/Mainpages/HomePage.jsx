import Header from '../Components/Header.jsx'
import Favorites from '../Components/Sections/FavoritesSection.jsx'
import FollowUs from '../Components/Sections/FollowSection.jsx'
import ExploreCategory from '../Components/Sections/ExploreCategory.jsx'
import '../CSS/homepage.css'
import { NavLink } from "react-router-dom"
import HeroMarquee from '../Components/Sections/HeroMarquee.jsx'
import FeedbackSection from '../Components/Sections/FeedBackSection.jsx'
import Footer from '../Components/Footer.jsx'

function HomePage() {
    return (
        <>
            <div className="hero-banner">
                <Header />
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
            <Footer />
        </>
    )
}

export default HomePage