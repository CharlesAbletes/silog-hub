import { nanoid } from "nanoid"

import tapsilogPic from '../../assets/tapsilog.jpg'
import longsilogPic from '../../assets/longsilog.jpg'
import chicksilogPic from '../../assets/chicksilog.jpg'
import bangustinapaPic from '../../assets/bangustinapa.jpg'
import HomePageCardFavorites from '../Cards/HomePage-FavoritesCard.jsx'
import '../../CSS/favoritesection.css'

function Favorites(){

    const foodsData = [
        {
            id: nanoid(),
            image: tapsilogPic,
            title: "Tapsilog",
        },
        {
            id: nanoid(),
            image: chicksilogPic,
            title: "Chicksilog",
        },
        {
            id: nanoid(),
            image: longsilogPic,
            title: "Longsilog",
        },
        {
            id: nanoid(),
            image: bangustinapaPic,
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
                    <HomePageCardFavorites
                        image = {foodsDetails.image}
                        title = {foodsDetails.title}
                        key = {foodsDetails.id}
                    />
                ))}
            </div>
        </div>
    );
}

 export default Favorites