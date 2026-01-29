import { Link } from "react-router-dom";

import tapsilog from '../../assets/tapsilog_torn.png'
import longsilog from '../../assets/longsilog_torn.png'
import chicksilog from '../../assets/chicksilog_torn.png'
import bangustinapa from '../../assets/bangustinapa_torn.png'
import HomePageCardFavorites from '../Cards/HomePage-FavoritesCard.jsx'

import '../../CSS/favoritesection.css'


function Favorites(){

    const foodsData = [
        {
            id: "tapsilog",
            image: tapsilog,
            title: "Tapsilog",
        },
        {
            id: "chicksilog",
            image: chicksilog,
            title: "Chicksilog",
        },
        {
            id: "longsilog",
            image: longsilog,
            title: "Longsilog",
        },
        {
            id: "bangus-tinapa",
            image: bangustinapa,
            title: "Bangus Tinapa",
        }
    ];

    return (
        <div className="homepage-section favorites-section">
            <h1 className = "favorites">Our Favorites</h1>
            <p className = "fav-text">
                Take a look at the top picks from our customers — <br />
                each dish is carefully prepared and always served with the best silog in town! 
            </p>
        
            <div className = "favorites-container">
                {foodsData.map(foodsDetails => (
                    <Link
                    key = {foodsDetails.id}
                    to="/silogs"
                    >
                        <HomePageCardFavorites
                            image = {foodsDetails.image}
                            title = {foodsDetails.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

 export default Favorites