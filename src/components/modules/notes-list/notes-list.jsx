import "./notes-list.scss"
import { FixedSizeGrid as Grid } from 'react-window';
import { Button } from "../../common";
import { DownIcon } from "../../../assets/icons";
import { useState, useEffect } from 'react'
import Note from "../note/note";
import { useApi } from "../../../hooks";

const NotesList = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const [notesList, setNotesList] = useState([])

    const { responseData, isLoading } = useApi("http://localhost:5000/note")

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
    }, [])

    useEffect(() => {
        if (!isLoading) {
            setNotesList(responseData)
        }
        return () => {
            setNotesList([])
        }
    }, [isLoading, responseData])


    return <>
        <Button text="Sort By" suffixIcon={DownIcon} className="sort-by-button" />
        {!isLoading && <Grid
            columnCount={1}
            columnWidth={width > 768 ? (width - 40) / 3 : (width - 40) / 1}
            height={400}
            rowCount={notesList.length}
            rowHeight={240}
            width={width}
            className="grid-container"
            itemData={notesList}
        >
            {({ data, style, rowIndex, }) => {
                return (
                    <div className="cell" style={style}>
                        <Note {...data[rowIndex]} />
                    </div>
                )
            }}
        </Grid>}
    </>

}

export default NotesList;