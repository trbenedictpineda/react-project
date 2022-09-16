import "./App.scss"
import NotesList from "./components/modules/notes-list/notes-list";
import ReactModal  from "react-modal";

const App = () => {

  ReactModal.setAppElement(document.getElementById('root'));

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
