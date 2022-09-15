import "./input.scss"

const Input = ({ type = "", value, className = "", onChange, placeholder }) => {

    return <input
        type={type}
        value={value}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
    />
}

export default Input;