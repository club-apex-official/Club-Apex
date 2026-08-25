import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import GlassCard from "../components/common/GlassCard";
import { ROUTES } from "../utils/routes";

const Recruitment = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    github: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Generate unique reference and redirect to success page
      const ref = `APEX-${Date.now().toString().slice(-6)}`;
      navigate(`${ROUTES.RECRUITMENT_SUCCESS}?ref=${ref}`);
    }, 1500);
  };

  return (
    <section className="recruitment-page">
      {/* Hero Section */}
      <div className="recruitment-hero">
        <Container>
          <div className="recruitment-hero-content">
            <span className="recruitment-eyebrow">Join Our Team</span>
            <h1 className="recruitment-title">
              Apply for Club <span className="text-gradient">Apex</span>
            </h1>
            <p className="recruitment-description">
              We're looking for passionate developers, designers, and innovators
              to join our community. Fill out the form below to get started.
            </p>
          </div>
        </Container>
      </div>

      {/* Application Form */}
      <Container size="narrow">
        <GlassCard className="recruitment-form-card">
          <form onSubmit={handleSubmit} className="recruitment-form">
            {/* Personal Information */}
            <div className="recruitment-form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="recruitment-form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="recruitment-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Professional Information */}
            <div className="recruitment-form-group">
              <label htmlFor="position">Position Applied For *</label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="">Select a position</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="designer">UI/UX Designer</option>
                <option value="devops">DevOps Engineer</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="recruitment-form-group">
              <label htmlFor="experience">Years of Experience</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <div className="recruitment-form-group">
              <label htmlFor="github">GitHub Profile</label>
              <input
                type="url"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/yourusername"
              />
            </div>

            {/* Additional Information */}
            <div className="recruitment-form-group">
              <label htmlFor="message">
                Why do you want to join Club Apex? *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about yourself, your skills, and why you'd be a great fit..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={isSubmitting}
              className="recruitment-submit-btn"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </GlassCard>
      </Container>
    </section>
  );
};

export default Recruitment;