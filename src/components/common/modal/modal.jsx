import "./modal.scss"
import { CloseIcon } from "../../../assets/icons";
import ReactModal from "react-modal";

const Modal = ({ children, modalTitle = "", onClose, isOpen = false, date }) => {

    return <ReactModal
        className="modal"
        overlayClassName="modal-background"
        isOpen={isOpen}
        onRequestClose={onClose}
    >
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
    </ReactModal>

}

export default Modal;