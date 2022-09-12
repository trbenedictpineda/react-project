import "./delete-note.scss";
import { DeleteIcon } from "../../../assets/icons";

const DeleteNote = ({}) => {

    return <>
        <div className="delete-option">
            <span>Delete</span>
            <img alt="Delete Icon" src={DeleteIcon} className="delete-icon" />
        </div>
    </>
}

export default DeleteNote;