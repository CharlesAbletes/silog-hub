import '../../CSS/favoritesection.css'

function HomePageCardFavorites({ image, title }) {

    return (
        <div className="homepagecard-favorites">
            <img className="favorites-image" src={image} alt={title} />
            <div className="favorites-image-fade"></div>

            <h2 className="favorites-title">{title}</h2>
        </div>
    );
}

export default HomePageCardFavorites 