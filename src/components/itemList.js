import React, { useEffect, useState, useRef } from "react"
import BaseTableBody from "./Base/Table/BaseTableBody"
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Select from '@mui/material/Select'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import { InputUnstyled } from '@mui/base'
import { upperCaseFirstLetter } from '../utils/utils.js'

const ItemList = () => {
    const [filteredItemsByName, setFilteredItemsByName] = useState([])
    const [itemType, setItemType] = useState('weapons')
    const [items, setItems] = useState([])
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('weight')
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const inputSearch = useRef(null)

    useEffect(() => {
        const url = `https://eldenring.fanapis.com/api/${itemType}?limit=100&page=`

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()

                return setItems(json.data)
            } catch (error) {
                console.log("error", error)
            }
        }

        fetchData()
    }, [itemType])

    const clearSearchInput = domInput => domInput.children[0].value = ''

    const handleChange = e => {
        setItemType(e.target.value)
        setFilteredItemsByName([])
        clearSearchInput(inputSearch.current)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const  descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
          return -1
        }
        if (b[orderBy] > a[orderBy]) {
          return 1
        }
        return 0
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy)
    }

    const EnhancedTableHead = (props) => {
        const { order, orderBy, onRequestSort, label } =
            props

        const createSortHandler = (property) => (event) => {
            onRequestSort(event, property)
    }

    return (
            <TableHead>
                <TableRow>
                    <TableSortLabel
                        active={orderBy === 'weight'}
                        direction={orderBy === 'weight'? order : 'asc'}
                        onClick={createSortHandler('weight')}
                    >
                        <TableCell align="right">{label}</TableCell>
                    </TableSortLabel>
                </TableRow>
            </TableHead>
        )
    }

    const searchItemByName = e => {
        const search = e.target.value
        const filteredItemsByName = items.filter(item => item.name.includes(upperCaseFirstLetter(search)))

        setFilteredItemsByName(filteredItemsByName)
    }

    return (
        <>
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <InputUnstyled
                    align="left"
                    placeholder="Search item by name..."
                    onChange={searchItemByName}
                    ref={inputSearch}
                />
                 <Box>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Items</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={itemType}
                            label="Items"
                            onChange={handleChange}
                        >
                            <MenuItem value='shields'>shields</MenuItem>
                            <MenuItem value='weapons'>weapons</MenuItem>
                            { /* TODO: add other items here */ }
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                label="Weight"
                            />
                        </TableRow>
                    </TableHead>
                    {
                        filteredItemsByName.length > 0
                            ? filteredItemsByName.sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => <BaseTableBody key={index} item={item} /> )
                            : items && items.sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => <BaseTableBody key={index} item={item} /> )
                    }
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                component="div"
                count={items.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default ItemList
