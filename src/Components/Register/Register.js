import useInput from "../../hooks/useInput/useInput";

const Register = (props) => {
  const { state: email, dispatch: emailDispatch } = useInput();
  return (
    <div className="col-12 container-fluid full-height bg-dark text-light d-flex flex-column align-items-center">
      <div className="col-md-3 display-1 text-center py-5">register</div>
      <form className="col-md-3 d-flex flex-column">
        <div>
          <label className="display-6">email</label>
          <input className="form-control" type="email" />
          <p className="text-danger"></p>
        </div>
        <div>
          <label className="display-6">password</label>
          <input className="form-control" type="password" />
          <p className="text-danger"></p>
        </div>
        <button className="btn btn-outline-info btn-lg align-self-end">
          login
        </button>
      </form>
    </div>
  );
};

export default Register;
