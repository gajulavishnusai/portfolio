import { skillCategories } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  let delayIndex = 0

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-label reveal">Skills</p>
        <h2 className="section-title reveal">Technical skills</h2>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category reveal">
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skills-grid">
                {category.skills.map((skill) => {
                  const delay = delayIndex++ * 0.05
                  return (
                    <li
                      key={skill.name}
                      className="skill-card"
                      style={{ transitionDelay: `${delay}s` }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{ width: `${skill.level}%` }}
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
