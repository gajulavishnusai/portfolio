import { profile } from '../data/portfolio'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-label reveal">About</p>
        <h2 className="section-title reveal">A bit about me</h2>
        <div className="about-grid reveal">
          <div className="about-text">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <ul className="about-highlights">
            {profile.highlights.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="about-location reveal">
          Based in <em>{profile.location}</em> — open to internships and web
          development opportunities.
        </p>
      </div>
    </section>
  )
}
