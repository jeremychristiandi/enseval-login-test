import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { setIsAuth, setUser } = useAuth();

  const handleLogin = async (e) => {
    //     1) panjang karakter email min 10 karakter dan max 15 karater
    // 2) username mengandung format email (@)
    // 3) password harus mengadnung kombinasi karakter angka, symbol, huruf capital dan huruf
    // kecil
    e.preventDefault();
    setError(false);
    setMessage("");

    // 1. Email validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]/g;
    if (!email.match(emailRegex) || !(email.length > 10 && email.length < 15)) {
      setError(true);
      setMessage("Email not valid!");
      return;
    }

    // 2. Password Validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[.!@#$%^&*])(?=.*[\d])./g;
    if (!password.match(passwordRegex)) {
      setError(true);
      setMessage("Password not valid!");
      return;
    }

    // Log user in
    setIsAuth(true);
    setUser(email);

    navigate("/");
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="font-bold">Login</h1>
        {error && <Alert variant="bg-red-500" text={message} />}
        <div>
          <label>Email</label>
          <input
            type="email"
            className="input-primary text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            className="input-primary text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
