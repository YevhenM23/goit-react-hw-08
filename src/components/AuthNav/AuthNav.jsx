import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={s.headerNavigate}>
      <NavLink className={s.headerHome} to="/" end>
        Home
      </NavLink>
      <NavLink className={s.headerRegister} to="/register">
        Register
      </NavLink>
      <NavLink className={s.headerLogin} to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
