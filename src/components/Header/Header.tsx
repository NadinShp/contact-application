import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { useAppDispatch } from "../../hooks/hooks";
import { logOut } from "../../redux/user/thunk";
import styles from "./Header.module.css";

interface HeaderProps {
  token?: string;
}

const Header = ({ token }: HeaderProps) => {
  let isToken: boolean = token ? true : false;
  const dispatch = useAppDispatch();

  const logOutUser = () => {
    if (token) {
      dispatch(logOut(token));
      localStorage.setItem("user", "");
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
              to={routes.home}
              style={{ marginRight: "25px" }}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
              to={routes.contacts}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        {isToken ? (
          <button type="button" className={styles.signOutBtn} onClick={logOutUser}>
            Sign out
          </button>
        ) : (
          <ul className={styles.registration}>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
                to={routes.register}
                style={{ marginRight: "25px" }}
              >
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
                to={routes.login}
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
