import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { House, Eye, EyeOff, ArrowLeft, CheckCircle2 } from 'lucide-react'
import './styles.css'

function HouseIllustration() {
  return (
    <svg className="house-art" viewBox="0 0 360 285" role="img" aria-label="Illustration of a comfortable boarding house">
      <g fill="#b9eff0" opacity=".9">
        <ellipse cx="53" cy="73" rx="24" ry="10"/><ellipse cx="70" cy="64" rx="17" ry="13"/>
        <ellipse cx="94" cy="74" rx="23" ry="9"/><ellipse cx="277" cy="62" rx="25" ry="11"/>
        <ellipse cx="294" cy="52" rx="18" ry="14"/><ellipse cx="316" cy="64" rx="22" ry="9"/>
        <ellipse cx="180" cy="31" rx="22" ry="9"/><ellipse cx="194" cy="23" rx="16" ry="11"/>
      </g>
      <circle cx="268" cy="39" r="10" fill="#ffd66e"/>
      <g stroke="#ffd66e" strokeWidth="2" strokeLinecap="round">
        <path d="M268 21v-5M268 57v-5M250 39h-5M291 39h-5M255 26l-4-4M281 52l4 4M281 26l4-4M255 52l-4 4"/>
      </g>
      <path d="M25 231 Q180 200 335 231 L313 251 Q180 273 45 250Z" fill="#d5f5f4"/>
      <path d="M60 221 L60 103 L180 43 L300 103 L300 221Z" fill="#fff" stroke="#75cdd4" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M43 105 L180 34 L317 105" fill="#d8f5f5" stroke="#58bdc7" strokeWidth="5" strokeLinejoin="round"/>
      <path d="M72 106 L180 50 L288 106" fill="none" stroke="#fff" strokeWidth="5"/>
      <rect x="87" y="119" width="36" height="42" rx="2" fill="#c5f0f0" stroke="#65bbc4" strokeWidth="2"/>
      <rect x="237" y="119" width="36" height="42" rx="2" fill="#c5f0f0" stroke="#65bbc4" strokeWidth="2"/>
      <rect x="147" y="116" width="66" height="40" rx="2" fill="#c5f0f0" stroke="#65bbc4" strokeWidth="2"/>
      <g stroke="#fff" strokeWidth="3">
        <path d="M105 121v38M89 140h32M255 121v38M239 140h32M163 118v36M180 118v36M197 118v36M149 136h62"/>
      </g>
      <rect x="88" y="174" width="34" height="36" rx="2" fill="#c5f0f0" stroke="#65bbc4" strokeWidth="2"/>
      <rect x="238" y="174" width="34" height="36" rx="2" fill="#c5f0f0" stroke="#65bbc4" strokeWidth="2"/>
      <g stroke="#fff" strokeWidth="3"><path d="M105 176v32M90 192h30M255 176v32M240 192h30"/></g>
      <path d="M158 221v-45q22-24 44 0v45Z" fill="#078e99"/>
      <circle cx="190" cy="199" r="2.5" fill="#ffe08a"/>
      <path d="M148 222h64l10 9h-84Z" fill="#b2e5e8"/>
      <g fill="#59bfc5">
        <ellipse cx="41" cy="200" rx="20" ry="28"/><ellipse cx="320" cy="194" rx="18" ry="31"/>
        <ellipse cx="32" cy="223" rx="14" ry="8"/><ellipse cx="330" cy="226" rx="15" ry="8"/>
      </g>
      <g stroke="#329ca6" strokeWidth="2" fill="none">
        <path d="M41 227v-52M320 224v-59M31 193l10 10 11-16M311 190l9 10 10-16"/>
      </g>
      <g fill="#8ddadd">
        <circle cx="75" cy="222" r="5"/><circle cx="91" cy="229" r="4"/><circle cx="276" cy="229" r="5"/>
        <circle cx="291" cy="220" r="4"/><circle cx="130" cy="240" r="3"/><circle cx="234" cy="240" r="3"/>
      </g>
      <path d="M136 245h90" stroke="#a2e0e3" strokeWidth="4" strokeLinecap="round"/>
      <path d="M155 253h51" stroke="#b6e9eb" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

function App() {
  const [view, setView] = useState('login')
  const [role, setRole] = useState('student')
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const switchView = (next) => {
    setNotice('')
    setView(next)
  }

  const submit = (e) => {
    e.preventDefault()
    if (view === 'register' && form.password !== form.confirm) {
      setNotice('Passwords do not match. Please try again.')
      return
    }
    if (view === 'forgot') {
      setNotice('If an account exists for this email, password reset instructions will be sent.')
      return
    }
    if (view === 'register') {
      setNotice(`${role === 'student' ? 'Student' : 'Owner'} registration form validated. Connect your backend to create the account.`)
      return
    }
    setNotice('Login form validated. Connect your backend to sign in.')
  }

  const heading = view === 'login' ? 'Welcome Back!' : view === 'register' ? `Create ${role === 'student' ? 'Student' : 'Owner'} Account` : 'Reset Password'
  const subtitle = view === 'login' ? 'Find your perfect boarding place' : view === 'register' ? 'Join Boarding Buddy and find your place' : 'We’ll help you get back into your account'

  return (
    <main className="page-shell">
      <section className={`auth-card ${view === 'register' ? 'register-card' : ''}`}>
        <aside className="brand-panel">
          <a className="brand" href="#" onClick={(e) => { e.preventDefault(); switchView('login') }}>
            <span className="brand-icon"><House size={22} strokeWidth={2.2} /></span>
            <span>Boarding Buddy</span>
          </a>
          <div className="illustration-wrap"><HouseIllustration /></div>
          <h2>Safe. Comfortable.<br />Close to Campus.</h2>
          <p className="brand-caption">A better way to find your next home.</p>
        </aside>

        <section className="form-panel">
          {view !== 'login' && (
            <button className="back-button" type="button" onClick={() => switchView('login')}>
              <ArrowLeft size={16} /> Back to login
            </button>
          )}
          <div className="form-heading">
            <h1>{heading}</h1>
            <p>{subtitle}</p>
          </div>

          {view === 'register' && (
            <div className="role-tabs" aria-label="Account type">
              <button type="button" className={role === 'student' ? 'active' : ''} onClick={() => setRole('student')}>Register as Student</button>
              <button type="button" className={role === 'owner' ? 'active' : ''} onClick={() => setRole('owner')}>Register as Owner</button>
            </div>
          )}

          <form onSubmit={submit}>
            {view === 'register' && (
              <label className="field">
                <span>Full name</span>
                <input name="name" value={form.name} onChange={update} placeholder="Enter your full name" autoComplete="name" required />
              </label>
            )}
            <label className="field">
              <span>Email or Username</span>
              <input name="email" value={form.email} onChange={update} placeholder={view === 'forgot' ? 'Enter your email address' : 'Enter your email or username'} type={view === 'forgot' ? 'email' : 'text'} autoComplete="username" required />
            </label>

            {view !== 'forgot' && (
              <label className="field">
                <span>Password</span>
                <div className="password-input">
                  <input name="password" value={form.password} onChange={update} placeholder="Enter your password" type={showPassword ? 'text' : 'password'} autoComplete={view === 'login' ? 'current-password' : 'new-password'} required minLength={6} />
                  <button className="eye-button" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </label>
            )}

            {view === 'register' && (
              <label className="field">
                <span>Confirm password</span>
                <input name="confirm" value={form.confirm} onChange={update} placeholder="Re-enter your password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" required minLength={6} />
              </label>
            )}

            {view === 'login' && <button className="forgot-link" type="button" onClick={() => switchView('forgot')}>Forgot password?</button>}

            <button className="primary-button" type="submit">
              {view === 'login' ? 'Login' : view === 'register' ? 'Create Account' : 'Send Reset Link'}
            </button>
            {notice && <div className="notice" role="status"><CheckCircle2 size={17} /> <span>{notice}</span></div>}
          </form>

          <div className="form-footer">
            {view === 'login' ? (
              <>
                <p>Don’t have an account?</p>
                <div className="footer-links">
                  <button type="button" onClick={() => { setRole('student'); switchView('register') }}>Register as Student</button>
                  <span>|</span>
                  <button type="button" onClick={() => { setRole('owner'); switchView('register') }}>Register as Owner</button>
                </div>
              </>
            ) : view === 'register' ? (
              <p>Already have an account? <button type="button" className="inline-link" onClick={() => switchView('login')}>Login</button></p>
            ) : (
              <p>Remembered your password? <button type="button" className="inline-link" onClick={() => switchView('login')}>Login</button></p>
            )}
          </div>
        </section>
      </section>
      <footer className="page-footer">© 2026 Boarding Buddy <span>·</span> Find a place that feels like home</footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
