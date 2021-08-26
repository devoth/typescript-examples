import TypingFunctions from "./components/TypingFunctions";
import TypingNumbers from "./components/TypingNumbers";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Typescript examples</h1>
      <TypingFunctions />
      <TypingNumbers />
    </div>
  );
}
