import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className={s.regWrap}>
      <Formik
        className={s.regFormik}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.regForm}>
          <label className={s.regLabel}>
            <span className={s.regSpan}>Name:</span>
            <Field className={s.regField} name="name" />
          </label>
          <label className={s.regLabel}>
            <span className={s.regSpan}>Email:</span>
            <Field className={s.regField} name="email" />
          </label>
          <label className={s.regLabel}>
            <span className={s.regSpan}>Password:</span>
            <Field className={s.regField} name="password" />
          </label>

          <button className={s.regBtn} type="submit">
            Register
          </button>
          <p>
            You already have account?
            <Link className="text-teal-500" to="/login">
              Login!{" "}
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
