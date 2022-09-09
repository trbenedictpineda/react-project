import "./App.scss"
import { DownIcon } from "./assets/icons";
import { Button } from "./components/common";
import AddNote from "./components/modules/add-note/add-note";
import NotesList from "./components/modules/notes-list/notes-list";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Remarque</h1>
      </div>
      <AddNote />
      <Button text="Sort By" suffixIcon={DownIcon}/>
      <NotesList />
    </div>
  );
}

export default App;
