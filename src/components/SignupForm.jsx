/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contextapi/AppContext";
import Spinner from "./Spinner";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { isLoading, setIsLoading } = useContext(AppContext);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://duelvault-backend-server.onrender.com/api/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("User registered successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-amber-500/20">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
        Sign-Up
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-300 font-semibold">
              Username:
            </label>
            <input
              disabled={isLoading}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              placeholder="Choose a username"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-300 font-semibold">Email:</label>
            <input
              disabled={isLoading}
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
              disabled={isLoading}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Sign-Up
          </button>
        </form>
      )}
      {error && (
        <p className="mt-4 text-red-400 text-center bg-red-900/20 border border-red-500/50 rounded-lg p-3">
          Email or Username already used
        </p>
      )}
      {success && (
        <p className="mt-4 text-green-400 text-center bg-green-900/20 border border-green-500/50 rounded-lg p-3">
          {success} Redirecting...
        </p>
      )}
    </div>
  );
}

export default SignUpForm;
