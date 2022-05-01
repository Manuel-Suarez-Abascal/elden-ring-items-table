import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const CollapsibleTableHead = () => {
    return (
        <TableHead sx={{ backgroundColor: "#000" }}>
            <TableRow >
                <TableCell
                    sx={{ color: "#fff" }} 
                    align="left"
                >
                    Required Attributes
                </TableCell>
                <TableCell
                    sx={{ color: "#fff" }} 
                    align="left"
                >
                    Attack
                </TableCell>
                <TableCell
                    sx={{ color: "#fff" }} 
                    align="left"
                >
                    Defense
                </TableCell>
                <TableCell
                    sx={{ color: "#fff" }} 
                    align="left"
                >
                    Scale with
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

export default CollapsibleTableHead
