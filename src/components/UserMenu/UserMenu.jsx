import { useDispatch, useSelector } from "react-redux";

import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.userMenuContainer}>
      {isLoggedIn && (
        <h2 className={s.headerWelcome}>Welcome, {user?.email}</h2>
      )}
      {isLoggedIn && (
        <button
          className={s.headerLogout}
          onClick={() => dispatch(logoutThunk())}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default UserMenu;
