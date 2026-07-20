import "./Education.css";

function Education() {

  const education = [
    {
      year: "2026",
      degree: "Master of Computer Applications (MCA)",
      institute: "Uka Tarsadia University",
      score: "Currently Pursuing"
    },
    {
      year: "2025",
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Veer Narmad South Gujarat University",
      score: "77%"
    },
    {
      year: "2022",
      degree: "Higher Secondary (HSC)",
      institute: "GSEB",
      score: "81%"
    },
    {
      year: "2020",
      degree: "Secondary School (SSC)",
      institute: "GSEB",
      score: "72%"
    }
  ];

  return (
    <section className="education" id="education">

      <h2 className="section-title">
        My <span>Education</span>
      </h2>

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