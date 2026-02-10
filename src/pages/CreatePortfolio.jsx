import { useState } from 'react';
import './CreatePortfolio.css';

function CreatePortfolio({ onNavigate, onSaveData }) {
  var [name, setName] = useState('');
  var [title, setTitle] = useState('');
  var [email, setEmail] = useState('');
  var [phone, setPhone] = useState('');
  var [location, setLocation] = useState('');
  var [about, setAbout] = useState('');
  var [skills, setSkills] = useState('');
  var [experience, setExperience] = useState('');
  var [projects, setProjects] = useState('');
  var [github, setGithub] = useState('');
  var [linkedin, setLinkedin] = useState('');

  function goBack() {
    onNavigate('home');
  }

  function submitForm(e) {
    e.preventDefault();
  
    var userData = {
      name: name,
      title: title,
      email: email,
      phone: phone,
      location: location,
      about: about,
      skills: skills,
      experience: experience,
      projects: projects,
      github: github,
      linkedin: linkedin
    };

    onSaveData(userData);
    onNavigate('view');
  }

  return (
    <div className="create">
      <button className="back" onClick={goBack}>← Back</button>
      
      <h1>Create Professional Portfolio</h1>
      <p className="subtitle">Build your professional profile to impress companies</p>

      <form onSubmit={submitForm}>
        <div className="form-section">
          <h3>Personal Information</h3>
          <input
            type="text"
            placeholder="Full Name *"
            value={name}
            onChange={function(e) { setName(e.target.value); }}
            required
          />
          
          <input
            type="text"
            placeholder="Professional Title (e.g. Full Stack Developer, Data Analyst) *"
            value={title}
            onChange={function(e) { setTitle(e.target.value); }}
            required
          />
          
          <div className="row">
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={function(e) { setEmail(e.target.value); }}
              required
            />
            
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={function(e) { setPhone(e.target.value); }}
              required
            />
          </div>
          
          <input
            type="text"
            placeholder="Location (e.g. Mumbai, Maharashtra)"
            value={location}
            onChange={function(e) { setLocation(e.target.value); }}
          />
        </div>

        <div className="form-section">
          <h3>Professional Summary</h3>
          <textarea
            placeholder="Write a compelling summary about yourself, your expertise, and career goals (3-5 lines) *"
            value={about}
            onChange={function(e) { setAbout(e.target.value); }}
            rows="5"
            required
          />
        </div>

        <div className="form-section">
          <h3>Skills</h3>
          <textarea
            placeholder="List your technical skills (e.g. HTML, CSS, JavaScript, React, Node.js, Python, SQL) *"
            value={skills}
            onChange={function(e) { setSkills(e.target.value); }}
            rows="3"
            required
          />
        </div>

        <div className="form-section">
          <h3>Experience</h3>
          <textarea
            placeholder="Your work experience or internships (Format: Job Title at Company | Duration | Key responsibilities)"
            value={experience}
            onChange={function(e) { setExperience(e.target.value); }}
            rows="4"
          />
        </div>

        <div className="form-section">
          <h3>Projects</h3>
          <textarea
            placeholder="Your best projects (Format: Project Name | Technologies | Description | Link)"
            value={projects}
            onChange={function(e) { setProjects(e.target.value); }}
            rows="5"
          />
        </div>

        <div className="form-section">
          <h3>Social Links</h3>
          <input
            type="url"
            placeholder="GitHub Profile URL (e.g. https://github.com/username)"
            value={github}
            onChange={function(e) { setGithub(e.target.value); }}
          />
          
          <input
            type="url"
            placeholder="LinkedIn Profile URL (e.g. https://linkedin.com/in/username)"
            value={linkedin}
            onChange={function(e) { setLinkedin(e.target.value); }}
          />
        </div>
        
        <button type="submit">🚀 Generate Professional Portfolio</button>
      </form>
    </div>
  );
}

export default CreatePortfolio;
