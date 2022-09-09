import "./textarea.scss"

const TextArea = ({className = "", placeholder = ""}) => {

    return <textarea 
    className={`${className}`}
    placeholder={placeholder}
     />
}

export default TextArea;