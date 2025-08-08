import JiraSection from "../jiraSection";
import WeatherSection from "../weatherSection";
import OnlineShopSection from "../onlineShopSection";
import "./index.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My projects</h2>
      <div className="projects-list">
        <JiraSection />
        <WeatherSection />
        <OnlineShopSection />
      </div>
    </section>
  );
};

export default Projects;
