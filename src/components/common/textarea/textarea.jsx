import "./textarea.scss"

const TextArea = ({ className = "", placeholder = "", content, onChange, value }) => {

    return <textarea
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
    >
        {content}
    </textarea>
}

export default TextArea;