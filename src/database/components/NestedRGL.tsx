import React from 'react'
import { Responsive, WidthProvider } from "react-grid-layout";

// RGL styles
import '../../../node_modules/react-resizable/css/styles.css';
import '../../../node_modules/react-grid-layout/css/styles.css';

import Highcharts from 'highcharts';
import RGLContent from './RGLContent';
import { Box } from '@mui/material';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { changeLayout } from '../../reactGridLayout/actions';
import { GlobalState } from '../../types/global';
import { changeNestedLayout } from '../actions';

const NestedRGL = ({layout, i}) => {
    const ResponsiveReactGridLayout = WidthProvider(Responsive);
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
    const mainLayout = useSelector((state: GlobalState) => state.layouts);

    const rowHeight = 50;
    const margin = 20;

    const minHeight = (newLayout) => {
        
        let height = 0
        newLayout.map((item) => {
          if (height < item.y + item.h) {
            height = item.y + item.h
          }
        })

        const minHeight = height + 1;

        mainLayout.layout.lg.map((item) => item.i === i && item.h < minHeight?(item.h = minHeight, item.minH = minHeight): item.i ===i?item.minH = minHeight:"");
        dispatch(changeLayout(mainLayout.layout));
      }

    const onLayoutChange = (layout) => {
        setTimeout(() => {
            for (let i = 0; i < Highcharts.charts.length; i += 1) {
                if (Highcharts.charts[i] !== undefined) {
                    Highcharts.charts[i].reflow(); // here is the magic to update charts' looking
                }
            }
        }, 50)
        dispatch(changeNestedLayout({lg: layout}, i));
    };
    
  return (
    <ResponsiveReactGridLayout
    className="layout"
    breakpoints={{ lg: 1200 }}
    cols={{ lg: 12 }}
    layouts={layout.layout}
    margin={[margin, margin]}
    rowHeight={rowHeight}
    isBounded={true}
    onLayoutChange={(layout) => onLayoutChange(layout)}
    onResizeStop={(layout) =>  minHeight(layout)}
    onDragStop={(layout) =>  minHeight(layout)}
>
    {layout && layout.layout.lg.map((item) =>
        <Box className='nested-item' key={item.i} style={{ border: "1px solid blue", backgroundColor: "white", overflow: "hidden" }}><RGLContent i={item.i} /></Box>
    )}

</ResponsiveReactGridLayout >
  )
}

export default NestedRGL