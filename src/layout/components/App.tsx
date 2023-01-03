import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme, MODE } from '../../themes';
import { createGlobalStyle } from "styled-components";
import '../../main.css';

import ReactGridLayout from '../../reactGridLayout/components/ReactGridLayout';
import Layout from './Layout';
import Router from '../../pages/components/Router';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: 100%;
    height: 44px;
    padding: 6px
  }
  .scale-line {
    background:rgba(255, 255, 255, .7);
    border-radius:4px;
    bottom: 15px;
    right:35px;
    padding:2px;
    position: absolute;
    font-family: Roboto, sans-serif;
  }
  .scale-line > .scale-line-inner {
    border: 1.5px solid black;
    border-top: none;
    color: black;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    margin: 1px;
  }
  .ol-dragzoom {
    border-color: rgb(97, 242, 245);
  }
  .tooltip::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -8px;
      border-width: 8px;
      border-style: solid;
      border-color: white transparent transparent transparent;
    }
  .highcharts-credits{
    display: none;
  }
`;


export const App = () => {
  document.title = `RGL v4-${process.env.VERSION}`;
  return (
    <ThemeProvider theme={getTheme(MODE.LIGHT)}>
      <GlobalStyle />
      <div style={{ width: "100%", minHeight: "100vh" }}>
        <Layout >
          <Router />
        </Layout>
      </div>
    </ThemeProvider>
  );
};
