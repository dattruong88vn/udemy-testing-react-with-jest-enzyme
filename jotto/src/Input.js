import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
};

function Input({ secretWord }) {
    const [currentGuess, setCurrentGuess] = React.useState('');

    const handleChange = (e) => {
        setCurrentGuess(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentGuess("");
    }

    let warning;
    if (!secretWord) {
        warning = (
            <span>

            </span>
        )
    }

    return (
        <div data-test="component-input">
            <form className='form-inline'>
                <input data-test="input-box" className='mb-2 mx-sm-3' type="text" placeholder='enter guess' value={currentGuess} onChange={handleChange} />
                <button data-test="submit-button" className='btn btn-primary mb-2' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Input;