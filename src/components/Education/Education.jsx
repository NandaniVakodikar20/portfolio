import "./Education.css";

function Education() {

const education = [
  {
    year: "2025 - Present",
    degree: "Master of Computer Applications (MCA)",
    institute:
      "Shrimad Rajchandra Institute of Management & Computer Application, Uka Tarsadia University, Bardoli, Gujarat",
    score: "Currently Pursuing",
  },

  {
    year: "2022 - 2025",
    degree: "Bachelor of Computer Applications (BCA)",
    institute:
      "Smt. Tanuben & Dr. Manubhai Trivedi College of Information Science, Surat",
    score: "CGPA: 7.70",
  },

  {
    year: "2022",
    degree: "Higher Secondary Certificate (HSC)",
    institute:
      "Gyanjyot Hindi Vidyalaya, Surat, Gujarat",
    score: "81.28%",
  },

  {
    year: "2020",
    degree: "Secondary School Certificate (SSC)",
    institute:
      "Suman High School No. 5, Surat, Gujarat",
    score: "72.33%",
  },
];

  return (
    <section className="education" id="education">

     <h2 className="section-title">
    My <span>Education</span>
</h2>

<p className="education-description">
    My academic journey has provided me with strong fundamentals in computer science,
    software development, databases and modern web technologies.
</p>

      <div className="timeline">

        {education.map((item, index) => (

          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="year">{item.year}</span>

              <h3>{item.degree}</h3>

              <h4>{item.institute}</h4>

              <p>{item.score}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Education;