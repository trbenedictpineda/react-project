import "./notes-list.scss"
import { FixedSizeGrid as Grid } from 'react-window';
import { Loader } from "../../common";
import { useState, useEffect } from 'react'
import Note from "../note/note";
import { useApi } from "../../../hooks";
import AddNote from "../add-note/add-note";

const NotesList = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const [notesList, setNotesList] = useState([])

    const { responseData, isLoading, sendRequest } = useApi("http://localhost:5000/note")

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
    }, [])

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    useEffect(() => {
        if (!isLoading) {
            setNotesList(responseData)
        }
        return () => {
            setNotesList([])
        }
    }, [isLoading, responseData])


    return <>
        <AddNote reloadList={sendRequest} />
        {isLoading ? <Loader /> : <Grid
            columnCount={width > 768 ? 3 : 1}
            columnWidth={width > 768 ? (width - 40) / 3 : (width - 40) / 1}
            height={400}
            rowCount={Math.ceil(notesList.length / 3)}
            rowHeight={240}
            width={width}
            className="grid-container"
            itemData={notesList}
        >
            {({ data, style, rowIndex, columnIndex }) => {

                return (
                    <div className="cell" style={style}>
                        <Note
                            reloadList={sendRequest}
                            {...data[width > 768 ? (rowIndex * 3 + columnIndex) : rowIndex]} />
                    </div>
                )
            }}
        </Grid>}
    </>

}

export default NotesList;