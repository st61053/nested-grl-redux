import React from "react";
import { Routes, Route } from "react-router-dom";
import ReactGridLayout from "../../reactGridLayout/components/ReactGridLayout";

const ROUTES = [
  { path: "/", component: <ReactGridLayout /> },
];

console.log(ROUTES);


const Router = () => {
  return (
    <Routes>
      {ROUTES.map((route, id) => (
        <Route key={`route_${id}`} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default Router;
