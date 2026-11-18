
import './App.css';

const experience = [
  {
    location: 'Environmental Health Program',
    organisation: 'Directorate of Public Health Services, Ministry of Health',
    description:
      'Supporting the coordination, implementation and monitoring of environmental health programme activities at national level.',
    responsibilities: [
      'Coordinate and monitor environmental health programme activities.',
      'Conduct supervisory visits and monitor environmental health practices in health facilities.',
      'Support data collection, analysis, verification and reporting.',
      'Contribute to the preparation of work plans, proposals, guidelines and programme reports.',
    ],
  },
  {
    location: 'Besse Community Clinic',
    organisation: 'Ministry of Health, The Gambia',
    description:
      'Contributed to health service delivery and public health activities at community level.',
    responsibilities: [
      'Support the implementation of public health activities at facility and community levels.',
      'Participate in disease surveillance and health information reporting.',
      'Support health promotion, community sensitisation and public health education.',
    ],
  },
  {
    location: 'Giboroh Point of Entry',
    organisation: 'Ministry of Health, The Gambia',
    description:
      'Supported public health activities at a designated point of entry, including activities related to COVID-19 and the International Health Regulations.',
    responsibilities: [
      'Support public health screening and surveillance activities at the point of entry.',
      'Contribute to COVID-19 response activities and public health measures.',
      'Support implementation of relevant International Health Regulations activities.',
    ],
  },
  {
    location: 'Bwiam General Hospital',
    organisation: 'Ministry of Health, The Gambia',
    description:
      'Contributed to public health service delivery and health facility activities.',
    responsibilities: [
      'Support disease surveillance and public health reporting.',
      'Participate in health promotion and community sensitisation activities.',
      'Support routine public health activities and coordination with health facility staff.',
    ],
  },
  {
    location: 'Brikamaba Health Centre',
    organisation: 'Ministry of Health, The Gambia',
    description:
      'Supported district-level public health activities, including surveillance, health promotion and immunisation.',
    responsibilities: [
      'Support disease surveillance, data collection and reporting.',
      'Participate in vaccination and immunisation activities.',
      'Conduct health promotion and community engagement activities.',
    ],
  },
  {
    location: 'Sami Karantaba Health Centre',
    organisation: 'Ministry of Health, The Gambia',
    description:
      'Contributed to public health service delivery in a district health facility serving surrounding communities.',
    responsibilities: [
      'Support routine public health activities and disease surveillance.',
      'Participate in health education and community sensitisation.',
      'Support data collection and reporting of public health activities.',
    ],
  },
];

const areasOfInterest = [
  {
    number: '01',
    title: 'Environmental Health',
    description:
      'Environmental health practice and the prevention of environmental health risks.',
  },
  {
    number: '02',
    title: 'Public Health Research',
    description: 'Public health evidence-informed decision-making.',
  },
  {
    number: '03',
    title: 'Air Quality Monitoring',
    description:
      'Air quality monitoring, exposure assessment and investigation of environmental health impacts.',
  },
  {
    number: '04',
    title: 'Data Analysis',
    description:
      'Statistical analysis and interpretation of public health and environmental data.',
  },
  {
    number: '05',
    title: 'Data Visualisation',
    description:
      'Presenting information through dashboards, charts and accessible visual reports.',
  },
  {
    number: '06',
    title: 'Digital Data Collection',
    description:
      'Digital surveys and field data collection using appropriate data collection tools.',
  },
];

const technicalSkills = [
  {
    title: 'Statistical Analysis',
    tools: [
      { name: 'R', icon: 'r' },
      { name: 'SPSS', icon: 'spss' },
      { name: 'Stata', icon: 'stata' },
    ],
  },
  {
    title: 'Data Visualisation and Monitoring',
    tools: [
      { name: 'Power BI', icon: 'powerbi' },
      { name: 'Excel', icon: 'excel' },
    ],
  },
  {
    title: 'Digital Data Collection',
    tools: [
      { name: 'KoboToolbox', icon: 'kobo' },
      { name: 'KoboCollect', icon: 'kobocollect' },
    ],
  },
];

