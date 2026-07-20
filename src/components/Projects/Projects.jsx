import "./Projects.css";

function Projects() {

  const projects = [

    {
      title: "EliteSalon – Book Smart, Look Smart",

      featured: true,

      status: "🚧 In Development",

      description:
        "A full-stack salon booking platform built using the MERN Stack with separate Customer, Owner, Admin, and Guest modules. The application provides pincode-based salon search, appointment booking, appointment rescheduling, service management, and responsive dashboards. REST APIs enable seamless frontend-backend communication while MongoDB efficiently manages application data.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "REST API",
        "Git",
        "GitHub"
      ]
    },

    {
      title: "PetCareHub – Online Veterinary System",

      featured: false,

      status: "📚 Academic Project",

      description:
        "A web-based veterinary management system developed using PHP and MySQL. The application allows users to book pet appointments, manage pet records, browse pet-related products, and perform CRUD operations through separate user and admin modules. The responsive interface ensures a smooth and user-friendly experience.",

      tech: [
        "PHP",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap"
      ]
    }

  ];

  return (

    <section className="projects" id="projects">

      <p className="section-tag">
        MY WORK
      </p>

      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <p className="project-description">
        Here are some of the projects I have developed during my academic journey
        and personal learning. These projects demonstrate my ability to build
        scalable, responsive and user-friendly web applications using modern
        technologies.
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            className={`project-card ${project.featured ? "featured-card" : ""}`}
            key={index}
          >

            <div className="project-image">

              {project.featured && (
                <div className="featured-badge">
                  ⭐ Featured Project
                </div>
              )}

              {/* Screenshot yaha add karna */}
              <div className="image-placeholder">

                <h3>{project.title}</h3>

                {/* <p>
                  Project Screenshot
                </p> */}

              </div>

            </div>

            <div className="project-content">

              <div className="project-status">

                {project.status}

              </div>

              <p>

                {project.description}

              </p>

              <div className="tech-list">

                {project.tech.map((tech, i) => (

                  <span key={i}>

                    {tech}

                  </span>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Projects;