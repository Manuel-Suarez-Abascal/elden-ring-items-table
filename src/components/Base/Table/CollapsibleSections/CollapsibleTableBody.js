import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

const CollapsibleTableBody = ({ items }) => {
    const { attack, defence, requiredAttributes, scalesWith } = items.item;

    return (
        <TableBody>
            <TableRow>
                <TableCell>
                    {
                        requiredAttributes
                            ? requiredAttributes.map((attribute, index) => {
                                    const { name, amount } = attribute;

                                    return (
                                        <div key={index}>
                                            {name}: {amount}
                                        </div>
                                    )
                                })
                            : 'No required attributes available'
                    }
                </TableCell>
                <TableCell>
                    {
                        attack
                            ? attack.map((attackStat, index) => {
                                const { name, amount } = attackStat;

                                return (
                                    <div key={index}>
                                        {name}: {amount}
                                    </div>
                                )
                            })
                            : 'No attack stats available'
                    }
                </TableCell>
                <TableCell>
                    {
                        defence
                            ? defence.map((defenseStat, index) => {
                                const { name, amount } = defenseStat;

                                return (
                                    <div key={index}>
                                        {name}: {amount}
                                    </div>
                                )
                            })
                            : 'No defense stats available'
                    }
                </TableCell>
                <TableCell>
                    {
                        scalesWith
                            ? scalesWith.map((scales, index) => {
                                const { name } = scales;

                                return (
                                    <div key={index}>
                                        {name}
                                    </div>
                                )
                            })
                            : 'No scales with available'
                    }
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default CollapsibleTableBody
