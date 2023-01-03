import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';
import { Button, Typography } from '@mui/material';
import { getTheme, MODE } from '../themes';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { increaseCounter } from '../actions/exampleAction';
import { GlobalState } from '../types/global';
import LogoSvg from 'sharedImages/logo.svg';
import logoPng from 'sharedImages/logo2.png';
import Map from '../maps/olMap';
import '../main.css';

import ReactGridLayout from '../reactGridLayout/components/ReactGridLayout';


export const App = () => {
  //const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  document.title = `RGL v4-${process.env.VERSION}`;
  return (
    <ThemeProvider theme={getTheme(MODE.LIGHT)}>
      <ReactGridLayout />
    </ThemeProvider>
  );
};
