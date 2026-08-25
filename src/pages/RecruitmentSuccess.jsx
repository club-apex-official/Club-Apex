import { useNavigate, useLocation } from "react-router-dom";
import { FaCheckCircle, FaGithub } from "react-icons/fa";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import GlassCard from "../components/common/GlassCard";
import { ROUTES } from "../utils/routes";

const RecruitmentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get reference from URL or generate fallback
  const searchParams = new URLSearchParams(location.search);
  const applicationRef =
    searchParams.get("ref") || `APEX-${Date.now().toString().slice(-6)}`;

  const handleGoHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <section className="recruitment-success-page">
      {/* Background Decorations */}
      <div className="recruitment-success-background">
        <div className="recruitment-success-glow recruitment-success-glow-1"></div>
        <div className="recruitment-success-glow recruitment-success-glow-2"></div>
      </div>

      <Container size="narrow">
        <div className="recruitment-success-content">
          {/* Success Header */}
          <div className="recruitment-success-header">
            <div className="recruitment-success-icon-wrapper">
              <div className="recruitment-success-icon-bg">
                <FaCheckCircle className="recruitment-success-icon" size={48} />
              </div>
            </div>
            <h1 className="recruitment-success-title">Application Submitted</h1>
            <p className="recruitment-success-subtitle">
              Your application has been successfully received. We'll review it
              and get back to you soon.
            </p>
          </div>

          {/* Application Reference */}
          <GlassCard className="recruitment-success-card">
            <div className="recruitment-success-ref">
              <span className="recruitment-success-ref-label">
                Application Reference
              </span>
              <strong className="recruitment-success-ref-number">
                {applicationRef}
              </strong>
              <p className="recruitment-success-ref-note">
                Please save this reference number for future correspondence.
              </p>
            </div>
          </GlassCard>

          {/* Next Steps Timeline */}
          <GlassCard className="recruitment-success-card">
            <h2 className="recruitment-success-card-title">Next Steps</h2>
            <div className="recruitment-success-timeline">
              <div className="recruitment-success-step">
                <div className="recruitment-success-step-number">1</div>
                <div>
                  <h4>Application Review</h4>
                  <p>
                    Our team will review your application within 2-3 business
                    days.
                  </p>
                </div>
              </div>
              <div className="recruitment-success-step">
                <div className="recruitment-success-step-number">2</div>
                <div>
                  <h4>Interview Process</h4>
                  <p>
                    If shortlisted, you'll be contacted for a virtual interview.
                  </p>
                </div>
              </div>
              <div className="recruitment-success-step">
                <div className="recruitment-success-step-number">3</div>
                <div>
                  <h4>Final Decision</h4>
                  <p>
                    You'll receive the final decision via email within 5-7
                    business days.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Contribution Guide */}
          <GlassCard className="recruitment-success-card">
            <h2 className="recruitment-success-card-title">
              Contribution Process
            </h2>
            <p className="recruitment-success-card-description">
              Get involved with our open-source projects and contribute to the
              community.
            </p>
            <div className="recruitment-success-contribution-steps">
              <div className="recruitment-success-contribution-step">
                <span className="recruitment-success-contribution-number">
                  01
                </span>
                <div>
                  <h4>Fork the Repository</h4>
                  <p>Create a copy of our project repository on GitHub.</p>
                </div>
              </div>
              <div className="recruitment-success-contribution-step">
                <span className="recruitment-success-contribution-number">
                  02
                </span>
                <div>
                  <h4>Create a Branch</h4>
                  <p>Make your changes in a dedicated feature branch.</p>
                </div>
              </div>
              <div className="recruitment-success-contribution-step">
                <span className="recruitment-success-contribution-number">
                  03
                </span>
                <div>
                  <h4>Submit a Pull Request</h4>
                  <p>Open a pull request for review and merge.</p>
                </div>
              </div>
            </div>
            {/* GitHub CTA */}
            <Button
              href="https://github.com/club-apex-official"
              variant="outline"
              size="large"
              className="recruitment-success-github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
              View on GitHub
              <IoArrowForward size={18} />
            </Button>
          </GlassCard>

          {/* Community Links */}
          <GlassCard className="recruitment-success-card">
            <h2 className="recruitment-success-card-title">
              Join Our Community
            </h2>
            <p className="recruitment-success-card-description">
              Connect with fellow developers, get support, and stay updated.
            </p>
            <div className="recruitment-success-community-grid">
              <a
                href="https://chat.whatsapp.com/your-invite-link"
                className="recruitment-success-community-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="recruitment-success-community-icon whatsapp">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <h4>WhatsApp Community</h4>
                  <p>Join our WhatsApp group for quick discussions</p>
                </div>
                <IoArrowForward
                  size={18}
                  className="recruitment-success-community-arrow"
                />
              </a>
              <a
                href="https://discord.gg/your-invite-link"
                className="recruitment-success-community-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="recruitment-success-community-icon discord">
                  <FaDiscord size={24} />
                </div>
                <div>
                  <h4>Discord Server</h4>
                  <p>Join our Discord for tech talks and collaboration</p>
                </div>
                <IoArrowForward
                  size={18}
                  className="recruitment-success-community-arrow"
                />
              </a>
            </div>
          </GlassCard>

          {/* Navigation */}
          <div className="recruitment-success-actions">
            <Button onClick={handleGoHome} variant="primary" size="large">
              Return to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecruitmentSuccess;
