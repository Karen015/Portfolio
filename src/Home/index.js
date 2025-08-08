import './index.css';

const MainPage = () => {
  return (
    <div className="main_section">
      <div className="gradient"></div>

      <h1 className="title">Karen Aghajanyan</h1>
      <p className="subtitle">
        Я frontend-разработчик, создающий современные и удобные интерфейсы. HTML, CSS Java Script, React, Redux, Firebase - мои основные инструменты.
      </p>

      <button
        className="button"
        onClick={() => window.open('/resume.pdf')}
      >
        📄 Скачать резюме
      </button>

      <div className="projects">
        <a href="https://sprightly-heliotrope-58bac4.netlify.app/" className="project-card">Jira Clone</a>
        <a href="https://gleeful-dango-40cbee.netlify.app/" className="project-card">Weather App with API</a>
        <a href="https://elegant-cheesecake-af968f.netlify.app/" className="project-card">Online Shop</a>
      </div>

      <div className="contact">
        <p>Linkedin: www.linkedin.com/in/karen-aghajanyan/</p>
        <p>Email: karen@example.com</p>
        <p>GitHub: github.com/karen-dev</p>
      </div>
    </div>
  );
};

export default MainPage;
