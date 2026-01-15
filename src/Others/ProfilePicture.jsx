
function ProfilePicture(){

    const imageUrl = './src/assets/profile.jpg';

    const handleClick = (e) => {
        e.target.style.display = "none";
        alert("Poof! No more responsibilities.");
    };

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)
}

export default ProfilePicture