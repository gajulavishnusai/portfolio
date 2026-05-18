import { certifications } from '../data/portfolio'
import './Certifications.css'

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <p className="section-label reveal">Certifications</p>
        <h2 className="section-title reveal">Credentials</h2>
        <ul className="certs-grid">
          {certifications.map((cert, index) => (
            <li
              key={cert.title}
              className="cert-card reveal"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-desc">{cert.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
