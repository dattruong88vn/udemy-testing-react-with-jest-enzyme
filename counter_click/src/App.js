import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div data-test="component-app">
            <h1 data-test="counter-display">The counter is currently
                <span data-test="count">{count}</span>
            </h1>
            <button data-test="increment-button">Increment</button>
        </div>
    )
};

export default App;