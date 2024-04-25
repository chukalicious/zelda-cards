import React from "react";
import MainLayout from "./layouts/MainLayout";
import CardsWrapper from "./components/CardsWrapper";
import CardPage from "./components/CardPage";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<CardsWrapper />} />
        <Route path=":id" element={<CardPage />} />


        <Route path="*" element={<h1>404</h1>} />
      </Route>)
  );
  return (
    <>

      <RouterProvider router={router} />

    </>
  );
};

export default App;
