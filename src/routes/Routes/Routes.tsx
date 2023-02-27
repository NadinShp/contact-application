import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import routes from "../../routes";
import { useAppSelector } from "../../hooks/hooks";
import Loader from "../../components/Loader";

const HomePage = lazy(() => import("../../pages/HomePage" /*webpackChunkName: "home-page" */));
const ContactsPage = lazy(
  () => import("../../pages/ContactsPage" /*webpackChunkName: "contacts-page" */)
);
const LoginPage = lazy(() => import("../../pages/LoginPage" /*webpackChunkName: "login-page"*/));
const RegisterPage = lazy(
  () => import("../../pages/RegisterPage" /*webpackChunkName: "register-page" */)
);
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage" /*webpackChunkName: "notFound-page" */)
);

const RoutesApp = () => {
  const userToken = useAppSelector((state) => state.user.user.token);

  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};

export default RoutesApp;
