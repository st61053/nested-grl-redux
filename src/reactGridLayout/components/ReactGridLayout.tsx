import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from '../../types/global';
import { Responsive, WidthProvider } from "react-grid-layout";

// RGL styles
import '../../../node_modules/react-resizable/css/styles.css';
import '../../../node_modules/react-grid-layout/css/styles.css';

import RGLContent from '../../database/components/RGLContent';
import { ThunkDispatch } from 'redux-thunk';
import { changeLayout } from '../actions';
import { AnyAction } from 'redux';
import Highcharts from 'highcharts';
import { Box } from '@mui/material';

const ReactGridLayout = () => {
    const layout = useSelector((state: GlobalState) => state.layouts);
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
    const ResponsiveReactGridLayout = WidthProvider(Responsive);
    const rowHeight = 50;
    const margin = 20;

    const onLayoutChange = (layout) => {
        dispatch(changeLayout({ lg: [...layout] }))
        setTimeout(() => {
            for (let i = 0; i < Highcharts.charts.length; i += 1) {
                if (Highcharts.charts[i] !== undefined) {
                    Highcharts.charts[i].reflow(); // here is the magic to update charts' looking
                }
            }
        }, 50)
    };

    return (
        <ResponsiveReactGridLayout
            className="layout"
            breakpoints={{ lg: 1200}}
            cols={{ lg: 12 }}
            layouts={layout.layout}
            margin={[margin, margin]}
            rowHeight={rowHeight}
            draggableCancel={".nested-item"}
            onLayoutChange={(layout) => onLayoutChange(layout)}
        >
            {layout && layout.layout.lg.map((item) =>
                <Box key={item.i} style={{ border: "1px solid black", backgroundColor: "white", }}><RGLContent i={item.i} /></Box>
            )}

        </ResponsiveReactGridLayout >
    )
}

export default ReactGridLayout