import "./delete-note.scss";
import { DeleteIcon } from "../../../assets/icons";
import { useApi } from "../../../hooks";

const DeleteNote = ({reloadList = () => {}, noteId}) => {

    const { sendRequest } = useApi(`http://localhost:5000/note/delete-note/${noteId}`, "DELETE")

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await sendRequest()
            reloadList()
        } catch (error) {
            console.error(error)
        }
    }

    return <>
        <div className="delete-option" onClick={handleSubmit}>
            <span>Delete</span>
            <img alt="Delete Icon" src={DeleteIcon} className="delete-icon" />
        </div>
    </>
}

export default DeleteNote;