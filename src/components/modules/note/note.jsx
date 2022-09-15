import { useState } from "react";
import { Card } from "../../common";
import EditNote from "../edit-note/edit-note";
import DeleteNote from "../delete-note/delete-note";
import "./note.scss";

const Note = ({ reloadList, ...data }) => {

    const { note_title, note_date, note_content, note_id } = data

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return note_id && <>
        <Card
            title={note_title}
            date={note_date}
            onClick={openModal}
            content={note_content}
            optionsContent={<DeleteNote
                noteId={note_id}
                reloadList={reloadList}

            />}
        />
        <EditNote
            onClose={closeModal}
            isOpen={isOpen}
            reloadList={reloadList}
            {...data} />
    </>
}

export default Note;