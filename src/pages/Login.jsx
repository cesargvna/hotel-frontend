import { useState } from "react";
import { login, register } from "../services/api.service.js";
import { saveInLocalStorage } from "../utilities/local-storage-manager.js";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [errorAcount, setErrorAcount] = useState("");
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("*Required"),
    password: Yup.string().required("*Required"),
  });
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const userLogged = await login(values.email, values.password);
      saveInLocalStorage("user", userLogged.data);
      navigate("/protected", { replace: true });
      values.email = "";
      values.password = "";
    } catch (error) {
      setErrorAcount(error.response.data.error);
      values.email = "";
      values.password = "";
      setTimeout(() => {
        setErrorAcount("");
      }, 3000);
    }
    setSubmitting(false);
  };
  const handleRegister = async (values) => {
    console.log("register ", values);

    try {
      const userRegister = await register(values.email, values.password);
      console.log("user register", userRegister)
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={isRegister ? handleRegister : handleSubmit}
    >
      <div className="login-container">
        <div className="login-left"></div>
        <div className="login-right">
          <div className="login-right-content">
            <Form>
              <h3>Hotel California</h3>
              {errorAcount && <div className="error-acount">{errorAcount}</div>}
              <div className="login-form">
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" />
                <div className="error-form">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="login-form">
                <label htmlFor="password">password</label>
                <Field className="login-form" name="password" type="password" />
                <div className="error-form">
                  <ErrorMessage name="password" />
                </div>
              </div>

              <button className="btn-login" type="submit">
                {isRegister ? "Register" : "Login"}
              </button>
            </Form>
          </div>
          <div className="container-line">
            <div className="line"></div>
            <div className="text">or continue with</div>
            <div className="line"></div>
          </div>
          <div className="login-account">
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 256 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                />
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                />
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                />
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                />
              </svg>
              Google
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 814 1000"
              >
                <path
                  fill="#000"
                  d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
                />
              </svg>
              Apple
            </a>

          </div>
          <p className="register-login">{isRegister ? "Do you have account ?" : "Don't have an account ?"} <button type="button" onClick={() => setIsRegister(!isRegister)}>{isRegister ? "Login" : "Register"}</button></p>

        </div>

      </div>
    </Formik>
  );
};

export default Login;
