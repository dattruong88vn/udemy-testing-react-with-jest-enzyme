import Congrats from "./Congrats";
import GuessedWord from "./GuessedWord";

const App = () => (
  <div data-test="app-component" className="container ">
    <h1>Jotto</h1>
    <Congrats success={true} />
    <GuessedWord
      guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
    />
  </div>
);

export default App;
