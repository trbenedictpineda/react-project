import { Button, Input, Modal, TextArea } from "../../common";
import "./edit-note.scss"
import { useState } from "react";
import { useApi } from "../../../hooks";

const EditNote = ({ onClose, isOpen = false, reloadList, ...data }) => {

    const { note_title, note_date, note_content, note_id } = data

    const [title, setTitle] = useState(note_title)
    const [content, setContent] = useState(note_content)

    const { sendRequest } = useApi(`http://localhost:5000/note/update-note/${note_id}`, "PUT",
        {
            title,
            content,
        })

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
            onClose()
        } catch (error) {
            console.error(error)
        }
    }

    return <Modal
        modalTitle={<Input value={title} onChange={handleTitle} className="modal-title" />}
        date={note_date}
        onClose={onClose}
        isOpen={isOpen} >
        <TextArea value={content} onChange={handleContent} className="edit-note-textarea" />
        <Button text="Update" className="update-button" onClick={handleSubmit} />
    </Modal>

}

export default EditNote;