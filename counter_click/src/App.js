import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const [error, setError] = useState("");

    const handleIncrement = () => {
        setCount(count + 1);
        setError("")
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setError("The counter can't go below zero")
        }
    }

    return (
        <div data-test="component-app">
            <h1 data-test="counter-display">The counter is currently &nbsp;
                <span data-test="count">{count}</span>
            </h1>
            <button data-test="increment-button" onClick={handleIncrement}>Increment</button>
            <button data-test="decrement-button" onClick={handleDecrement}>Decrement</button>

            <p data-test="error">{error}</p>
        </div>
    )
};

export default App;