import Login from "./components/Login";
import Signup from "./components/Signup";
import "./main.css";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-dvh p-8 bg-gradient-to-t from-purple-400 to-pink-500">
        <Router>
          <Routes>
            <Route
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
}

export default App;
