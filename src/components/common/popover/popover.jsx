import "./popover.scss";

const Popover = ({ isOpen = false, children, onClose }) => {

    return (isOpen &&
        <>
            <div className="popover-overlay" onClick={onClose} />
            <div className="popover">
                {children}
            </div>
        </>
    )
}

export default Popover;