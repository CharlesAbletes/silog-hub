import React, {useState} from 'react';
import './CSS/counter.css'

function Counter(){

    const [count, setCount] = useState(0);

    const updateIncrement = () => {
        setCount(count + 1);
    };

    const updateDecrement = () => {
        setCount(count - 1);
    };

    const updateReset = () => {
        setCount(0);
    }

    return( <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={updateDecrement}>Decrement</button>
                <button className="counter-button" onClick={updateReset}>Reset</button>
                <button className="counter-button" onClick={updateIncrement}>Increment</button>
            </div>);
}

export default Counter