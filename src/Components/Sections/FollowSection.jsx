import '../../CSS/followsection.css'

function FollowUs(){

    return (
        <div className="homepage-section follow-section">
            <div className="homepage-section follow-box">
                <h1 className="homepage-section follow-text">
                    <span>Don’t miss a bite!</span>
                </h1>

                <p className="homepage-section follow-sub-text">
                    <span>
                        Follow us on Facebook for tasty promos, new menu drops, <br />
                        and foodie surprises you won’t want to miss!
                    </span>
                </p>

                <button
                    className="homepage-section follow-button" 
                    onClick={() => window.open("https://facebook.com", 
                        "_blank", 
                        "noopener", 
                        "noreferrer")}
                >
                    Unlock Offers
                </button>
            </div>
        </div>
    );
}

export default FollowUs