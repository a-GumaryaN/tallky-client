import useInput from "../../hooks/useInput/useInput";
const LoginPage = (props) => {
  const { state: fullName, dispatch: fullNameDispatch } = useInput();
  const { state: email, dispatch: emailDispatch } = useInput();
  const { state: password, dispatch: passwordDispatch } = useInput();
  const { state: passwordAgain, dispatch: passwordAgainDispatch } = useInput();

  const checkFullName = () => {
    if (!email.value) {
      fullNameDispatch({ type: "setError", error: "full name in empty" });
      return true;
    }
    return false;
  };

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

  const checkPasswordAgain = () => {
    if (!passwordAgain.value) {
      passwordAgainDispatch({
        type: "setError",
        error: "password again in empty",
      });
      return true;
    }
    if (passwordAgain.value !== password.value) {
      passwordAgainDispatch({
        type: "setError",
        error: "password again not match with password",
      });
      return true;
    }
    return false;
  };
  const submitHandler = (data) => {
    data.preventDefault();
    let isFormValid = true;

    isFormValid &= checkFullName();
    isFormValid &= checkEmail();
    isFormValid &= checkPassword();
    isFormValid &= checkPasswordAgain();

    if (!isFormValid) return;
  };

  return (
    <div className="col-12 container-fluid full-height bg-dark text-light d-flex flex-column align-items-center">
      <div className="col-md-3 display-1 text-center py-5">register</div>
      <form onSubmit={submitHandler} className="col-md-3 d-flex flex-column">
        <div>
          <label className="display-6">full name</label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => {
              fullNameDispatch({ type: "setValue", value: e.target.value });
            }}
            value={fullName.value}
            onBlur={checkFullName}
          />
          <p className="text-danger bg-gradient">{fullName.error}</p>
        </div>
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
          <p className="text-danger bg-gradient">{email.error}</p>
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
          <p className="text-danger bg-gradient">{password.error}</p>
        </div>
        <div>
          <label className="display-6">password again</label>
          <input
            className="form-control"
            type="password"
            onChange={(e) => {
              passwordAgainDispatch({
                type: "setValue",
                value: e.target.value,
              });
            }}
            value={passwordAgain.value}
            onBlur={checkPasswordAgain}
          />
          <p className="text-danger bg-gradient">{passwordAgain.error}</p>
        </div>
        <button className="btn btn-outline-info btn-lg align-self-end">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
