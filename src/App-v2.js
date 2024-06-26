import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Login from "./components-v2/Login";
import Signup from "./components-v2/Signup";
import Home from "./components-v2/Home";
import "./main.css";
import ProtectedRoute from "./components-v2/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <div className="h-dvh bg-gradient-to-tr from-slate-400 to-slate-500 px-6 py-6">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
