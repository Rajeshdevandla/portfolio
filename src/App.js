import React, { useEffect, useRef, useState } from 'react';
import './App.css';

// ── Animated floating particles background ──────────────────────────
function Particles() {
const canvasRef = useRef(null);
useEffect(() => {
const canvas = canvasRef.current;
const ctx = canvas.getContext('2d');
let animId;
const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
resize();
window.addEventListener('resize', resize);
const dots = Array.from({ length: 60 }, () => ({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
r: Math.random() * 2 + 1,
dx: (Math.random() - 0.5) * 0.4,
dy: (Math.random() - 0.5) * 0.4,
alpha: Math.random() * 0.5 + 0.2,
}));
const draw = () => {
ctx.clearRect(0, 0, canvas.width, canvas.height);
dots.forEach(d => {
d.x += d.dx; d.y += d.dy;
if (d.x < 0 || d.x > canvas.width) d.dx *= -1;
if (d.y < 0 || d.y > canvas.height) d.dy *= -1;
ctx.beginPath();
ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
ctx.fillStyle = `rgba(99,179,237,${d.alpha})`;
ctx.fill();
});
// draw connections
dots.forEach((a, i) => dots.slice(i + 1).forEach(b => {
const dist = Math.hypot(a.x - b.x, a.y - b.y);
if (dist < 120) {
ctx.beginPath();
ctx.moveTo(a.x, a.y);
ctx.lineTo(b.x, b.y);
ctx.strokeStyle = `rgba(99,179,237,${0.15 * (1 - dist / 120)})`;
ctx.lineWidth = 0.5;
ctx.stroke();
}
}));
animId = requestAnimationFrame(draw);
};
draw();
return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
}, []);
return <canvas ref={canvasRef} className="particles-canvas" />;
}

// ── Typewriter hook ─────────────────────────────────────────────────
function useTypewriter(texts, speed = 80, pause = 1800) {
const [display, setDisplay] = useState('');
const [idx, setIdx] = useState(0);
const [charIdx, setCharIdx] = useState(0);
const [deleting, setDeleting] = useState(false);
useEffect(() => {
const current = texts[idx % texts.length];
const timeout = setTimeout(() => {
if (!deleting) {
setDisplay(current.slice(0, charIdx + 1));
if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), pause);
else setCharIdx(c => c + 1);
} else {
setDisplay(current.slice(0, charIdx - 1));
if (charIdx === 0) { setDeleting(false); setIdx(i => i + 1); }
else setCharIdx(c => c - 1);
}
}, deleting ? speed / 2 : speed);
return () => clearTimeout(timeout);
}, [charIdx, deleting, idx, texts, speed, pause]);
return display;
}

// ── Scroll-reveal hook ──────────────────────────────────────────────
function useScrollReveal(threshold = 0.15) {
const ref = useRef(null);
const [visible, setVisible] = useState(false);
useEffect(() => {
const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
if (ref.current) obs.observe(ref.current);
return () => obs.disconnect();
}, [threshold]);
return [ref, visible];
}

// ── Reveal wrapper ──────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }) {
const [ref, visible] = useScrollReveal();
return (
<div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
{children}
</div>
);
}

