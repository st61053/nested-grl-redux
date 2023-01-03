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
        <Box sx={{height: "100%"}}>
        {content && content.text && <Text text={content.text}/>}
        {content && content.number && <Number number={content.number}/>}
        {content && content.chart && <Chart options={content.chart}/>}
        {content && content.nested && <NestedRGL layout={content.nested} i={i}/>}
        </Box>
    )
}

export default RGLContent