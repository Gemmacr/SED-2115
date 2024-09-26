import './App.css';

import Name from "./component/Name";


function App() {
console.log("come on guys keep up");
return (
    <div>
      <h1>Gemma</h1>
      <Name />
    </div>
  );
}

export default App;

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function MyApp() {
  return (
    <div>
      <h1>View Music Chart Table</h1>
      <MyButton />
    </div>
  );
}

