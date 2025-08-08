import './index.css';

const JiraSection = () => {
  return (
    <section className="project-section"  id="jira">
    <h2>Jira Clone</h2>
    <ul className="listed">
        <li>Kanban-style task management with drag-and-drop</li>
        <li>Task creation, editing, and column organization</li>
        <li>Persisted state using localStorage</li>
        <li>Simulates real-world project collaboration</li>
    </ul>
    <p>
        <strong>Technologies Used:</strong> React, Redux Toolkit, CSS, localStorage
    </p>
    <a href="https://sprightly-heliotrope-58bac4.netlify.app/" rel="noreferrer" target="_blank">View Project</a>
      <div className="project-preview">
        <img src="images/jira.png" alt="Jira Clone"/>
      </div>
    </section>
  );
};

export default JiraSection;
