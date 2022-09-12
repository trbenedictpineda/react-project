import { useState } from "react";
import { Button, Modal, TextArea } from "../../common";
import { AddIcon } from "../../../assets/icons";
import "./add-note.scss"

const AddNote = () => {

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return <>
        <Button text="Add" prefixIcon={AddIcon} onClick={openModal} type="button" className="open-add-note-button" />
        <Modal modalTitle="Title" onClose={closeModal} isOpen={isOpen} date="mm/dd/yyyy">
            <TextArea placeholder="Enter text here..." className="add-note-textarea" />
            <Button text="Add Note" className="add-note-button" />
        </Modal>
    </>

}

export default AddNote;