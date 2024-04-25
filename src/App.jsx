import React from "react";
import MainLayout from "./layouts/MainLayout";
import CardsWrapper from "./components/CardsWrapper";
import CardPage from "./components/CardPage";
import Error from "./pages/Error";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<CardsWrapper />} />
        <Route path="/item/:id" element={<CardPage />} />


        <Route path="/*" element={<Error />} />
      </Route>)
  );
  return (
    <>

      <RouterProvider router={router} />

    </>
  );
};

export default App;
