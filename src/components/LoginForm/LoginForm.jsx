import { Field, Formik } from "formik";
import { Form } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };

  return (
    <div className={s.loginWrap}>
      <Formik
        className={s.loginFormik}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className={s.loginLabel}>
            <span className={s.loginSpan}>Email:</span>
            <Field className={s.loginField} name="email" />
          </label>
          <label className={s.loginLabel}>
            <span className={s.loginSpan}>Password:</span>
            <Field className={s.loginField} name="password" />
          </label>
          <button className={s.loginBtn} type="submit">
            Login
          </button>
          <p>
            You do not have account?{" "}
            <Link to="/register">Lets create one!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
