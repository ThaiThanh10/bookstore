
import Social from "@/components/website/UILogin/Social";

const FormLogin = () => {
  return (
    <div className="form-container sign-in-container">
      <div className="form">
        <h1>Sign in</h1>
        <Social />
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default FormLogin;
