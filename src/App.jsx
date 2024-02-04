import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./components/pages/SignUp";
import Account from "./components/pages/Account";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// import {auth, app} from './firebase'

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route
            path="/Account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
