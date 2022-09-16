import "./textarea.scss"

const TextArea = ({
    className = "",
    placeholder = "",
    content,
    onChange,
    value,
    readOnly = false,
    required = false
}) => {

    return <textarea
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
        required={required}
    >
        {content}
    </textarea>
}

export default TextArea;