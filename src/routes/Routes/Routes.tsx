import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ContactsPage from "../../pages/ContactsPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage";
import routes from "../../routes";
import { useAppSelector } from "../../hooks/hooks";

const RoutesApp = () => {
  const userToken = useAppSelector((state) => state.user.user.token);
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route
        path={routes.contacts}
        element={userToken ? <ContactsPage /> : <Navigate to="/login" />}
      />
      <Route path={routes.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesApp;
