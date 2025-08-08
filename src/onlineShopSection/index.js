import './index.css';

const OnlineShopSection = () => {
  return (
    <section className="project-section" id="onlineShop">
        <h2>Online Shop</h2>
        <ul className="listed">
            <li>Product catalog with advanced filtering and search</li>
            <li>Multi-currency support (USD & RUB)</li>
            <li>Dynamic rendering of different product categories</li>
            <li>Clean and interactive UI with Ant Design</li>
        </ul>

        <p><strong>Technologies Used:</strong> React, Redux, Ant Design, JSON Data</p>

        <a href="https://elegant-cheesecake-af968f.netlify.app/" target="_blank" rel="noreferrer">View Project</a>
        <div className="project-preview">
           <img src="/images/shop.png" alt="Online Shop "></img>
        </div>
    </section>
  );
};

export default OnlineShopSection;
