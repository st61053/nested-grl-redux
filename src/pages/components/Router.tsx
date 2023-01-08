import React from "react";
import { Routes, Route } from "react-router-dom";
import Desktop from "../../desktop/components/Desktop";

const ROUTES = [
  { path: "/", component: <Desktop id={1} /> },
];

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
