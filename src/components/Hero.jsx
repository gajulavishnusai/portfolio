import { useState } from 'react'
import { profile } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  const [photoSrc, setPhotoSrc] = useState(profile.photo)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePhotoError = () => {
    if (photoSrc !== profile.photoFallback) {
      setPhotoSrc(profile.photoFallback)
    }
  }

  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">
            <span>{profile.name}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
            >
              View my work
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => scrollTo('contact')}
            >
              Get in touch
            </button>
          </div>
          <div className="hero-meta">
            <span>{profile.location}</span>
            <span className="dot" aria-hidden="true" />
            <a href={profile.phoneHref}>{profile.phone}</a>
            <span className="dot" aria-hidden="true" />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <div className="hero-visual reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="hero-photo-frame">
            <img
              src={photoSrc}
              alt={`${profile.name} profile`}
              className="hero-photo"
              onError={handlePhotoError}
            />
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <div className="code-window">
                <div className="code-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <pre className="code-block">
                  <code>
{`const dev = {
  name: "${profile.name}",
  stack: ["HTML", "CSS", "JS", "Java"],
  focus: "frontend development"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
