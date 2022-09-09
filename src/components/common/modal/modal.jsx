import "./modal.scss"
import { CloseIcon } from "../../../assets/icons";

const Modal = ({ children, modalTitle = "", onClose, isOpen = false, date }) => {

    return (isOpen && <>
        <div className="modal-background" onClick={onClose} />
        <div className="modal">
            <div>
                <div className="modal-header">
                    <h2>{modalTitle}</h2>
                    <img alt="Close Icon" src={CloseIcon} onClick={onClose} />
                </div>
                <span>{date}</span>
            </div>
            <hr />
            <div className="modal-content">
                {children}
            </div>
        </div>
    </>)
}

export default Modal;