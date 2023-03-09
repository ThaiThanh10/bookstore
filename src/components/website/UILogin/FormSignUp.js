import Social from "@/components/website/UILogin/Social";

const FormSignUp = () => {
  return (
    <div className="form-container sign-up-container">
      <div className="form">
        <h1>Create Account</h1>
        <Social />
        <span>or use your email for registration</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default FormSignUp;
