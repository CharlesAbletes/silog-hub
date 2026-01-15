import '../../CSS/card.css'

function Card({ image, title, text }) {

    return (
        <div className = "card">
            <div className= "card-inner">
                <img className="card-image" src={image} alt={title}></img>
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
}

export default Card 

/*
    const handleClick = () => console.log("OUCH!");
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    let count = 0;
    const handleClick = (name) => {
        if(count <3){
            count++;
            console.log(`${name} you clicked me ${count} time/s already!`)
        }else{
            console.log(`${name} fuck you i said stop!!!`)
        }
    };


    const handleClick = (e) => e.target.textContent = "Oh Shit! 💩";
    <button className="button" onDoubleClick={(e) => handleClick(e)}>Click Me</button>

    <button className="button">Click Me</button>
*/