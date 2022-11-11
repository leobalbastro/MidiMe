import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/protectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { Admin, Analytics, Dashboard, Landing } from "./pages";

const handleDarkMode = (e) => {
  e.preventDefault();
  document.documentElement.classList.toggle("dark");
  if (document.getElementById("switchMode").innerText === "Turn on Dark Mode") {
    document.getElementById("switchMode").innerText = "Turn On Light Mode";
  } else {
    document.getElementById("switchMode").innerText = "Turn on Dark Mode";
  }
};

function App() {
  return (
    <div className="bg-slate-300 h-max text-dark dark:bg-slate-800 dark:text-cyan-300">
      <nav className="w-full h-12 z-10 mb-2 justify-between bg-indigo-400 dark:bg-slate-900 flex px-1 py-1">
        <div className="bg-white flex">
          <h1>una imagen en svg</h1>
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

        <div className="w-auto h-100 flex justify-between">
          <div className="flex mx-2">
            <button
              onClick={handleDarkMode}
              className="rounded-md bg-slate-900 text-white px-2 dark:bg-white dark:text-black"
              id="switchMode"
            >
              Turn on Dark Mode
            </button>
          </div>
          <div className="flex">
            <button className=" rounded-md bg-indigo-200 dark:bg-slate-800 dark:text-white">
              Profile
            </button>
          </div>
        </div>
      </nav>
      <main className="h-screen flex" >
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
}

export default App;
