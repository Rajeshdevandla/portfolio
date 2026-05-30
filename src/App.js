import './App.css';

function App() {
  return (
    <div>
      <nav>
        <span className="logo">Rajesh Kumar</span>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Rajesh Kumar</h1>
          <p className="title">Full Stack Java Developer</p>
          <p className="location">Chicago, IL</p>
          <p>
            5+ years building scalable full-stack applications with Java, Spring Boot,
            Angular, and AWS. Passionate about clean architecture, event-driven systems,
            and delivering reliable software end-to-end.
          </p>
          <div className="hero-links">
            <a className="btn btn-primary" href="https://github.com/Rajeshdevandla" target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
            <a className="btn btn-outline" href="#contact">Contact Me</a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Backend</h3>
            <div className="skill-tags">
              {['Java 11/17', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices', 'JUnit', 'Mockito'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <h3>Frontend</h3>
            <div className="skill-tags">
              {['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Reactive Forms'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <h3>Database</h3>
            <div className="skill-tags">
              {['PostgreSQL', 'MySQL', 'Schema Design', 'Stored Procedures', 'Query Optimization'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <h3>Cloud & DevOps</h3>
            <div className="skill-tags">
              {['AWS EC2', 'AWS S3', 'AWS Lambda', 'SQS', 'Kafka', 'Docker', 'Jenkins', 'GitHub Actions', 'Git'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
        <div className="experience-list">

          <div className="exp-card">
            <div className="exp-header">
              <h3>Full Stack Java Developer</h3>
              <span className="exp-date">Jan 2025 – Present</span>
            </div>
            <p className="exp-company">Mutual of Omaha — Omaha, NE (Remote, Chicago IL)</p>
            <ul>
              <li>Designed end-to-end features across Angular, Spring Boot, and PostgreSQL with modular, maintainable code.</li>
              <li>Built REST APIs using Spring Boot, Spring Data JPA, and Hibernate with clean service layers.</li>
              <li>Developed Angular components, reactive forms, and routing for internal and customer-facing workflows.</li>
              <li>Deployed on AWS EC2/S3 and implemented event-driven tasks with AWS Lambda and SQS.</li>
              <li>Built and maintained CI/CD pipelines using Jenkins and GitHub Actions.</li>
              <li>Integrated OpenAI API to automate internal workflows, reducing repetitive manual steps.</li>
              <li>Wrote unit and integration tests using JUnit and Mockito; conducted pull request reviews.</li>
            </ul>
          </div>

          <div className="exp-card">
            <div className="exp-header">
              <h3>Full Stack Developer</h3>
              <span className="exp-date">Jan 2023 – Dec 2023</span>
            </div>
            <p className="exp-company">Mutual of Omaha — Omaha, NE (Remote, Chicago IL)</p>
            <ul>
              <li>Built Angular modules (components, services, routing, reactive forms) for a customer-facing insurance portal.</li>
              <li>Developed Spring Boot REST APIs integrated with Angular frontend modules.</li>
              <li>Deployed on AWS EC2/S3 following environment separation and secure configuration practices.</li>
              <li>Used Apache Kafka for async event-driven communication between backend services.</li>
              <li>Collaborated with UI/UX, QA, and product managers across Agile sprints.</li>
            </ul>
          </div>

          <div className="exp-card">
            <div className="exp-header">
              <h3>Backend Java Developer</h3>
              <span className="exp-date">Feb 2020 – Aug 2022</span>
            </div>
            <p className="exp-company">MUFG Bank / PUB Bank — Hyderabad, India</p>
            <ul>
              <li>Developed and maintained REST APIs using Java 11 and Spring Boot for internal banking workflows.</li>
              <li>Designed SQL queries, stored procedures, and schemas using PostgreSQL and MySQL.</li>
              <li>Integrated Apache Kafka for asynchronous event processing between internal services.</li>
              <li>Built basic UI pages using HTML, CSS, and JavaScript for operations team tools.</li>
              <li>Worked with QA and product teams to triage defects and deliver features on schedule.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
        <div className="projects-grid">

          <div className="project-card">
            <h3>AI Document Intelligence Platform</h3>
            <p className="project-subtitle">Full Stack / Cloud / AI Project</p>
            <p>
              End-to-end AI-powered document processing platform with microservices
              for upload, OCR extraction, text processing, and analytics.
            </p>
            <ul>
              <li>Built microservices with Spring Boot and Python (FastAPI) for document processing pipelines.</li>
              <li>Implemented OCR and text extraction using AWS Textract, Kafka, SQS, and Lambda.</li>
              <li>Integrated OpenAI API and Claude API to extract structured insights from unstructured documents.</li>
              <li>Designed event-driven workflows and automated CI/CD pipelines using Docker, GitHub Actions, and Terraform.</li>
              <li>Developed a React dashboard for document viewing, processing status, and analytics visualization.</li>
            </ul>
            <div className="project-tech">
              {['Spring Boot', 'Python (FastAPI)', 'React', 'AWS', 'Kafka', 'SQS', 'Lambda', 'Textract', 'OpenAI API', 'Claude API', 'Docker', 'Terraform'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a
                className="btn btn-primary"
                href="https://github.com/Rajeshdevandla/ai-document-intelligence-platform"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <h2 className="section-title">Education</h2>
        <div className="section-line" />
        <div className="edu-grid">
          <div className="edu-card">
            <h3>DePaul University</h3>
            <p className="degree">M.S. Information Systems &amp; Project Management</p>
            <p className="edu-date">Chicago, IL — 2022 – 2024</p>
          </div>
          <div className="edu-card">
            <h3>GITAM University</h3>
            <p className="degree">B.S. Computer Science</p>
            <p className="edu-date">Hyderabad, India — 2017 – 2020</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
        <div className="contact-grid">
          <div className="contact-item">
            <p className="label">Email</p>
            <a href="mailto:rajeshdevandla11@gmail.com">rajeshdevandla11@gmail.com</a>
          </div>
          <div className="contact-item">
            <p className="label">Phone</p>
            <span>(773) 916-1071</span>
          </div>
          <div className="contact-item">
            <p className="label">GitHub</p>
            <a href="https://github.com/Rajeshdevandla" target="_blank" rel="noreferrer">github.com/Rajeshdevandla</a>
          </div>
          <div className="contact-item">
            <p className="label">Location</p>
            <span>Chicago, IL</span>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Rajesh Kumar · Full Stack Java Developer · Chicago, IL</p>
      </footer>
    </div>
  );
}

export default App;
