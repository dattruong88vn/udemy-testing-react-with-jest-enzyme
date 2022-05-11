// receive the success state as a prop
/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React.props
 * @returns {JSX.Element} - Rendered Component
 */

import PropTypes from 'prop-types';
import React from 'react';

const Congrats = ({ success }) => {
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

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;