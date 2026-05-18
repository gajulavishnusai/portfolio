import { education } from '../data/portfolio'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <p className="section-label reveal">Education</p>
        <h2 className="section-title reveal">Academic background</h2>
        <ol className="education-timeline">
          {education.map((item, index) => (
            <li
              key={item.institution}
              className="education-item reveal"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="education-marker" aria-hidden="true" />
              <div className="education-card">
                <span className="education-period">{item.period}</span>
                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-field">{item.field}</p>
                <p className="education-school">
                  {item.institution}
                  {item.location ? `, ${item.location}` : ''}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
