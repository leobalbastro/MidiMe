import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/protectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { Admin, Analytics, Dashboard, Landing } from "./pages";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-dark flex">
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
            <Route path="/landing" element={<Landing/>} />
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/Analytics" element={<Analytics/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </AuthProvider>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
