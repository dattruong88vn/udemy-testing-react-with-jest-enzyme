import React from 'react';
import PropTypes from "prop-types";

const GuessedWord = (props) => {
    return (
        <div>

        </div>
    );
}

GuessedWord.propTypes = {
    guessedWords: PropTypes.arrayOf(PropTypes.shape({
        guessedWord: PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired
    }))
}

export default GuessedWord;