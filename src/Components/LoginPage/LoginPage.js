import useInput from "../../hooks/useInput/useInput";
const LoginPage = (props) => {
  const { state: email, dispatch: emailDispatch } = useInput();
  const { state: password, dispatch: passwordDispatch } = useInput();
  const checkEmail = () => {
    if (!email.value) {
      emailDispatch({ type: "setError", error: "email in empty" });
      return true;
    }
    if (!email.value.includes("@") || !email.value.includes(".com")) {
      emailDispatch({ type: "setError", error: "email not valid" });
      return true;
    }
    return false;
  };

  const checkPassword = () => {
    if (!password.value) {
      passwordDispatch({ type: "setError", error: "password in empty" });
      return true;
    }
    if (password.value.length < 8) {
      passwordDispatch({
        type: "setError",
        error: "password most be more than 8 characters",
      });
      return true;
    }
    return false;
  };
  const submitHandler = (data) => {
    data.preventDefault();
    let isFormValid = true;

    isFormValid &= checkEmail();
    isFormValid &= checkPassword();

    if (!isFormValid) return;
  };

  return (
    <div className="col-12 container-fluid full-height bg-dark text-light d-flex flex-column align-items-center">
      <div className="col-md-3 display-1 text-center py-5">login</div>
      <form onSubmit={submitHandler} className="col-md-3 d-flex flex-column">
        <div>
          <label className="display-6">email</label>
          <input
            className="form-control"
            type="email"
            onChange={(e) => {
              emailDispatch({ type: "setValue", value: e.target.value });
            }}
            value={email.value}
            onBlur={checkEmail}
          />
          <p className="text-danger">{email.error}</p>
        </div>
        <div>
          <label className="display-6">password</label>
          <input
            className="form-control"
            type="password"
            onChange={(e) => {
              passwordDispatch({ type: "setValue", value: e.target.value });
            }}
            value={password.value}
            onBlur={checkPassword}
          />
          <p className="text-danger">{password.error}</p>
        </div>
        <button className="btn btn-outline-info btn-lg align-self-end">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
