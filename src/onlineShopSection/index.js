import './index.css';

const OnlineShopSection = () => {
  return (
    <section className="project-section" id="onlineShop">
        <h2>Online Shop</h2>
        <ul className="listed">
            <li>Product catalog with filtering</li>
            <li>Dynamic rendering of different product categories</li>
            <li>Clean and interactive UI</li>
        </ul>

        <p><strong>Technologies Used:</strong> HTML, CSS, LESS, JS.</p>

        <a href="https://elegant-cheesecake-af968f.netlify.app/" target="_blank" rel="noreferrer">View Project</a>
        <div className="project-preview">
           <img src="/images/shop.png" alt="Online Shop "></img>
        </div>
    </section>
  );
};

export default OnlineShopSection;
