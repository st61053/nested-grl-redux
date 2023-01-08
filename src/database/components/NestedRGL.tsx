// import React, { useEffect } from 'react'
// import { Responsive, WidthProvider } from "react-grid-layout";

// // RGL styles
// import '../../../node_modules/react-resizable/css/styles.css';
// import '../../../node_modules/react-grid-layout/css/styles.css';

// import Highcharts from 'highcharts';
// import RGLContent from './RGLContent';
// import { Box } from '@mui/material';
// import { AnyAction } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeLayout } from '../../reactGridLayout/actions';
// import { GlobalState } from '../../global';
// import { changeNestedLayout } from '../actions';
// import RGLBar from './RGLBar';

// const NestedRGL = ({ layout, i }) => {
//     const ResponsiveReactGridLayout = WidthProvider(Responsive);
//     const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
//     const mainLayout = useSelector((state: GlobalState) => state.layouts);

//     const rowHeight = 50;
//     const margin = 18;

//     const minHeight = async(newLayout) => {

//         await console.log(newLayout)

//         let height = 0
//         newLayout.map((item) => {
//             if (height < item.y + item.h) {
//                 height = item.y + item.h
//             }
//         })
        
//         const minHeight = height + 1;

//         //mainLayout.layout.lg.map((item) => item.i === i && item.h < minHeight?(item.h = minHeight, item.minH = minHeight): item.i ===i?item.minH = minHeight:"");
//         mainLayout.layout.lg.map((item) => item.i === i ? (item.h = minHeight, item.minH = minHeight) : "");

//         dispatch(changeLayout(mainLayout.layout));
//     }

//     const reflowHighcharts = () => {
//         setTimeout(() => {
//             Highcharts.charts.map((chart) => chart !== undefined? chart.reflow: "")
//         }, 50)
//     }

//     const onLayoutChange = (layout) => {
//         setTimeout(() => {
//             reflowHighcharts();
//         }, 50)
//         dispatch(changeNestedLayout({ lg: layout }, i));
//     };

//     return (
//         <ResponsiveReactGridLayout
//             className="layout"

//             breakpoints={{ lg: 1200 }}
//             cols={{ lg: 12}}

//             layouts={layout.layout}
//             margin={[margin, margin]}
//             rowHeight={rowHeight}
//             isBounded={false}

//             onLayoutChange={(layout) => onLayoutChange(layout)}

//             onResizeStop={(layout) => minHeight(layout)}
//             onDragStop={(layout) => minHeight(layout)}
//         >
//             {layout && layout.layout.lg.map((item) =>
//                 <Box className='nested-item' key={item.i} ><RGLContent i={item.i} /></Box>
//             )}

//         </ResponsiveReactGridLayout >
//     )
// }

// export default NestedRGL