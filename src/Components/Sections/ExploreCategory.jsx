import Silogs from '../../assets/silogs.png'
import ComboMeals from '../../assets/combo_meals.png'
import FamilyPacks from '../../assets/family_packs.png'
import HomePageCardExplore from '../Cards/HomePage-ExploreCard.jsx'
import '../../CSS/exploresection.css'
import { Link } from "react-router-dom"

function ExploreCategory() {

    const exploreMenu = [
            {
                id: "silogs",
                image: Silogs,
                title: "Silogs",
                path: "/silogs"
            },
            {
                id: "combo-meals",
                image: ComboMeals,
                title: "Combo Meals",
                path: "/combo-meals"
            },
            {
                id: "family-packs",
                image: FamilyPacks,
                title: "Family Packs",
                path: "/family-packs"
            }
        ];

    return(
        <div className="homepage-section explore-section">
            <h1 className = "explore">Explore the Menu</h1>
            <p className = "explore-text">
                Your next silog meal starts here, pick a category and dig in 
            </p>

            <div className = "explore-container ">
                {exploreMenu.map(Menus => (
                    <Link
                        key = {Menus.id}
                        to = {Menus.path}
                    >
                        <HomePageCardExplore
                            image = {Menus.image}
                            title = {Menus.title}
                        />
                    </Link>
                ))}
            </div>
        </div>

    );
}

export default ExploreCategory