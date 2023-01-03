import { Typography } from '@mui/material'
import React from 'react'

const Number = ({ number }) => {
    return (
        <Typography
            variant="h3"
            style={{ fontWeight: "bold" }}
            component="div"
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
        >
            {number}
        </Typography>
    )
}

export default Number