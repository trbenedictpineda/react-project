import "./textarea.scss"

const TextArea = ({
    className = "",
    placeholder = "",
    content,
    onChange,
    value,
    readOnly = false
}) => {

    return <textarea
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
    >
        {content}
    </textarea>
}

export default TextArea;