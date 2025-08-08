import './index.css';

const MainSection = () => {
  return (
    <div className="main_section">
      <div className="gadient"></div>

      <h1 className="title">Karen Aghajanyan</h1>
      <p className="subtitle">
        Я frontend-разработчик, создающий современные и удобные интерфейсы. HTML, CSS Java Script, React, Redux, Firebase - мои основные инструменты.
      </p>

     

      <div className="projects">
        <a href="#jira" className="project_link">Jira Clone</a>
        <a href="#weather" className="project_link">Weather App with API</a>
        <a href="#onlineShop" className="project_link">Online Shop</a>
      </div>

     
    </div>
  );
};

export default MainSection;
