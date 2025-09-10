/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";
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
    <div className={styles.form}>
      <h2 className={styles.formHeader}>Sign-Up</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formField}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formField}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign-Up</button>
        </form>
      )}
      {error && (
        <h2 className={styles.error}>Email or Username already used</h2>
      )}
      {success && <h2 className={styles.success}>{success} Redirecting...</h2>}
    </div>
  );
}

export default SignUpForm;
