/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../contextapi/AppContext";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

function LoginForm() {
  const { user, setUser, setCollection } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User:", user);
  }, [user]);

  useEffect(() => {
    if (user) {
      setLoggingIn(true);
    }
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const loginData = { email, password };

    try {
      const response = await fetch(
        "https://duelvault-backend-server.onrender.com/api/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUser(() => data.user);
        setCollection(() => data.user.cardCollection);
        setLoggingIn(true);
        setTimeout(() => {
          navigate("/app");
        }, 100);
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      console.log(user);
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-amber-500/20">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
        Login
      </h2>

      {loggingIn && user ? (
        <div className="text-center">
          <Spinner />
          <span className="text-amber-500 font-semibold">Please wait...</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-300 font-semibold">Email:</label>
            <input
              disabled={loading}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-300 font-semibold">
              Password:
            </label>
            <input
              disabled={loading}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      )}

      {error && (
        <p className="mt-4 text-red-400 text-center bg-red-900/20 border border-red-500/50 rounded-lg p-3">
          {error}
        </p>
      )}
    </div>
  );
}

export default LoginForm;
