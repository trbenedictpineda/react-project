import { Button, Input, Modal, TextArea } from "../../common";
import "./edit-note.scss"
import { useState } from "react";
import { useApi } from "../../../hooks";

const EditNote = ({ onClose, isOpen = false, ...data }) => {

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

    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            sendRequest()
            //reloadList()
        } catch (error) {
            console.error(error)
        }
    }

    return <Modal
        modalTitle={<Input value={title} onChange={handleTitle} />}
        date={note_date} onClose={onClose}
        isOpen={isOpen} >
        <TextArea value={content} onChange={handleContent} />
        <Button text="Update" className="update-button" onClick={handleSubmit} />
    </Modal>

}

export default EditNote;