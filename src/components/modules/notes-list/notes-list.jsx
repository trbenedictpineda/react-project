import "./notes-list.scss"
import { FixedSizeGrid as Grid } from 'react-window';
import { Button } from "../../common";
import { DownIcon } from "../../../assets/icons";
import { useState, useEffect } from 'react'
import Note from "../note/note";

const NotesList = () => {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
    }, [])

    const Cell = ({ style }) => (
        <div className="cell" style={style}>
            <Note />
        </div>
    );

    return <>
        <Button text="Sort By" suffixIcon={DownIcon} />
        <Grid
            columnCount={width > 768 ? 3 : 1}
            columnWidth={width > 768 ? (width - 40) / 3 : (width - 40) / 1}
            height={400}
            rowCount={10}
            rowHeight={240}
            width={width}
            className="grid-container"
        >
            {Cell}
        </Grid>;
    </>

}

export default NotesList;