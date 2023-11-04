import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import functions
import { routes } from "./routes";

export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
