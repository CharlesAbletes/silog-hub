import foodsData from '../Data/foodData.js'
import Card from '../Components/Cards/Card.jsx'

import '../CSS/card.css'
import '../CSS/silogs.css'

function Silogs() {
    return (
        <>
            <main className="page-content">
                <div className = "card-container">
                    {foodsData.map(foodsDetails => (
                        <Card
                            image = {foodsDetails.image}
                            title = {foodsDetails.title}
                            text = {foodsDetails.text}
                            key = {foodsDetails.id}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Silogs