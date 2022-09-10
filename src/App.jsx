import "./App.scss"
import AddNote from "./components/modules/add-note/add-note";
import NotesList from "./components/modules/notes-list/notes-list";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Remarque</h1>
      </div>
      <AddNote />
      <NotesList />
    </div>
  );
}

export default App;
