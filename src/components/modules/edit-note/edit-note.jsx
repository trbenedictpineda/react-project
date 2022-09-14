import { Button, Modal, TextArea } from "../../common";
import "./edit-note.scss"

const EditNote = ({onClose, isOpen = false, ...data}) => {

    const { note_title, note_date, note_content } = data

    return <Modal modalTitle={note_title} date={note_date} onClose={onClose} isOpen={isOpen} >
            <TextArea content={note_content} />
            <Button text="Update" className="update-button" />
        </Modal>
    
}

export default EditNote;