import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `http://localhost:8080/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/signup"
          element={user ? <Home user={user} /> : <Signup />}
        />
         <Route
          exact
          path="/login"
          element={user ? <Home user={user} /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
