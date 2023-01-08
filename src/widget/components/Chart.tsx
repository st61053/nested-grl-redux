import React, { useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Box } from '@mui/material';
import { Height } from '@mui/icons-material';

const Chart = ({ options }) => {

    return (
        <Box sx={{height: "100%", display: "flex", justifyContent: "center"}}>
            <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { height: "100%", width: "95%", } }} />
        </Box>
    )
}

export default Chart