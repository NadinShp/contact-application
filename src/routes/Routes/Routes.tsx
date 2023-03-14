import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import routes from "../../routes";
import { useAppSelector } from "../../hooks/hooks";
import Loader from "../../components/Loader";
import Notify from "../../components/Notify";
import styles from "../Routes.module.css";

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
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const userToken = useAppSelector((state) => state.user.user.token);
  let errorUser = useAppSelector((state) => state.user.error);
  let errorContacts = useAppSelector((state) => state.contacts.error);
  let error: string | null | undefined = errorUser || errorContacts;

  function closeNotify() {
    setShowNotification(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }
  useEffect(() => {
    if (error) {
      setShowNotification(true);
      timerRef.current = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [errorUser, errorContacts, error]);
  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<Loader />}>
        {showNotification && <Notify text={error} closeNotify={closeNotify} />}
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
    </div>
  );
};

export default RoutesApp;
