import { useState } from "react";
// import { redirect } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "./alert";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error}/>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-black ">
        <div className="mb-4">
          <label htmlFor="email" className="block text-black text-sm font-fold mb-2 dark:text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-white dark:bg-slate-800 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-black text-sm font-fold mb-2 dark:text-gray-400">password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="**********"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-white dark:bg-slate-800 dark:text-white "
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm dark:bg-black dark:border-2 dark:text-white dark:hover:bg-slate-800">Register!</button>
      </form>
      <span className="my-4 text-sm flex justify-between px-3 dark:text-slate-200"> Already have an account? <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 dark:hover:text-blue-700 dark:text-white" to="/login">Login</Link></span>
    </div>
  );
}
