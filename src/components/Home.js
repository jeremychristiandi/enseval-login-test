import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(null);
  const [message, setMessage] = useState("");
  const [currentMin, setCurrentMin] = useState();
  const [username, setUsername] = useState();

  const { setIsAuth, setUser, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();

    hour > 3 && hour < 18
      ? setMessage("Selamat pagi")
      : setMessage("Selamat malam");

    if (hour < 10) hour = "0" + String(hour);
    if (min < 10) min = "0" + String(min);
    setCurrentMin(min);

    setCurrentTime(`${String(hour)}:${String(min)}`);
  }, [currentMin]);

  const handleLogout = () => {
    setIsAuth(false);
    setUser("");
    navigate("/login");
  };

  return (
    <div>
      <navbar className="flex h-24 bg-slate-400 justify-between items-center p-6">
        <h1>{user}</h1>
        <button onClick={handleLogout} className="button-primary">
          Logout
        </button>
      </navbar>
      <section className="flex flex-col justify-center items-center mt-6 gap-3">
        <h1>{message}</h1>
        <h1>{user.split("@")[0]}</h1>
        <p>{currentTime}</p>
      </section>
    </div>
  );
};

export default Home;
