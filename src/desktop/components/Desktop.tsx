import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Responsive, WidthProvider } from "react-grid-layout";

// RGL styles
import '../../../node_modules/react-resizable/css/styles.css';
import '../../../node_modules/react-grid-layout/css/styles.css';

import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Highcharts from 'highcharts';
import { Box, debounce, useMediaQuery, useTheme } from '@mui/material';
import { getDesktop } from '../selectors';
import { changeLayout } from '../actions';
import Widget from '../../widget/components/Widget';

const Desktop = ({ id }) => {
	const desktop = useSelector(getDesktop(id));

	const [layout, setLayout] = useState(desktop.layout);

	// const theme = useTheme();
	// const isMdUp = useMediaQuery(theme.breakpoints.down("md"));
	// React.useEffect(() => {
	//   console.log(isMdUp);
	// }, [isMdUp])


	const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
	const ResponsiveReactGridLayout = WidthProvider(Responsive);
	const rowHeight = 50;
	const margin = 18;

	const reflowHighcharts = () => {
		setTimeout(() => {
			Highcharts.charts.map((chart) => chart !== undefined ? chart.reflow : "")
		}, 50)
	}

	const onLayoutChange = (newLayout) => {
		dispatch(changeLayout(id, { md: [...newLayout], lg: [...newLayout] }))
		setLayout({ md: [...newLayout], lg: [...newLayout] })
		reflowHighcharts()
	};

	React.useEffect(() => {
		const handleResize = () => {
			useMemo(() => debounce((e) => dispatch(changeLayout(id, layout)), 500), [])
			reflowHighcharts()
		}
		window.addEventListener('resize', handleResize)
	}, [])

	console.log(layout);

	return (
		<ResponsiveReactGridLayout
			className="layout"
			breakpoints={{ lg: 900, md: 0 }}
			cols={{ lg: 12, md: 6 }}
			layouts={layout}
			margin={[margin, margin]}
			rowHeight={rowHeight}
			draggableCancel={".nested-item"}
			onResizeStop={(layout) => onLayoutChange(layout)}
			onDragStop={(layout) => onLayoutChange(layout)}
			onBreakpointChange={(newBreakpoint, newCols) => console.log(newBreakpoint, newCols)}
		>
			{desktop.layout && desktop.layout.lg.map((item) =>
				<Box key={item.i} >
					<Widget desktopId={id} layoutId={item.i} w={item.w} />
				</Box>
			)}

		</ResponsiveReactGridLayout >
	)
}

export default Desktop
