import './App.css';

const experience = [
  {
    company: 'Mutual of Omaha',
    location: 'Omaha, NE (Remote — Chicago, IL)',
    title: 'Full Stack Java Developer',
    period: 'Jan 2025 – Present',
    bullets: [
      'Designed and implemented end-to-end features across Angular, Spring Boot, and PostgreSQL, ensuring consistent data flow, modular code structure, and maintainability.',
      'Built backend REST APIs using Spring Boot, Spring Data JPA, and Hibernate, focusing on clean service layers, reusable components, and reliable business logic.',
      'Developed Angular components, services, reactive forms, and routing configurations to deliver responsive UI modules for internal and customer-facing workflows.',
      'Deployed applications on AWS EC2 and stored static assets in AWS S3, applying cloud fundamentals such as stateless services, decoupling, and environment-based configuration.',
      'Implemented event-driven backend tasks using AWS Lambda and SQS, enabling asynchronous processing and reducing load on synchronous API calls.',
      'Built and maintained CI/CD pipelines using Jenkins and GitHub Actions, automating build, test, and deployment steps to improve release consistency.',
      'Integrated the OpenAI API to automate a small internal workflow, reducing repetitive manual steps and improving team productivity.',
      'Conducted pull request reviews and wrote unit/integration tests using JUnit and Mockito to maintain code quality and prevent regressions.',
    ],
  },
  {
    company: 'Mutual of Omaha',
    location: 'Omaha, NE (Remote — Chicago, IL)',
    title: 'Full Stack Developer',
    period: 'Jan 2023 – Dec 2023',
    bullets: [
      'Built Angular modules including components, services, routing, and reactive forms for a customer-facing insurance portal used by thousands of users.',
      'Developed Spring Boot REST APIs and integrated them with Angular frontend modules to deliver reliable UI-to-API communication.',
      'Deployed application components on AWS EC2/S3, following cloud best practices such as environment separation, secure configuration, and logging.',
      'Used Apache Kafka for asynchronous event-driven communication between backend services, improving decoupling and reliability of background workflows.',
      'Contributed to code reviews, documentation, and shared coding standards to maintain consistency across the engineering team.',
    ],
  },
  {
    company: 'MUFG Bank / PUB Bank',
    location: 'Hyderabad, India',
    title: 'Backend Java Developer',
    period: 'Feb 2020 – Aug 2022',
    bullets: [
      'Developed and maintained REST APIs using Java 11 and Spring Boot to support internal banking workflows, ensuring reliability and compliance with internal standards.',
      'Designed SQL queries, stored procedures, and database schemas using PostgreSQL and MySQL, optimizing queries for performance and accuracy.',
      'Integrated Apache Kafka to enable asynchronous event processing between internal services, reducing dependency on synchronous communication.',
      'Built basic UI pages using HTML, CSS, and JavaScript for internal tools used by operations teams.',
    ],
  },
];

const skills = [
  { label: 'Backend', items: 'Java (11/17), Spring Boot, REST APIs, Microservices, JUnit/Mockito' },
  { label: 'Frontend', items: 'Angular, TypeScript, JavaScript, HTML/CSS, Reactive Forms' },
  { label: 'Database', items: 'PostgreSQL, MySQL, Schema Design, Stored Procedures' },
  { label: 'Cloud & DevOps', items: 'AWS (EC2, S3, Lambda, SQS), Kafka, Docker, Git, Jenkins, GitHub Actions' },
];

const education = [
  {
    school: 'DePaul University',
    location: 'Chicago, IL',
    degree: 'M.S. Information Systems & Project Management',
    period: '2022 – 2024',
  },
  {
    school: 'GITAM University',
    location: 'Hyderabad, India',
    degree: 'B.S. Computer Science',
    period: '2017 – 2020',
  },
];

function App() {
  return (
    <div className="portfolio">
      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <h1>Rajesh Kumar</h1>
          <p className="hero-title">Full Stack Java Developer</p>
          <p className="hero-location">Chicago, IL</p>
          <div className="hero-links">
            <a href="mailto:rajeshdevandla11@gmail.com">rajeshdevandla11@gmail.com</a>
            <span className="divider">·</span>
            <a href="tel:7739161071">(773) 916-1071</a>
            <span className="divider">·</span>
            <a href="https://www.linkedin.com/in/rajeshdevandla" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="divider">·</span>
            <a href="https://github.com/Rajeshdevandla" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </header>

      <main className="main">
        {/* About */}
        <section className="section">
          <h2 className="section-title">About</h2>
          <p className="about-text">
            Full Stack Java Developer with 5+ years of experience building scalable enterprise
            applications across Angular, Spring Boot, and AWS. I focus on clean architecture,
            reliable APIs, and smooth CI/CD pipelines — from insurance portals handling thousands
            of users to AI-powered document processing platforms.
          </p>
        </section>

        {/* Skills */}
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map(({ label, items }) => (
              <div key={label} className="skill-card">
                <span className="skill-label">{label}</span>
                <span className="skill-items">{items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map((job, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-header">
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-company">{job.company} &mdash; <span className="job-location">{job.location}</span></p>
                  </div>
                  <span className="job-period">{job.period}</span>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="project-card">
            <div className="project-header">
              <div>
                <h3 className="project-title">AI Document Intelligence Platform</h3>
                <p className="project-stack">Spring Boot · Python (FastAPI) · React · AWS · Kafka · OpenAI API · Claude API</p>
              </div>
              <a
                className="project-link"
                href="https://github.com/Rajeshdevandla/ai-document-intelligence-platform"
                target="_blank"
                rel="noreferrer"
              >
                GitHub &rarr;
              </a>
            </div>
            <ul className="job-bullets">
              <li>Built an end-to-end AI-powered document processing platform using Spring Boot, Python (FastAPI), React, and AWS.</li>
              <li>Implemented microservices for document upload, OCR extraction, text processing, and analytics using Kafka, SQS, Lambda, and Textract.</li>
              <li>Integrated OpenAI API and Claude API to extract structured insights from unstructured documents.</li>
              <li>Designed event-driven workflows and automated pipelines using Docker, GitHub Actions, and Terraform.</li>
              <li>Developed a React dashboard for document viewing, processing status, and analytics visualization.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="edu-grid">
            {education.map((e, i) => (
              <div key={i} className="edu-card">
                <p className="edu-school">{e.school}</p>
                <p className="edu-location">{e.location}</p>
                <p className="edu-degree">{e.degree}</p>
                <p className="edu-period">{e.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="section contact-section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-links">
            <a href="mailto:rajeshdevandla11@gmail.com" className="contact-btn">Email Me</a>
            <a href="https://www.linkedin.com/in/rajeshdevandla" target="_blank" rel="noreferrer" className="contact-btn contact-btn-outline">LinkedIn</a>
            <a href="https://github.com/Rajeshdevandla" target="_blank" rel="noreferrer" className="contact-btn contact-btn-outline">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Rajesh Kumar &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
