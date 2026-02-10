import './Home.css';

function Home({ onNavigate }) {
  function handleClick() {
    onNavigate('create');
  }

  return (
    <div className="home">
      <div className="hero-content">
        <h1>🎯 Professional Portfolio Generator</h1>
        <p>Create your stunning portfolio in 5 minutes and impress recruiters</p>
        
        <div className="boxes">
          <div className="box">
            <div className="icon">⚡</div>
            <h2>Fast Setup</h2>
            <p>Quick and easy form to fill your details</p>
          </div>
          <div className="box">
            <div className="icon">✨</div>
            <h2>Professional</h2>
            <p>Company-ready portfolio design</p>
          </div>
          <div className="box">
            <div className="icon">📱</div>
            <h2>Responsive</h2>
            <p>Works perfectly on all devices</p>
          </div>
        </div>

        <button onClick={handleClick}>🚀 Create My Portfolio</button>
        
        <div className="features">
          <span>✅ No coding required</span>
          <span>✅ Print/Save as PDF</span>
          <span>✅ 100% Free</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
