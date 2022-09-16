import "./input.scss"

const Input = ({
    type = "",
    value,
    className = "",
    onChange,
    placeholder,
    required = false }) => {
        
    return <input
        type={type}
        value={value}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
    />
}

export default Input;