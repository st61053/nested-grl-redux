import { Box, Card, CardContent, CardHeader } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { getWidget } from '../selectors';
import Chart from './Chart';

const Widget = ({ desktopId, layoutId, w }) => {
  const widget = useSelector(getWidget(desktopId, layoutId));

  return (
    <Card sx={{ height: "100%" }} >
      <CardHeader sx={{ backgroundColor: "#f5f5f5", padding: "0.5em 0.5em", cursor: "grab" }} title={`${w}`} disableTypography={true} />
      <CardContent className='nested-item' sx={{ height: "100%", padding: 0, justifyContent: "center" }}>
        <Box sx={{ height: "100%" }}>
          {widget && widget.chart && <Chart options={widget.chart} />}
        </Box>
      </CardContent>
    </Card>
  )
}

export default Widget