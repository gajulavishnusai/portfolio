import { useState } from 'react'
import { profile } from '../data/portfolio'
import './Contact.css'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    // Demo: opens mail client. Replace with Formspree, EmailJS, or your API.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    setTimeout(() => {
      setStatus('sent')
      setForm(initialForm)
    }, 400)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="contact-text">
            Have a project in mind or want to say hello? Fill out the form or
            reach out directly — I&apos;d love to hear from you.
          </p>
          <ul className="contact-links">
            <li>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <form
          className="contact-form reveal"
          onSubmit={handleSubmit}
          style={{ transitionDelay: '0.1s' }}
        >
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Jane Doe"
              autoComplete="name"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="jane@example.com"
              autoComplete="email"
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'sent' && (
            <p className="form-success" role="status">
              Thanks! Your email client should open shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
