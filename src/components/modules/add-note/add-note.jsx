import { useState } from "react";
import { Button, Input, Modal, TextArea } from "../../common";
import { AddIcon } from "../../../assets/icons";
import "./add-note.scss"
import useApi from "../../../hooks/useApi";

const AddNote = ({ reloadList = () => { } }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    const { sendRequest } = useApi("http://localhost:5000/note/add-note", "POST",
        {
            title,
            content,
        })

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setTitle("")
        setContent("")
        setIsOpen(false)
    }

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleContent = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await sendRequest()
            reloadList()
            closeModal()
        } catch (error) {
            console.error(error)
        }
    }

    return <>
        <Button
            text="Add"
            prefixIcon={AddIcon}
            onClick={openModal}
            type="button"
            className="open-add-note-button"
        />
        <Modal
            modalTitle={<Input
                placeholder="Enter title here..."
                onChange={handleTitle}
                className="modal-title"
                required
            />}
            onClose={closeModal}
            isOpen={isOpen}
            onSubmit={handleSubmit}
            >
            <TextArea
                placeholder="Enter text here..."
                className="add-note-textarea"
                onChange={handleContent}
                required
            />
            <Button
                text="Add Note"
                type="submit"
                className="add-note-button"
            />
        </Modal>

    </>

}

export default AddNote;