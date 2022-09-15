import "./App.scss"
import NotesList from "./components/modules/notes-list/notes-list";


const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Remarque</h1>
      </div>
      <NotesList />
    </div>
  );
}

export default App;
