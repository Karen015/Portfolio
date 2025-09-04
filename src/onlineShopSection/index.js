import './index.css';

const OnlineShopSection = () => {
  return (
    <section className="project-section" id="onlineShop">
        <h2>List Am Clone</h2>
        <ul className="listed">
            <li>Product catalog with filtering</li>
            <li>Dynamic rendering of different product categories</li>
            <li>Clean and interactive UI</li>
        </ul>

        <p><strong>Technologies Used:</strong> HTML, CSS, JS, React, Meilisearch, React-Router</p>

        <a href="https://super-licorice-5c8f8c.netlify.app/" target="_blank" rel="noreferrer">View Project</a>
        <div className="project-preview">
           <img src="/images/listAm .png" alt="Online Shop "></img>
        </div>
    </section>
  );
};

export default OnlineShopSection;
