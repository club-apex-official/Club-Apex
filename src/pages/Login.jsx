import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import Button from "../components/common/Button";
import FloatingInput from "../components/common/FloatingInput";
import { useAOS, loginHeroAnimations } from "../aos";
import { ROUTES } from "../utils/routes";

const FEATURE_BULLETS = [
  "Access your personal dashboard",
  "Manage event registrations",
  "View certificates and badges",
];

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const heroEyebrowRef = useAOS(loginHeroAnimations.eyebrow);
  const heroTitleRef = useAOS(loginHeroAnimations.title);
  const heroDescRef = useAOS(loginHeroAnimations.description);
  const bullet1Ref = useAOS(loginHeroAnimations.bullet(0));
  const bullet2Ref = useAOS(loginHeroAnimations.bullet(1));
  const bullet3Ref = useAOS(loginHeroAnimations.bullet(2));
  const formCardRef = useAOS(loginHeroAnimations.formCard);

  const bulletRefs = [bullet1Ref, bullet2Ref, bullet3Ref];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="login-page">
      <div className="login-hero">
        <div className="apex-orb apex-orb-one" aria-hidden="true" />
        <div className="apex-orb apex-orb-two" aria-hidden="true" />
        <span
          className="apex-orb-sparkle apex-delay-1"
          aria-hidden="true"
          style={{ top: "18%", left: "12%" }}
        />
        <span
          className="apex-orb-sparkle apex-delay-2"
          aria-hidden="true"
          style={{
            top: "72%",
            left: "35%",
            width: "6px",
            height: "6px",
          }}
        />
        <span
          className="apex-orb-sparkle apex-delay-3"
          aria-hidden="true"
          style={{
            top: "30%",
            right: "8%",
            width: "5px",
            height: "5px",
          }}
        />
        <span
          className="apex-orb-sparkle apex-delay-4"
          aria-hidden="true"
          style={{
            bottom: "14%",
            right: "30%",
            width: "7px",
            height: "7px",
          }}
        />

        <div className="login-container">
          <div className="login-grid">
            <div className="login-hero-content">
              <span
                ref={heroEyebrowRef}
                className="login-eyebrow apex-float-slow"
              >
                Club Apex • OpenForge 2026
              </span>
              <h1 ref={heroTitleRef} className="login-title">
                Welcome back to{" "}
                <span className="login-title-accent apex-pulse-soft apex-delay-2">
                  Club Apex
                </span>
              </h1>
              <p ref={heroDescRef} className="login-description">
                Sign in to access your student dashboard, registered
                events, certificates, badges, and workspace. Let&apos;s
                continue building together.
              </p>

              <div className="login-feature-list">
                {FEATURE_BULLETS.map((text, index) => (
                  <div
                    key={text}
                    ref={bulletRefs[index]}
                    className="apex-feature-bullet"
                  >
                    <span className="apex-feature-bullet-icon">
                      <CheckCircle size={17} strokeWidth={2.4} />
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div ref={formCardRef} className="login-form-wrapper">
              <div className="login-card apex-card-glow">
                <div className="login-card-header">
                  <h2 className="login-card-title">Student Login</h2>
                  <p className="login-card-subtitle">
                    Enter your email or PRN to access your account
                  </p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                  <div className="login-form-group">
                    <FloatingInput
                      id="identifier"
                      name="identifier"
                      label="Email or PRN"
                      type="text"
                      autoComplete="username"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      icon={Mail}
                      required
                    />
                  </div>

                  <div className="login-form-group">
                    <div className="login-field-header">
                      <Link
                        to="#"
                        className="login-link-forgot apex-link-shimmer"
                        onClick={(e) => e.preventDefault()}
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FloatingInput
                      id="password"
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      icon={Lock}
                      required
                      inputStyle={{
                        paddingRight: "calc(var(--space-4) + 48px)",
                      }}
                      action={
                        <button
                          type="button"
                          className="apex-field-action"
                          onClick={() =>
                            setShowPassword((prev) => !prev)
                          }
                          aria-label={
                            showPassword
                              ? "Hide password"
                              : "Show password"
                          }
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      }
                    />
                  </div>

                  <div className="login-form-options">
                    <label
                      htmlFor="remember"
                      className="login-checkbox"
                    >
                      <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) =>
                          setRememberMe(e.target.checked)
                        }
                      />
                      <span className="login-checkbox-marker" />
                      <span>Remember me</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    className="login-submit-button apex-btn"
                  >
                    <span>Sign in</span>
                    <span className="apex-btn-arrow">
                      <ArrowRight size={18} />
                    </span>
                  </Button>
                </form>

                <div className="login-card-divider">
                  <span>New to Club Apex?</span>
                </div>

                <div className="login-card-footer">
                  <p className="login-card-footer-text">
                    Don&apos;t have an account yet? Create one to join
                    our community and unlock all features.
                  </p>
                  <Link
                    to={ROUTES.SIGNUP}
                    className="apex-button apex-button-outline apex-button-medium login-signup-button apex-btn apex-btn-outline"
                  >
                    <span>Create account</span>
                    <span className="apex-btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
