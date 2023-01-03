import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContent } from '../selector';
import Chart from './Chart';
import NestedRGL from './NestedRGL';
import Number from './Number';
import Text from './Text';

const RGLContent = ({ i }) => {
    const content = useSelector(getContent(i));
    return (
        <Card sx={{ height: "100%" }} >
            <CardHeader sx={{ backgroundColor: "#f5f5f5", padding: "0.5em 0.5em" }} title={`item: ${i}`} disableTypography={true}>
                {/* <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", color: "white" }}
                    component="div"
                >
                    {`${i}`}
                </Typography> */}


            </CardHeader>
            <CardContent className='nested-item' sx={{ height: "100%", padding: 0, justifyContent: "center" }}>
                <Box sx={{ height: "100%" }}>
                    {content && content.text && <Text text={content.text} />}
                    {content && content.number && <Number number={content.number} />}
                    {content && content.chart && <Chart options={content.chart} />}
                    {content && content.nested && <NestedRGL layout={content.nested} i={i} />}
                </Box>
            </CardContent>
        </Card>

    )
}

export default RGLContent