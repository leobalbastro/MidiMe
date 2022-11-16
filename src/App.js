import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/protectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { Admin, Analytics, Dashboard, Landing } from "./pages";
import { ReactComponent as IconMenu } from "./images/logo.svg";
import { Switch } from "./components/Switch";
import { useState } from "react";

let handleToggle = false;

const handleDarkMode = (setIsToggled) => {
  // e.preventDefault();
  document.documentElement.classList.toggle("dark");
  // if (document.getElementById("switchMode").innerText === "Turn On Dark Mode") {
  //   document.getElementById("switchMode").innerText = "Turn On Light Mode";
  // } else {
  //   document.getElementById("switchMode").innerText = "Turn On Dark Mode";
  // }

  if (handleToggle === false) {
    handleToggle = true;
  } else {
    handleToggle = false;
  }
  console.log(handleToggle);
};

function App() {
  const [isToggled, setIsToggle] = useState(false);
  return (
    <div className="bg-slate-300 h-max text-dark dark:bg-slate-800 ">
      <nav className="w-full h-12 z-10 mb-2 justify-between bg-purple-500 dark:bg-slate-900 flex px-1 py-1">
        <div className="bg-transparent flex self-center">
          <IconMenu className="w-40 h-max " />
        </div>
        {/* <div className="w-full flex ">
          <ul className="flex flex-row justify-around w-full items-center ml-2">
            <li className="bg-white p-2 rounded-md text-sm">
            <a href="/">Home</a>
            </li>
            <li className="bg-white p-2 rounded-md text-sm">
            <a href="/register">Register</a>
            </li>
            <li className="bg-white p-2 rounded-md text-sm">
            <a href="/login">Login</a>
            </li>
            </ul>
          </div> */}

        <div className="h-100 flex justify-between">
          <div className="flex mx-2 items-center">
            {/* <button
              onClick={handleDarkMode}
              className="relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-slate-700 text-slate-400 focus-visible:ring-slate-500"
              id="switchMode"
              > */}
            <Switch
              rounded={true}
              isToggled={isToggled}
              onToggle={() => {
                setIsToggle(!isToggled);
                handleDarkMode(setIsToggle);
              }}
            />
            {/* </button> */}
          </div>
          <div className="flex">
            <select className=" rounded-md bg-indigo-200 dark:bg-slate-800 dark:text-white">
              <option value="0">PROFILE</option>
            </select>
          </div>
        </div>
      </nav>
      <main className="h-screen flex">
        {/* <BrowserRouter> */}
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/landing" element={<Landing />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </AuthProvider>
        {/* </BrowserRouter> */}
      </main>
    </div>
  );
  // console.log(isToggled)
}

export default App;