// ── SVG Illustrations ───────────────────────────────────────────────
const CodeIllustration = () => (
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
<rect x="20" y="20" width="360" height="260" rx="16" fill="#1a1f2e" stroke="#3b82f6" strokeWidth="1.5"/>
<rect x="20" y="20" width="360" height="36" rx="16" fill="#2d3553"/>
<rect x="20" y="40" width="360" height="16" fill="#2d3553"/>
<circle cx="44" cy="38" r="7" fill="#ef4444"/>
<circle cx="66" cy="38" r="7" fill="#eab308"/>
<circle cx="88" cy="38" r="7" fill="#22c55e"/>
<text x="40" y="78" fill="#63b3ed" fontFamily="monospace" fontSize="12">{'<'}</text>
<text x="52" y="78" fill="#a78bfa" fontFamily="monospace" fontSize="12">function</text>
<text x="115" y="78" fill="#34d399" fontFamily="monospace" fontSize="12">App</text>
<text x="140" y="78" fill="#63b3ed" fontFamily="monospace" fontSize="12">() {'{'}</text>
<text x="55" y="100" fill="#e2e8f0" fontFamily="monospace" fontSize="11">return (</text>
<text x="70" y="120" fill="#63b3ed" fontFamily="monospace" fontSize="11">{'<div className="hero">'}</text>
<text x="85" y="140" fill="#a78bfa" fontFamily="monospace" fontSize="11">{'<h1>'}</text>
<text x="115" y="140" fill="#fbbf24" fontFamily="monospace" fontSize="11">Rajesh Kumar</text>
<text x="200" y="140" fill="#a78bfa" fontFamily="monospace" fontSize="11">{'</h1>'}</text>
<text x="85" y="160" fill="#34d399" fontFamily="monospace" fontSize="11">Full Stack Developer</text>
<text x="70" y="180" fill="#63b3ed" fontFamily="monospace" fontSize="11">{'</div>'}</text>
<text x="40" y="200" fill="#63b3ed" fontFamily="monospace" fontSize="12">{'}'}</text>
<rect x="40" y="218" width="120" height="2" rx="1" fill="#3b82f6" opacity="0.6"/>
<rect x="40" y="228" width="80" height="2" rx="1" fill="#a78bfa" opacity="0.5"/>
<rect x="40" y="238" width="160" height="2" rx="1" fill="#34d399" opacity="0.4"/>
<rect x="40" y="248" width="100" height="2" rx="1" fill="#fbbf24" opacity="0.5"/>
</svg>
);

const ServerIllustration = () => (
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="project-svg">
<rect x="10" y="20" width="100" height="25" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5"/>
<circle cx="25" cy="32" r="4" fill="#22c55e"/>
<rect x="35" y="28" width="60" height="4" rx="2" fill="#334155"/>
<rect x="35" y="34" width="40" height="3" rx="1.5" fill="#3b82f6" opacity="0.7"/>
<rect x="10" y="52" width="100" height="25" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5"/>
<circle cx="25" cy="64" r="4" fill="#eab308"/>
<rect x="35" y="60" width="60" height="4" rx="2" fill="#334155"/>
<rect x="35" y="66" width="50" height="3" rx="1.5" fill="#a78bfa" opacity="0.7"/>
<rect x="10" y="84" width="100" height="25" rx="5" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5"/>
<circle cx="25" cy="96" r="4" fill="#3b82f6"/>
<rect x="35" y="92" width="60" height="4" rx="2" fill="#334155"/>
<rect x="35" y="98" width="35" height="3" rx="1.5" fill="#34d399" opacity="0.7"/>
</svg>
);

const CloudIllustration = () => (
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="project-svg">
<ellipse cx="60" cy="65" rx="45" ry="28" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5"/>
<ellipse cx="45" cy="58" rx="22" ry="18" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5"/>
<ellipse cx="78" cy="55" rx="18" ry="14" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5"/>
<line x1="45" y1="80" x2="35" y2="100" stroke="#63b3ed" strokeWidth="1.5" strokeDasharray="4,3"/>
<line x1="60" y1="83" x2="60" y2="103" stroke="#63b3ed" strokeWidth="1.5" strokeDasharray="4,3"/>
<line x1="75" y1="80" x2="85" y2="100" stroke="#63b3ed" strokeWidth="1.5" strokeDasharray="4,3"/>
<circle cx="35" cy="104" r="5" fill="#3b82f6"/>
<circle cx="60" cy="107" r="5" fill="#a78bfa"/>
<circle cx="85" cy="104" r="5" fill="#34d399"/>
</svg>
);

const AppIllustration = () => (
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="project-svg">
<rect x="20" y="10" width="80" height="100" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5"/>
<rect x="30" y="22" width="60" height="38" rx="4" fill="#0f172a"/>
<rect x="34" y="26" width="52" height="4" rx="2" fill="#3b82f6" opacity="0.8"/>
<rect x="34" y="33" width="35" height="3" rx="1.5" fill="#a78bfa" opacity="0.6"/>
<rect x="34" y="39" width="45" height="3" rx="1.5" fill="#34d399" opacity="0.6"/>
<rect x="34" y="45" width="25" height="3" rx="1.5" fill="#fbbf24" opacity="0.6"/>
<rect x="30" y="68" width="26" height="26" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1"/>
<rect x="64" y="68" width="26" height="26" rx="4" fill="#0f172a" stroke="#a78bfa" strokeWidth="1"/>
<circle cx="43" cy="81" r="6" fill="#3b82f6" opacity="0.7"/>
<circle cx="77" cy="81" r="6" fill="#a78bfa" opacity="0.7"/>
<circle cx="60" cy="108" r="4" fill="#334155"/>
</svg>
);

// ── Skill Bar ───────────────────────────────────────────────────────
function SkillBar({ name, level, color, delay }) {
const [ref, visible] = useScrollReveal();
return (
<div ref={ref} className="skill-item" style={{ transitionDelay: `${delay}ms` }}>
<div className="skill-label">
<span>{name}</span>
<span className="skill-pct">{level}%</span>
</div>
<div className="skill-track">
<div className="skill-fill" style={{ width: visible ? `${level}%` : '0%', background: color }} />
</div>
</div>
);
}

// ── Data ────────────────────────────────────────────────────────────
const skills = [
{ name: 'Java / Spring Boot', level: 90, color: 'linear-gradient(90deg,#f59e0b,#ef4444)' },
{ name: 'React / Angular', level: 85, color: 'linear-gradient(90deg,#3b82f6,#a78bfa)' },
{ name: 'AWS / Docker / K8s', level: 80, color: 'linear-gradient(90deg,#10b981,#3b82f6)' },
{ name: 'PostgreSQL / MySQL', level: 82, color: 'linear-gradient(90deg,#a78bfa,#ec4899)' },
{ name: 'REST APIs / Microservices', level: 88, color: 'linear-gradient(90deg,#06b6d4,#3b82f6)' },
{ name: 'Git / CI-CD', level: 78, color: 'linear-gradient(90deg,#f97316,#eab308)' },
];

const projects = [
{
title: 'Smart Expense Tracker',
desc: 'Full-stack app to track expenses, manage transactions, and visualize spending with charts.',
stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
svg: <ServerIllustration />,
link: 'https://github.com/Rajeshdevandla',
color: '#3b82f6',
},
{
title: 'Cloud Microservices Platform',
desc: 'Scalable microservices architecture on AWS with Docker, Kubernetes and event-driven messaging.',
stack: ['Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'Kafka'],
svg: <CloudIllustration />,
link: 'https://github.com/Rajeshdevandla',
color: '#a78bfa',
},
{
title: 'React Dashboard App',
desc: 'Interactive admin dashboard with real-time data visualisation, REST API integration and responsive UI.',
stack: ['React', 'Node.js', 'MySQL', 'Chart.js'],
svg: <AppIllustration />,
link: 'https://github.com/Rajeshdevandla',
color: '#34d399',
},
];

const techStack = ['Java','Spring Boot','React','Angular','AWS','Docker','Kubernetes','PostgreSQL','MySQL','REST API','Microservices','Git'];

// ── App ─────────────────────────────────────────────────────────────
function App() {
const roles = useTypewriter(['Full Stack Java Developer','Spring Boot Engineer','React Developer','AWS Cloud Builder','Microservices Architect']);
const [menuOpen, setMenuOpen] = useState(false);

return (
<div className="app-root">
<Particles />

{/* NAV */}
<nav className="navbar">
<div className="nav-logo">RK<span>.</span></div>
<button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
<span/><span/><span/>
</button>
<ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
{['About','Skills','Projects','Experience','Contact'].map(s => (
<li key={s}><a href={`#${s.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{s}</a></li>
))}
</ul>
</nav>

{/* HERO */}
<section className="hero" id="about">
<div className="hero-text">
<p className="hero-badge">👋 Available for opportunities</p>
<h1 className="hero-name">Rajesh <span>Kumar</span></h1>
<h2 className="hero-role"><span className="cursor-text">{roles}</span><span className="cursor">|</span></h2>
<p className="hero-desc">
4+ years building scalable web applications and distributed systems.
Passionate about clean architecture, performance, and modern cloud infrastructure.
</p>
<div className="hero-tech">
{techStack.map(t => <span key={t} className="tech-pill">{t}</span>)}
</div>
<div className="hero-btns">
<a href="#projects" className="btn btn-primary">View Projects</a>
<a href="#contact" className="btn btn-outline">Contact Me</a>
<a href="https://github.com/Rajeshdevandla" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
</div>
</div>
<div className="hero-image">
<div className="hero-ring">
<CodeIllustration />
</div>
</div>
</section>

{/* SKILLS */}
<section className="section" id="skills">
<Reveal><h2 className="section-title">Technical <span>Skills</span></h2></Reveal>
<Reveal delay={100}><p className="section-sub">Technologies I work with every day</p></Reveal>
<div className="skills-grid">
<div className="skills-bars">
{skills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 80} />)}
</div>
<div className="skills-orbs">
{skills.map((s, i) => (
<Reveal key={s.name} delay={i * 60}>
<div className="orb" style={{ '--orb-color': s.color.match(/#[\w]+/)?.[0] || '#3b82f6' }}>
{s.name.split(' ')[0]}
</div>
</Reveal>
))}
</div>
</div>
</section>

{/* PROJECTS */}
<section className="section section-alt" id="projects">
<Reveal><h2 className="section-title">Featured <span>Projects</span></h2></Reveal>
<Reveal delay={100}><p className="section-sub">Things I've built with passion</p></Reveal>
<div className="projects-grid">
{projects.map((p, i) => (
<Reveal key={p.title} delay={i * 120} className="project-card-wrap">
<div className="project-card" style={{ '--card-accent': p.color }}>
<div className="project-svg-wrap">{p.svg}</div>
<div className="project-body">
<h3>{p.title}</h3>
<p>{p.desc}</p>
<div className="stack-pills">
{p.stack.map(t => <span key={t} className="stack-pill">{t}</span>)}
</div>
<a href={p.link} target="_blank" rel="noreferrer" className="project-link">
View on GitHub ↗
</a>
</div>
</div>
</Reveal>
))}
</div>
</section>

{/* EXPERIENCE */}
<section className="section" id="experience">
<Reveal><h2 className="section-title">Work <span>Experience</span></h2></Reveal>
<div className="timeline">
<Reveal delay={0} className="timeline-item">
<div className="timeline-dot" style={{ background: '#3b82f6' }}/>
<div className="timeline-content">
<span className="timeline-period">2022 – Present</span>
<h3>Full Stack Java Developer</h3>
<p className="timeline-company">Current Role</p>
<p>Building scalable microservices with Java/Spring Boot, designing React frontends, and deploying on AWS infrastructure.</p>
<div className="stack-pills">
{['Java','Spring Boot','React','AWS','Docker'].map(t => <span key={t} className="stack-pill">{t}</span>)}
</div>
</div>
</Reveal>
<Reveal delay={120} className="timeline-item">
<div className="timeline-dot" style={{ background: '#a78bfa' }}/>
<div className="timeline-content">
<span className="timeline-period">2020 – 2022</span>
<h3>Java Backend Developer</h3>
<p className="timeline-company">Previous Role</p>
<p>Developed REST APIs, integrated third-party services, and optimized database performance using PostgreSQL and MySQL.</p>
<div className="stack-pills">
{['Java','Spring Boot','PostgreSQL','MySQL','REST API'].map(t => <span key={t} className="stack-pill">{t}</span>)}
</div>
</div>
</Reveal>
</div>
</section>

{/* CONTACT */}
<section className="section section-alt" id="contact">
<Reveal><h2 className="section-title">Let's <span>Connect</span></h2></Reveal>
<Reveal delay={100}><p className="section-sub">Open to full-time roles and freelance projects</p></Reveal>
<div className="contact-grid">
<Reveal delay={0}>
<a href="mailto:rajeshdevandla11@gmail.com" className="contact-card">
<div className="contact-icon">✉️</div>
<div><strong>Email</strong><p>rajeshdevandla11@gmail.com</p></div>
</a>
</Reveal>
<Reveal delay={80}>
<a href="tel:7739161071" className="contact-card">
<div className="contact-icon">📱</div>
<div><strong>Phone</strong><p>(773) 916-1071</p></div>
</a>
</Reveal>
<Reveal delay={160}>
<a href="https://linkedin.com/in/rajesh-kumar-devandla" target="_blank" rel="noreferrer" className="contact-card">
<div className="contact-icon">💼</div>
<div><strong>LinkedIn</strong><p>rajesh-kumar-devandla</p></div>
</a>
</Reveal>
<Reveal delay={240}>
<a href="https://github.com/Rajeshdevandla" target="_blank" rel="noreferrer" className="contact-card">
<div className="contact-icon">🐙</div>
<div><strong>GitHub</strong><p>Rajeshdevandla</p></div>
</a>
</Reveal>
</div>
</section>

{/* FOOTER */}
<footer className="footer">
<p>Designed & Built by <strong>Rajesh Kumar</strong> · {new Date().getFullYear()}</p>
<p className="footer-sub">Java · Spring Boot · React · AWS</p>
</footer>
</div>
);
}

export default App;
