import "./notes-list.scss"
import { FixedSizeGrid as Grid } from 'react-window';
import { Card } from "../../common";

const NotesList = () => {

    const Cell = ({ style }) => (
        <div className="cell" style={style}>
            <Card title="Title" date="mm/dd/yyyy" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
    );

    return <Grid
        columnCount={3}
        columnWidth={400}
        height={400}
        rowCount={9}
        rowHeight={240}
        width={1200}
        className="grid-container"
    >
        {Cell}
    </Grid>;
}

export default NotesList;