
import Box from '@mui/material/Box';
import CollapsibleTableBody from './CollapsibleTableBody'
import CollapsibleTableHead from './CollapsibleTableHead'
import Table from '@mui/material/Table'

const CollapsibleTableSection = props => {
    return (
        <Box>
            <Table aria-label="purchases">
                <CollapsibleTableHead />
                <CollapsibleTableBody  items={props} />
            </Table>
        </Box>
    )
};

export default CollapsibleTableSection
