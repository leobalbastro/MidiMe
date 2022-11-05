import { useState } from "react";
// import { redirect } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Success } from "./alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signIn, loginWithGoogle, loginWithFacebook, resetPassword } =
    useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      if(success){
            setSuccess(null);
}

    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
      if(success){
            setSuccess(null);
}

    }
  };

  const handleFacebookSignin = async () => {
    try {
      await loginWithFacebook();
      navigate("/");
    } catch (error) {
      setError(error.message);
      if(success){
            setSuccess(null);
}

    }
  };

  const handleResetPassword = async () => {
    if (!user.email) {
      return setError("Please enter your email");
    }
    try {
      await resetPassword(user.email);
      setSuccess("We sent you an email with a link to reset your password")
      setError(null)

    } catch (error) {
      setError(error.message);
      if(success){
            setSuccess(null);
}

    }
  };

  // const handleTwitterSignin = async()=>{
  //   try {
  //     await loginWithTwitter();
  //     navigate("/")
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }

  return (
    <div className="w-full max-w-xs m-auto">
      <div className="mb-2">
        <button
          onClick={handleGoogleSignin}
          className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full hover:bg-green-500 hover:text-white border-green-500 "
        >
          Login with Google
        </button>
      </div>
      <div className="mb-2">
        <button
          onClick={handleFacebookSignin}
          className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full hover:bg-blue-500 hover:text-white border-blue-500"
        >
          Login with Facebook
        </button>
      </div>
      {success && <Success message={success}/>}
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-fold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="**********"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
            Login
          </button>
          <a
            onClick={handleResetPassword}
            href="#!"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Forgot your password?
          </a>
        </div>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        You don't have an account? <Link className="text-blue-700 font-bold" to="/register">Register</Link>
      </p>

      {/* <button onClick={handleTwitterSignin} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full">Login with twitter</button> */}
    </div>
  );
}
