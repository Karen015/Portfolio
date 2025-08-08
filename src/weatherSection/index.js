import './index.css';

const WeatherSection = () => {
  return (
    <section className="project-section" id="weather">
        <h2>Weather API</h2>
        <ul className="listed">
            <li>Provides current weather and multi-day forecast for any location</li>
            <li>Autocomplete with real-time suggestions using WeatherAPI</li>
            <li>Responsive design with localization support</li>
            <li>Efficient asynchronous data fetching</li>
        </ul>
        <p><strong>Technologies Used:</strong> React, Context API, CSS Modules, WeatherAPI</p>
        <a href="https://gleeful-dango-40cbee.netlify.app/" target="_blank" rel="noreferrer">View Project</a>
      <div className="project-preview">
        <img src="/images/weather.png" alt="Weather App" />
      </div>
    </section>
  );
};

export default WeatherSection;
