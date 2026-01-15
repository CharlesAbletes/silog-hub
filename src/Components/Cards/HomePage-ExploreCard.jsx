import '../../CSS/exploresection.css'

function HomePageCardExplore({ image, title}) {

    return (
        <div className = "homepagecard-explore">
            <img className="explore-image" src={image} alt={title}></img>
            <div class="explore-title">{title}</div>
        </div>
    );
}

export default HomePageCardExplore

/*
 <h2 className="explore-title">{title}</h2>
*/