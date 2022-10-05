import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../finalActContext/Context";

const Login = () => {
  const { logMeIn, setReference } = useContext(Context);
  const navigate = useNavigate();
  const login = () => {
    logMeIn("arkmy");
    navigate("/", { replace: true });
  };
  const register = (e) => {
    setReference(e.currentTarget.value);
  };
  return (
    <>
      <section className="login">
        <h2>Come live Spain!:</h2>
        <label htmlFor="ref">Reference:</label>
        <input
          id="ref"
          onChange={register}
          placeholder="Your ticket reference"
          autoFocus
          autoComplete="off"
        />
        <button className="register-button" onClick={login}>
          Login
        </button>
      </section>
    </>
  );
};

export default Login;
