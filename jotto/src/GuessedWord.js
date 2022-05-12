import React from 'react';
import PropTypes from "prop-types";

const GuessedWord = ({ guessedWords = [] }) => {

    let contents;
    if (guessedWords.length === 0) {
        contents = (
            <span data-test="guessed-instructions">Try to guess the secret word!</span>
        )
    }

    return (
        <div data-test="component-guessed-words">
            {contents}
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