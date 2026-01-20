import '../../CSS/card.css'

function Card({ image, title, text }) {

    return (
        <div className = "card-container">
            <div className= "card-inner">
                <img className="card-image" src={image} alt={title}></img>
                <div className="card-image-fade"></div>

                <h2 className="card-title">{title}</h2>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
}

export default Card 