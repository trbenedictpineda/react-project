import { Button, Modal, TextArea } from "../../common";
import "./edit-note.scss"

const EditNote = ({onClose, isOpen = false, ...data}) => {

    return <>
        <Modal onClose={onClose} isOpen={isOpen} >
            <TextArea />
            <Button />
        </Modal>
    </>
}

export default EditNote;