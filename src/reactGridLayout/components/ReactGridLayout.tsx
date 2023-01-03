import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from '../../global';
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
    const margin = 18;

    const reflowHighcharts = () => {
        setTimeout(() => {
            Highcharts.charts.map((chart) => chart !== undefined? chart.reflow: "")
        }, 50)
    }

    const onLayoutChange = (layout) => {
        dispatch(changeLayout({ lg: [...layout] }))
        reflowHighcharts()
    };

    React.useEffect(() => {
        const handleResize = () => {
            dispatch(changeLayout(layout.layout))
            reflowHighcharts()
        }
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <ResponsiveReactGridLayout
            className="layout"
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            layouts={layout.layout}
            margin={[margin, margin]}
            rowHeight={rowHeight}
            draggableCancel={".nested-item"}
            onResizeStop={(layout) => onLayoutChange(layout)}
            onDragStop={(layout) => onLayoutChange(layout)}
        >
            {layout && layout.layout.lg.map((item) =>
                <Box key={item.i} ><RGLContent i={item.i} /></Box>
            )}

        </ResponsiveReactGridLayout >
    )
}

export default ReactGridLayout