import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const handleSetCount = () => {
        setCount(count + 1);
    }

    return (
        <div data-test="component-app">
            <h1 data-test="counter-display">The counter is currently &nbsp;
                <span data-test="count">{count}</span>
            </h1>
            <button data-test="increment-button" onClick={handleSetCount}>Increment</button>
        </div>
    )
};

export default App;