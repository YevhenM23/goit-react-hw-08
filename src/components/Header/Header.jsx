import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        <NavLink className={s.headerHome} to="/" end>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={s.headerContacts} to="/contacts">
            Contacts
          </NavLink>
        )}
        {isLoggedIn && (
          <h2 className={s.headerWelcome}>Welcome, {user?.email}</h2>
        )}
        {isLoggedIn ? (
          <button
            className={s.headerLogout}
            onClick={() => dispatch(logoutThunk())}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink className={s.headerRegister} to="/register">
              Register
            </NavLink>
            <NavLink className={s.headerLogin} to="/login">
              Login
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
