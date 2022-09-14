import "./textarea.scss"

const TextArea = ({ className = "", placeholder = "", content }) => {

    return <textarea
        className={`${className}`}
        placeholder={placeholder}
    >
        {content}
    </textarea>
}

export default TextArea;