import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import GlassCard from "../components/common/GlassCard";
import Container from "../components/common/Container";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const validateForm = () => {
  const newErrors = {};

  if (!email.trim()) {
    newErrors.email = "Email or PRN is required.";
  } else if (email.includes("@")) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }
  } else if (!/^\d{6,}$/.test(email.trim())) {
    newErrors.email = "Please enter a valid PRN.";
  }

  if (!password) {
    newErrors.password = "Password is required.";
  } else if (password.length < 8) {
    newErrors.password = "Password must be at least 8 characters.";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
  return (
    <section className="login-page">
      <Container>
        <div className="login-page-content">
          <GlassCard className="login-card">
            <div className="login-header">
              <h1>Student Login</h1>
              <p>Sign in to your Club Apex account.</p>
            </div>

            <form
  className="login-form"
  onSubmit={(event) => {
  event.preventDefault();

  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  setIsSubmitting(true);

  setTimeout(() => {
    setIsSubmitting(false);
  }, 1000);
}}
>
              <div className="login-form-group">
                <label htmlFor="email">
                  Email / PRN
                </label>

                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email or PRN"
                  className="login-input"
               value={email}
  onChange={(event) => setEmail(event.target.value)} />
  {errors.email && (
  <p className="login-error">{errors.email}</p>
)}
              </div>

              <div className="login-form-group">
                <label htmlFor="password">
                  Password
                </label>

                <div className="login-password-wrapper">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="login-input"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
{errors.password && (
  <p className="login-error">{errors.password}</p>
)}
                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="login-remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) =>
                      setRememberMe(event.target.checked)
                    }
                  />

                  <span>Remember me</span>
                </label>

                <Link to="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className="login-button"
              >
                {isSubmitting ? "Signing in..." : "Login"}
              </Button>
            </form>

            <div className="login-register">
              <span>Don't have an account?</span>{" "}
              <Link to="/signup">
                Register here
              </Link>
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
};

export default Login;