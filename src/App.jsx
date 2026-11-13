
import './App.css';

const experience = [
  {
    period: '15 December 2022 – Present',
    location: 'Environmental Health Program',
    organisation:
      'Directorate of Public Health Services, Ministry of Health',
    description:
      'Contribute to the planning, coordination, implementation, monitoring and evaluation of public and environmental health programmes.',
    responsibilities: [
      'Contribute to the development of policies, guidelines, frameworks, work plans and proposals.',
      'Conduct health facility monitoring and supervisory visits for environmental health activities and projects.',
      'Support research through data collection and analysis.',
      'Participate in activities under the WASH and Occupational Health and Safety Units.',
    ],
  },
  {
    period: '17 December 2020 – 14 December 2022',
    location: 'Besse Community Clinic',
    organisation: 'Ministry of Health, The Gambia',
    description:
      'Oversaw public and environmental health services across 14 catchment communities, supporting disease prevention and community-level interventions.',
    responsibilities: [
      'Conducted environmental inspections, addressed environmental complaints, and supported vaccination and disease surveillance.',
      'Investigated diseases of public health importance, including measles, yellow fever and poliomyelitis.',
      'Contributed to health education and promotion, birth registration and supervision of mass vaccination campaigns.',
    ],
  },
  {
    period: '4 March 2020 – 16 December 2020',
    location: 'Giboroh Point of Entry',
    organisation: 'Ministry of Health, The Gambia',
    description:
      'Supported public health surveillance and response activities at a point of entry during the COVID-19 period.',
    responsibilities: [
      'Screened international travellers for COVID-19 and other diseases of public health concern.',
      'Facilitated yellow fever vaccination for travellers from endemic zones and referred ill travellers to health facilities.',
      'Supported quarantine procedures for suspected cases and coordinated responses with immigration and security personnel.',
    ],
  },
  {
    period: '29 August 2018 – 3 March 2020',
    location: 'Bwiam General Hospital',
    organisation: 'Ministry of Health, The Gambia',
    description:
      'Contributed to facility-based and community public health activities, environmental assessments and community engagement.',
    responsibilities: [
      'Conducted environmental inspections, community needs assessments, vaccination and disease surveillance.',
      'Assessed water points and water sources, collected data and prepared reports, including monthly returns to the Regional Health Directorate.',
      'Trained Village Health Workers and Community Birth Companions and worked with Village Development Committees on community-based interventions.',
    ],
  },
  {
    period: '24 March 2016 – 28 August 2018',
    location: 'Brikamaba Health Centre',
    organisation: 'Ministry of Health, The Gambia',
    description:
      'Headed public and environmental health activities and supported community-based disease prevention interventions.',
    responsibilities: [
      'Contributed to microplanning for community interventions, including indoor residual spraying for mosquito control.',
      'Conducted environmental and food inspections, disease surveillance, and sample collection and transportation to the National Public Health Laboratory.',
      'Supported food inspection and vaccination activities and investigations involving diseases of public health importance.',
    ],
  },
  {
    period: '10 July 2014 – 23 March 2016',
    location: 'Sami Karantaba Health Centre',
    organisation: 'Ministry of Health, The Gambia',
    description:
      'Delivered public health activities across a catchment area of approximately 42 communities during an early district-level posting.',
    responsibilities: [
      'Conducted compound inspections and screened food vendors.',
      'Supported data compilation and reporting, vaccination, disease surveillance and birth registration.',
      'Trained Village Support Groups and Village Development Committees to support community-level public health activities.',
    ],
  },
];

