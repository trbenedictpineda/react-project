import "./modal.scss"
import { CloseIcon } from "../../../assets/icons";
import ReactModal from "react-modal";

const Modal = ({ 
    children, 
    modalTitle, 
    onClose, 
    isOpen = false, 
    date = "", 
    onSubmit = () => {} 
}) => {

    return <ReactModal
        className="modal"
        overlayClassName="modal-background"
        isOpen={isOpen}
        onRequestClose={onClose}
    >
        <form onSubmit={onSubmit}>
            <div>
                <div className="modal-header">
                    {modalTitle}
                    <img alt="Close Icon" src={CloseIcon} onClick={onClose} />
                </div>
                <span>{date.replace('Z', ' ').replace('T', ' ').replace('.000', '')}</span>
            </div>
            <hr />
            <div className="modal-content">
                {children}
            </div>
        </form>
    </ReactModal>

}

export default Modal;