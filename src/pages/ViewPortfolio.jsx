import './ViewPortfolio.css';

function ViewPortfolio({ data, onNavigate }) {
  if (!data) {
    return (
      <div className="view">
        <div className="empty">
          <h2>📋 No Portfolio Yet</h2>
          <p>Create your professional portfolio to showcase your skills</p>
          <button onClick={function() { onNavigate('create'); }}>Create Portfolio</button>
        </div>
      </div>
    );
  }

  var skillsArray = data.skills.split(',');
  var experienceArray = data.experience ? data.experience.split('\n').filter(function(e) { return e.trim(); }) : [];
  var projectsArray = data.projects ? data.projects.split('\n').filter(function(p) { return p.trim(); }) : [];
  
  function goHome() {
    onNavigate('home');
  }

  function goEdit() {
    onNavigate('create');
  }

  function printPortfolio() {
    window.print();
  }

  return (
    <div className="view">
      <div className="buttons">
        <button onClick={goHome}>🏠 Home</button>
        <button onClick={goEdit}>✏️ Edit</button>
        <button onClick={printPortfolio} className="print-btn">🖨️ Print/Save PDF</button>
      </div>

      <div className="portfolio">
        <div className="header">
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
          <div className="contact-info">
            <span>📧 {data.email}</span>
            {data.phone && <span>📱 {data.phone}</span>}
            {data.location && <span>📍 {data.location}</span>}
          </div>
          <div className="social-links">
            {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          </div>
        </div>

        <div className="section about-section">
          <h3>💼 Professional Summary</h3>
          <p>{data.about}</p>
        </div>

        <div className="section skills-section">
          <h3>🛠️ Technical Skills</h3>
          <div className="skills">
            {skillsArray.map(function(skill, i) {
              return <span key={i}>{skill.trim()}</span>;
            })}
          </div>
        </div>

        {experienceArray.length > 0 && (
          <div className="section experience-section">
            <h3>💼 Work Experience</h3>
            {experienceArray.map(function(exp, i) {
              return <div key={i} className="experience-item">{exp}</div>;
            })}
          </div>
        )}

        {projectsArray.length > 0 && (
          <div className="section projects-section">
            <h3>🚀 Projects</h3>
            {projectsArray.map(function(project, i) {
              return <div key={i} className="project-item">{project}</div>;
            })}
          </div>
        )}

        <div className="footer-section">
          <p>✨ Portfolio generated on {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewPortfolio;