const expertise = [
  {
    number: '01',
    title: 'Environmental Health',
    description:
      'Environmental inspections, health facility monitoring, sanitation, waste management and environmental health programme implementation.',
  },
  {
    number: '02',
    title: 'Public Health Surveillance',
    description:
      'Disease surveillance, outbreak investigation, vaccination activities and public health response at community and point-of-entry levels.',
  },
  {
    number: '03',
    title: 'Data Analysis',
    description:
      'Applying statistical and data analysis tools to organise, validate, analyse and interpret information for public health decision-making.',
  },
  {
    number: '04',
    title: 'Data Visualisation',
    description:
      'Using dashboards, charts and reporting tools to communicate findings and monitor programme information.',
  },
  {
    number: '05',
    title: 'Digital Data Collection',
    description:
      'Supporting digital surveys, field data collection and structured information gathering.',
  },
  {
    number: '06',
    title: 'WASH and Occupational Health',
    description:
      'Contributing to water, sanitation and hygiene activities and occupational health and safety programme implementation.',
  },
];

const technicalSkills = [
  {
    number: '01',
    title: 'Statistical Analysis',
    description:
      'Statistical computing, data management and analysis for research and public health applications.',
    tools: ['R', 'SPSS', 'Stata'],
    icon: 'chart',
  },
  {
    number: '02',
    title: 'Data Visualisation and Monitoring',
    description:
      'Presenting data through clear visualisations, dashboards and reports to support monitoring and decision-making.',
    tools: ['Power BI', 'Excel'],
    icon: 'visual',
  },
  {
    number: '03',
    title: 'Digital Data Collection',
    description:
      'Digital questionnaire development and electronic field data collection for surveys and public health activities.',
    tools: ['KoboToolbox', 'KoboCollect'],
    icon: 'survey',
  },
];

const projects = [
  {
    number: '01',
    category: 'Research and Data Analysis',
    title: 'Air Pollution and Hospital Admissions in Urban Gambia',
    description:
      'Research examining the relationship between air pollution and hospital admissions in urban Gambia, using statistical analysis to explore potential public health implications.',
    tags: ['Air Quality', 'Statistical Analysis', 'Public Health'],
  },
  {
    number: '02',
    category: 'Digital Data Collection',
    title: 'Household Energy, Air Quality and Waste Survey',
    description:
      'A digital survey initiative focused on household energy use, air quality and waste management to support environmental health research and planning.',
    tags: ['KoboToolbox', 'Field Surveys', 'Environmental Health'],
  },
  {
    number: '03',
    category: 'Monitoring and Reporting',
    title: 'Environmental Health Programme Monitoring',
    description:
      'Professional work involving environmental health monitoring, supervisory visits, data collection and reporting to support programme implementation and evidence-informed decisions.',
    tags: ['Monitoring', 'Data Reporting', 'Programme Support'],
  },
];

const education = [
  {
    label: 'UNDERGRADUATE DEGREE',
    qualification: 'BSc Public and Environmental Health',
    institution: 'University of The Gambia',
  },
  {
    label: 'HIGHER NATIONAL DIPLOMA',
    qualification: 'HND Public and Environmental Health',
    institution: 'The Gambia College',
  },
  {
    label: 'CONTINUING DEVELOPMENT',
    qualification: 'Public Health Research and Data Analytics',
    institution:
      'Professional development interests in research, data analysis and digital tools for public health.',
  },
];

