import "./textarea.scss"

const TextArea = ({ className = "", placeholder = "", content, onChange }) => {

    return <textarea
        className={className}
        placeholder={placeholder}
        onChange={onChange}
    >
        {content}
    </textarea>
}

export default TextArea;