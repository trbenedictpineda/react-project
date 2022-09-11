import { Button, Modal, TextArea } from "../../common";
import "./edit-note.scss"

const EditNote = ({onClose, isOpen = false, ...data}) => {

    return <Modal modalTitle="Title" date="mm/dd/yyyy" onClose={onClose} isOpen={isOpen} >
            <TextArea />
            <Button text="Update" />
        </Modal>
    
}

export default EditNote;