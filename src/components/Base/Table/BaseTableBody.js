import Avatar from '@mui/material/Avatar'
import Collapse from '@mui/material/Collapse'
import CollapsibleTableSection from './CollapsibleSections/CollapsibleTableSection'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import React, { useState } from "react"
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

const BaseTableBody = ({ item }) => {
    const { category, description, image, index, name, weight } = item
    const [open, setOpen] = useState(false)

    return (
        <TableBody>
            <TableRow
                key={index}
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                
                <TableCell align="left">
                    <Avatar
                        alt={description}
                        src={image}
                    />
                    <div>{name}</div>
                </TableCell>
                <TableCell align="left">{category}</TableCell>
                <TableCell align="left">{description}</TableCell>
                <TableCell align="left">{weight}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ padding: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <CollapsibleTableSection key={index} item={item} />
                    </Collapse>
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default BaseTableBody
