import { nanoid } from "nanoid"

import Silogs from '../../assets/silogs.png'
import ComboMeals from '../../assets/combo_meals.png'
import FamilyPacks from '../../assets/family_packs.png'
import HomePageCardExplore from '../Cards/HomePage-ExploreCard.jsx'
import '../../CSS/exploresection.css'

function ExploreCategory() {

    const exploreMenu = [
            {
                id: nanoid(),
                image: Silogs,
                title: "Silogs",
            },
            {
                id: nanoid(),
                image: ComboMeals,
                title: "Combo Meals",
            },
            {
                id: nanoid(),
                image: FamilyPacks,
                title: "Family Packs",
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
                    <HomePageCardExplore
                        image = {Menus.image}
                        title = {Menus.title}
                        key = {Menus.id}
                    />
                ))}
            </div>
        </div>

    );
}

export default ExploreCategory