const projects = [
  {
    title: 'Air Pollution and Hospital Admissions in Urban Gambia',
    description:
      'Research examining the relationship between air pollution indicators and hospital admissions in an urban Gambian setting.',
    tags: ['Air Quality', 'Public Health Research', 'Data Analysis'],
  },
  {
    title: 'Household Energy, Air Quality and Waste Survey',
    description:
      'A household survey initiative focused on household energy use, air quality and waste-related environmental health information.',
    tags: ['KoboToolbox', 'Environmental Health', 'Survey Data'],
  },
  {
    title: 'Environmental Health Programme Monitoring',
    description:
      'Application of data collection, monitoring and reporting approaches to support environmental health programme activities.',
    tags: ['Monitoring', 'Reporting', 'Data Management'],
  },
  {
    title:
      'Assessing PM2.5 Exposure Among Bullock Quarry Workers in The Gambia During Various Activities',
    description:
      'To determine the exposure level of quarry workers to particulate matter pollutants while at work, commuting, and at other places.',
    tags: ['PM2.5', 'Occupational Health', 'Exposure Assessment'],
  },
];

const presentations = [
  {
    title:
      'Ambient Particulate Matter, Humidity and Hospital Admissions in The Gambia: An Ecological Panel Study',
    event: 'National Public Health Scientific Conference 2.0',
  },
  {
    title:
      'Exposure to Fine Particulate Matter and Volatile Organic Compounds Among Artisanal Fish Smokers in Coastal Gambia: A Pilot Cross-Sectional Study',
    event: 'National Public Health Scientific Conference 2.0',
  },
  {
    title:
      'Assessing PM2.5 Exposure Among Bullock Quarry Workers in The Gambia During Various Activities',
    event: '2025 OpenAQ Community Ambassador Graduation',
  },
  {
    title:
      'The Role of Environmental Health Professionals in Advancing One Health and Mitigating the Public Health Impacts of Climate Change',
    event: 'University of The Gambia',
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}

      <h2>{title}</h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

function SkillIcon({ type }) {
  const iconStyle = {
    width: 36,
    height: 36,
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (type === 'r') {
    return (
      <span
        style={{
          ...iconStyle,
          color: '#276DC3',
          fontSize: 34,
          fontWeight: 800,
          fontFamily: 'Arial, sans-serif',
        }}
        role="img"
        aria-label="R"
        title="R"
      >
        R
      </span>
    );
  }

  if (type === 'spss') {
    return (
      <svg
        style={iconStyle}
        viewBox="0 0 40 40"
        fill="none"
        aria-label="SPSS"
        role="img"
        title="SPSS"
      >
        <rect x="2" y="2" width="36" height="36" rx="8" fill="#1769AA" />

        <path
          d="M28 11H15a5 5 0 0 0 0 10h10a4 4 0 0 1 0 8H11"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === 'stata') {
    return (
      <span
        style={{
          ...iconStyle,
          color: '#1769AA',
          fontSize: 23,
          fontWeight: 800,
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '-1.5px',
        }}
        role="img"
        aria-label="Stata"
        title="Stata"
      >
        ST
      </span>
    );
  }

  if (type === 'powerbi') {
    return (
      <svg
        style={iconStyle}
        viewBox="0 0 40 40"
        fill="none"
        aria-label="Power BI"
        role="img"
        title="Power BI"
      >
        <path d="M3 23h7v13H3z" fill="#F2C811" />
        <path d="M12 15h7v21h-7z" fill="#E6A700" />
        <path d="M21 7h7v29h-7z" fill="#D99500" />
        <path d="M30 13h7v23h-7z" fill="#F2C811" />
      </svg>
    );
  }

  if (type === 'excel') {
    return (
      <svg
        style={iconStyle}
        viewBox="0 0 40 40"
        fill="none"
        aria-label="Excel"
        role="img"
        title="Excel"
      >
        <rect x="12" y="3" width="25" height="34" rx="2" fill="#217346" />

        <path
          d="M20 10h12M20 16h12M20 22h12M20 28h12"
          stroke="#FFFFFF"
          strokeOpacity=".7"
        />

        <path d="M3 10h19v21H3z" fill="#185C37" />

        <path
          d="m8 15 9 11m0-11L8 26"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === 'kobo' || type === 'kobocollect') {
    return (
      <svg
        style={iconStyle}
        viewBox="0 0 40 40"
        fill="none"
        aria-label={type === 'kobo' ? 'KoboToolbox' : 'KoboCollect'}
        role="img"
        title={type === 'kobo' ? 'KoboToolbox' : 'KoboCollect'}
      >
        <path
          d="M20 2 36 11v18L20 38 4 29V11L20 2Z"
          fill={type === 'kobo' ? '#276DC3' : '#217346'}
        />

        <path
          d="M20 2v18m16-9L20 20 4 11"
          stroke="white"
          strokeWidth="1.4"
          strokeOpacity=".8"
        />

        {type === 'kobo' ? (
          <path
            d="m13 13 4 4 10-10"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="m12 21 5 5 11-12"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    );
  }

  return null;
}

function ContactIcon({ type }) {
  const commonProps = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (type === 'email') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg {...commonProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.07 9.93a16 16 0 0 0 6 6l1.3-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.68A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FocusIcon({ type }) {
  if (type === 'health') {
    return (
      <svg
        viewBox="0 0 48 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="24" cy="8" r="5" />
        <circle cx="10" cy="12" r="4" />
        <circle cx="38" cy="12" r="4" />
        <path d="M15 34v-7a9 9 0 0 1 18 0v7" />
        <path d="M2 33v-6a8 8 0 0 1 8-8 8 8 0 0 1 6 3" />
        <path d="M46 33v-6a8 8 0 0 0-8-8 8 8 0 0 0-6 3" />
        <path d="M19 34v-4h10v4" />
      </svg>
    );
  }

  if (type === 'environment') {
    return (
      <svg
        viewBox="0 0 48 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 35V23l11-6v6l10-6v18" />
        <path d="M25 35V22h19v13" />
        <path d="M31 28v3M38 28v3" />
        <path d="M12 19V10h6v5" />
        <path d="M15 10c-4-2-2-7 2-7" />
        <path d="M17 9c4-3 8 0 7 4" />
        <path d="M24 13c4-1 6 2 4 5" />
        <circle cx="33" cy="6" r="1.4" fill="currentColor" />
        <circle cx="40" cy="13" r="1.1" fill="currentColor" />
        <circle cx="34" cy="19" r="1.3" fill="currentColor" />
        <circle cx="43" cy="20" r="0.9" fill="currentColor" />
        <path d="M3 35h43" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 35V22h8v13" />
      <path d="M19 35V13h8v22" />
      <path d="M33 35V5h8v30" />
      <path d="M3 35h42" />
    </svg>
  );
}

function App() {
  const closeMobileMenu = (event) => {
    const menu = event.currentTarget.closest('details');

    if (menu) {
      menu.open = false;
    }
  };

  const navigationLinks = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Experience', '#experience'],
    ['Projects', '#projects'],
    ['Research', '#presentations'],
    ['Interests', '#interests'],
    ['Contact', '#contact'],
  ];

  return (
    <div className="portfolio">
      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#home" aria-label="Saikou Camara home">
            SC<span>.</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Toggle navigation menu">
              <span></span>
              <span></span>
              <span></span>
            </summary>

            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navigationLinks.map(([label, href]) => (
                <a key={href} href={href} onClick={closeMobileMenu}>
                  {label}
                </a>
              ))}
            </nav>
          </details>

          <nav className="main-nav" aria-label="Main navigation">
            {navigationLinks.map(([label, href]) =>
              label === 'Contact' ? (
                <a className="nav-contact" href={href} key={href}>
                  {label}
                </a>
              ) : (
                <a className="nav-link" href={href} key={href}>
                  {label}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">
                PUBLIC HEALTH <span>·</span> ENVIRONMENT <span>·</span> DATA
              </p>

              <p className="hero-greeting">Hello, I’m</p>

              <h1>
                Saikou Camara<span className="name-period">.</span>
              </h1>

              <div className="hero-titles">
                <p className="hero-professional-title">
                  <span aria-hidden="true">●</span>
                  Public Health Professional
                </p>

                <p className="hero-data-title">
                  <span aria-hidden="true">●</span>
                  Data Analyst
                </p>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-panel">
                <img
                  className="profile-image"
                  src="/profile.jpg"
                  alt="Portrait of Saikou Camara"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';

                    const placeholder =
                      event.currentTarget.parentElement?.querySelector(
                        '.photo-placeholder'
                      );

                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }}
                />

                <div className="photo-placeholder">
                  <span>SC</span>
                  <p>Public Health · Environment · Data</p>
                </div>

                <div className="image-dots" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="container hero-about-wide" id="about">
            <div className="hero-about-divider" aria-hidden="true" />

            <div className="hero-about-content">
              <h2>About Me 😊</h2>

              <p>
                I am a Public and Environmental Health professional from The
                Gambia, with experience in public health service delivery and
                programme implementation at district and national levels. I
                have been working with the Ministry of Health for over a
                decade, contributing to public health activities and
                environmental health programmes.
              </p>

              <p>
                I am particularly interested in strengthening
                evidence-informed decision-making through public and
                environmental health research. My goal is to help translate
                public health data into useful insights for policies,
                programmes and practice.
              </p>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="focus-strip" aria-label="Professional focus areas">
            <div className="focus-item">
              <FocusIcon type="health" />
              <span>Public Health</span>
            </div>

            <div className="focus-item">
              <FocusIcon type="environment" />
              <span>Environment</span>
            </div>

            <div className="focus-item">
              <FocusIcon type="analytics" />
              <span>Data Analytics</span>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="TOOLS AND CAPABILITIES"
              title="Technical Skills"
              description="Tools I use or am developing skills in for statistical analysis, visualisation and digital data collection."
            />

            <div className="skills-grid">
              {technicalSkills.map((skill) => (
                <article className="skill-card" key={skill.title}>
                  <h3>{skill.title}</h3>

                  <div className="skill-tools-list">
                    {skill.tools.map((tool) => (
                      <div className="skill-tool-item" key={tool.name}>
                        <span className="skill-tool-icon">
                          <SkillIcon type={tool.icon} />
                        </span>

                        <span className="skill-tool-name">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="section section-alt" id="experience">
          <div className="container">
            <SectionHeading
              eyebrow="MY PROFESSIONAL JOURNEY"
              title="Professional Experience"
              description="My professional experience across health facilities and the national environmental health programme."
            />

            <div className="experience-list-container">
              {experience.map((item, index) => (
                <details
                  className="experience-card experience-accordion"
                  key={item.location}
                  name="professional-experience"
                >
                  <summary className="experience-summary">
                    <span className="experience-marker">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </span>

                    <span className="experience-heading">
                      <span className="experience-location">
                        {item.location}
                      </span>

                      <span className="experience-organisation">
                        {item.organisation}
                      </span>
                    </span>

                    <span className="experience-arrow" aria-hidden="true">
                      ▼
                    </span>
                  </summary>

                  <div className="experience-content">
                    <p className="experience-description">
                      {item.description}
                    </p>

                    <ul className="experience-list">
                      {item.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <li
                            key={`${item.location}-${responsibilityIndex}`}
                          >
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="PRACTICAL APPLICATION"
              title="Projects"
              description="Examples of research and programme-related work connected to environmental and public health."
            />

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-topline">
                    <span className="project-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="project-category">SELECTED WORK</span>
                  </div>

                  <div className="project-card-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="presentations">
          <div className="container">
            <SectionHeading
              eyebrow="RESEARCH AND KNOWLEDGE SHARING"
              title="Research and Presentations"
              description="Explore my research profile and selected scientific and professional presentations."
            />

            <div className="presentations-full-width">
              <article className="project-card presentations-card">
                <div className="research-block">
                  <span className="project-category">RESEARCH PROFILE</span>

                  <h3>Research</h3>

                  <p>
                    Explore my research interests, publications and academic
                    contributions through my Google Scholar profile.
                  </p>

                  <a
                    className="scholar-link"
                    href="https://scholar.google.com/citations?user=fxgLm1wAAAAJ&hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Google Scholar Profile ↗
                  </a>
                </div>

                <div className="presentations-block">
                  <h3>Presentations</h3>

                  <ul className="presentation-list">
                    {presentations.map((presentation, index) => (
                      <li
                        className="presentation-item"
                        key={presentation.title}
                      >
                        <span className="presentation-number">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div>
                          <h3>{presentation.title}</h3>
                          <p>{presentation.event}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="interests">
          <div className="container">
            <SectionHeading
              eyebrow="PROFESSIONAL FOCUS"
              title="Areas of Interest"
              description="The public health and data-related areas that shape my professional interests."
            />

            <div className="interest-grid">
              {areasOfInterest.map((area) => (
                <article className="interest-card" key={area.number}>
                  <span className="interest-number">{area.number}</span>

                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <SectionHeading
              eyebrow="LET'S CONNECT"
              title="Contact"
              description="Connect with me about public health, environmental health, research and data-related work."
            />

            <div className="contact-content">
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href="mailto:saikou@gmail.com"
                >
                  <ContactIcon type="email" />
                  <span>Email Me</span>
                </a>

                <a className="button button-outline" href="tel:+2203710000">
                  <ContactIcon type="phone" />
                  <span>Call Me</span>
                </a>

                <a
                  className="button button-outline"
                  href="https://www.linkedin.com/feed/foryou/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ContactIcon type="linkedin" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <a className="footer-brand" href="#home">
            SC<span>.</span>
          </a>

          <p>© {new Date().getFullYear()} Saikou Camara</p>

          <p>Public Health · Environment · Data analysis</p>

          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
