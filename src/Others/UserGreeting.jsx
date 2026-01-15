import PropTypes from 'prop-types';
import './CSS/usergreeting.css'

function UserGreeting({username, isLoggedIn}){

    const welcomeMessage = <h2 className="welcome-text">Welcome, {username}!</h2>
    const loginPrompt = <h2 className="relogin-text">Please log in to continue</h2>
    
    const logInStatus = isLoggedIn  ? welcomeMessage : loginPrompt;

    return (
      <>
      {logInStatus}
      </>
    )
}

// PropTypes for type checking
UserGreeting.propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

// Default props if none are provided
UserGreeting.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
};

export default UserGreeting