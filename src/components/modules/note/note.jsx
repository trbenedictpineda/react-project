import { useState } from "react";
import { Card } from "../../common";
import EditNote from "../edit-note/edit-note";
import DeleteNote from "../delete-note/delete-note";
import "./note.scss";

const Note = ({ ...data }) => {
    
    const { note_title, note_date, note_content } = data

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return <>
        <Card
            title={note_title}
            date={note_date}
            onClick={openModal}
            content={note_content}
            optionsContent={<DeleteNote />}
        />
        <EditNote onClose={closeModal} isOpen={isOpen} {...data} />
    </>
}

export default Note;