const presentations = [
  {
    title:
      'Ambient Particulate Matter, Humidity and Hospital Admissions in The Gambia: An Ecological Panel Study',
    venue: 'National Public Health Scientific Conference 2.0',
  },
  {
    title:
      'Exposure to Fine Particulate Matter and Volatile Organic Compounds Among Artisanal Fish Smokers in Coastal Gambia: A Pilot Cross-Sectional Study',
    venue: 'National Public Health Scientific Conference 2.0',
  },
  {
    title:
      'Assessing PM2.5 Exposure Among Bullock Quarry Workers in The Gambia During Various Activities',
    venue: '2025 OpenAQ Community Ambassador Graduation',
  },
  {
    title:
      'The Role of Environmental Health Professionals in Advancing One Health and Mitigating the Public Health Impacts of Climate Change',
    venue: 'University of The Gambia',
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SkillIcon({ type }) {
  if (type === 'chart') {
    return (
      <svg
        viewBox="0 0 48 48"
        width="34"
        height="34"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 39V9" />
        <path d="M8 39H41" />
        <rect x="14" y="24" width="6" height="11" rx="1" />
        <rect x="25" y="16" width="6" height="19" rx="1" />
        <rect x="36" y="9" width="5" height="26" rx="1" />
      </svg>
    );
  }

  if (type === 'visual') {
    return (
      <svg
        viewBox="0 0 48 48"
        width="34"
        height="34"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="7" width="38" height="29" rx="3" />
        <path d="M12 29L20 21L26 25L36 14" />
        <path d="M18 42H30" />
        <path d="M24 36V42" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="10" y="6" width="28" height="36" rx="4" />
      <path d="M18 6V4H30V6" />
      <path d="M17 18L20 21L25 15" />
      <path d="M28 19H32" />
      <path d="M17 29L20 32L25 26" />
      <path d="M28 30H32" />
    </svg>
  );
}

function App() {
  return (
    <div className="portfolio" id="home">
      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#home" aria-label="Saikou Camara home">
            <span className="brand-mark">SC</span>
            <span>Saikou Camara</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#expertise">Expertise</a>
            <a href="#skills">Technical Skills</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#education">Education</a>
            <a className="nav-contact" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-content">
            <span className="eyebrow">
              PUBLIC HEALTH · ENVIRONMENT · DATA
            </span>

            <h1>
              Saikou <span>Camara</span>
            </h1>

            <h2>
              Public and Environmental Health Professional
              <span> | Data Analyst</span>
            </h2>

            <p className="hero-description">
              I am a Gambian public and environmental health professional
              with experience in health service delivery, programme
              implementation, environmental health and public health
              research. I am interested in using data and digital tools
              to generate insights that support better public health
              decisions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                Explore My Experience <span aria-hidden="true">→</span>
              </a>
              <a className="button button-secondary" href="#projects">
                View My Work
              </a>
            </div>

            <div className="hero-meta">
              <span>The Gambia</span>
              <span className="meta-dot">•</span>
              <span>Public Health</span>
              <span className="meta-dot">•</span>
              <span>Data Analytics</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Professional profile">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-card">
              <span className="visual-label">PROFESSIONAL PROFILE</span>
              <div className="visual-initials">SC</div>
              <h3>Health. Evidence. Impact.</h3>
              <p>
                Connecting public health practice with data, research
                and evidence-informed decision-making.
              </p>
              <div className="visual-tags">
                <span>Environmental Health</span>
                <span>Research</span>
                <span>Analytics</span>
              </div>
            </div>

            <div className="floating-note">
              <span className="floating-note-icon" aria-hidden="true">↗</span>
              <span>
                <strong>Evidence-informed</strong>
                <small>Public health practice</small>
              </span>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="about">
          <div className="container">
            <SectionHeading
              eyebrow="ABOUT ME"
              title="Public health practice with a data-driven perspective."
              description="My professional journey combines frontline public health experience with a growing focus on research, data analysis and evidence-informed decision-making."
            />

            <div className="about-grid">
              <div className="about-main">
                <p>
                  I am a Public and Environmental Health professional
                  from The Gambia, with experience in public health
                  service delivery and programme implementation at
                  district and national levels. I have worked with the
                  Ministry of Health since 2014, contributing to public
                  health activities and environmental health programmes.
                </p>
                <p>
                  My experience spans environmental inspections,
                  disease surveillance, vaccination activities,
                  community engagement, health facility monitoring and
                  programme reporting. I have also contributed to
                  activities involving water, sanitation and hygiene
                  (WASH) and occupational health and safety.
                </p>
                <p>
                  I am particularly interested in strengthening
                  evidence-informed decision-making through research,
                  statistical analysis and digital tools. My goal is to
                  help translate public health data into useful insights
                  for policies, programmes and practice.
                </p>
              </div>

              <aside className="about-highlight">
                <div className="highlight-symbol" aria-hidden="true">+</div>
                <span className="eyebrow">MY PROFESSIONAL FOCUS</span>
                <h3>Turning public health information into useful evidence.</h3>
                <p>
                  Environmental health, applied research, data quality,
                  digital data collection and clear communication of
                  findings.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <SectionHeading
              eyebrow="CAREER JOURNEY"
              title="Professional Experience"
              description="My experience with the Ministry of Health of The Gambia, from district-level health services to environmental health programme work at the national level."
            />

            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item" key={item.location}>
                  <div className="timeline-marker">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.location}</h3>
                    <h4>{item.organisation}</h4>
                    <p>{item.description}</p>
                    <ul className="experience-list">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="expertise">
          <div className="container">
            <SectionHeading
              eyebrow="AREAS OF EXPERTISE"
              title="Where public health meets data."
              description="Key areas of professional experience and technical interest across environmental health, programme implementation and public health analytics."
            />

            <div className="expertise-grid">
              {expertise.map((item) => (
                <article className="expertise-card" key={item.number}>
                  <span className="card-number">{item.number}</span>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="TECHNICAL TOOLKIT"
              title="Technical Skills"
              description="Key tools I use for statistical analysis, data visualisation and monitoring, and digital data collection."
            />

            <div className="expertise-grid">
              {technicalSkills.map((skill) => (
                <article className="expertise-card skill-card" key={skill.number}>
                  <div className="skill-icon">
                    <SkillIcon type={skill.icon} />
                  </div>

                  <span className="card-number">{skill.number}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>

                  <div className="project-tags skill-tags">
                    {skill.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Research and professional applications."
              description="Examples of research, digital data collection and programme work connected to my public and environmental health interests."
            />

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-topline">
                    <span className="project-number">{project.number}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="research">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH & KNOWLEDGE SHARING"
              title="Research and Presentations"
              description="Explore my research profile and selected presentations on air quality, environmental health and public health practice."
            />

            <div className="projects-grid research-grid">
              <article className="project-card research-profile-card">
                <div className="project-topline">
                  <span className="project-category">SCHOLARLY PROFILE</span>
                </div>
                <h3>Research Profile</h3>
                <p>
                  Explore my research interests and scholarly contributions
                  through my Google Scholar profile.
                </p>
                <a
                  className="button button-primary research-link"
                  href="https://scholar.google.com/citations?user=fxgLm1wAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Google Scholar Profile <span aria-hidden="true">↗</span>
                </a>
              </article>

              <article className="project-card presentations-card">
                <div className="project-topline">
                  <span className="project-category">SELECTED WORK</span>
                </div>
                <h3>Selected Presentations</h3>
                <div className="presentation-list">
                  {presentations.map((presentation, index) => (
                    <div className="presentation-item" key={presentation.title}>
                      <span className="presentation-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4>{presentation.title}</h4>
                        <p>{presentation.venue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <SectionHeading
              eyebrow="EDUCATION"
              title="Academic background and development."
              description="Formal qualifications in public and environmental health, complemented by continuing professional development and an interest in applied data analytics."
            />

            <div className="education-grid">
              {education.map((item, index) => (
                <article
                  className={`education-card ${
                    index === 0 ? 'education-card-accent' : ''
                  }`}
                  key={item.qualification}
                >
                  <span className="education-label">{item.label}</span>
                  <h3>{item.qualification}</h3>
                  <p>{item.institution}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <span className="eyebrow">GET IN TOUCH</span>

            <h2>Let’s collaborate.</h2>

            <p>
              I welcome opportunities to collaborate on public health
              research, environmental health initiatives, data analysis
              and research. Feel free to get in touch
              to discuss ideas and opportunities for collaboration.
            </p>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href="mailto:saikou@gmail.com?subject=Professional%20Collaboration"
              >
                Email Me <span aria-hidden="true">↗</span>
              </a>

              <a
                className="button button-secondary"
                href="tel:+220 83 371"
              >
                Call Me <span aria-hidden="true">↗</span>
              </a>

              <a
                className="button button-secondary"
                href="https://www.linkedin.com/feed/foryou/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">SC</span>
            <span>Saikou Camara</span>
          </a>
          <p>Public and Environmental Health · Data Analytics</p>
          <a className="back-to-top" href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
