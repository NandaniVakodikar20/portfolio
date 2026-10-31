import "./SectionHeader.css";

function SectionHeader({ tag, title, highlight, subtitle, center = false }) {
  return (
    <div className={`section-header-block ${center ? "center-align" : ""}`}>
      {tag && (
        <div className="tag-badge">
          <span className="indicator-dot" />
          <span>{tag}</span>
        </div>
      )}
      <h2 className="section-heading">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtext">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
