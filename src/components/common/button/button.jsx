import "./button.scss"

const Button = ({ text = "", onClick, className = "", type = "", prefixIcon, suffixIcon }) => {

    return <button
        className={`${!prefixIcon && !suffixIcon ? "no-button-icon" : "" } ${className}`}
        onClick={onClick}
        type={type}
    >
        {prefixIcon ? <img alt="Icon" src={prefixIcon} className="button-icon-right" /> : null}
        {text}
        {suffixIcon ? <img alt="Icon" src={suffixIcon} className="button-icon-left" /> : null }
    </button>
}

export default Button;