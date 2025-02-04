import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.headerNav}>
      <NavLink className={s.headerHome} to="/" end>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.headerContacts} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
