import { useState } from "react";
import { Card } from "../../common";
import EditNote from "../edit-note/edit-note";
import "./note.scss";

const Note = ({...data}) => {

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return <>
    <Card title="Title" date="mm/dd/yyyy" onClick={openModal} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    <EditNote onClose={closeModal} isOpen={isOpen} />
    </>
}

export default Note;