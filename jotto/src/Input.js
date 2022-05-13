import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
};

function Input({ secretWord }) {
    let warning;
    if (!secretWord) {
        warning = (
            <span>

            </span>
        )
    }

    return (
        <div data-test="component-input">
            {warning}
        </div>
    );
}

export default Input;