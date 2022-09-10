import "./popover.scss";

const Popover = ({isOpen = false, children}) => {

    return (isOpen && <div>
        {children}
    </div>)
}

export default Popover;