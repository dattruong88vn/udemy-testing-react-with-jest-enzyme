import React from "react";
import Congrats from "./Congrats";
import GuessedWord from "./GuessedWord";
import Input from "./Input";

const App = () => {
  const secretWord = "party";
  const success = false;
  const guessedWords = [];

  return (
    <div data-test="app-component" className="container ">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWord guessedWords={guessedWords} />
    </div>
  );
};

export default App;
