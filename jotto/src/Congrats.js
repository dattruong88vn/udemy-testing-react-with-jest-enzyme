// receive the success state as a prop
/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React.props
 * @returns {JSX.Element} - Rendered Component
 */

import React from 'react';

function Congrats({ success }) {

    if (success) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulation! You guessed the word!
                </span>
            </div>
        )
    }

    return (
        <div data-test="component-congrats" />
    );
}

export default Congrats;