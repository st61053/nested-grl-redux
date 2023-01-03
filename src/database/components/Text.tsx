import { Typography } from '@mui/material'
import React from 'react'

const Text = ({ text }) => {
    return (
        <Typography
            variant="h6"
            style={{ fontWeight: "bold" }}
            component="div"
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
        >
            {text}
        </Typography>
    )
}

export default Text