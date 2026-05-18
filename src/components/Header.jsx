import { useState } from 'react'
import { navLinks } from '../data/portfolio'
import './Header.css'

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('home')
          }}
        >
          <span className="logo-mark">GVS</span>
          <span className="logo-text">Vishnu Sai</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main">
          <ul className="nav-list">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(id)
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
