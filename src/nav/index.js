import './index.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="contact">
                <p>Email: karen.aghajanyan.11@gmail.com</p>
                <a href="https://github.com/Karen015" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/karen-aghajanyan/" target="_blank" rel="noreferrer">Linkedin</a>
                 <button className="button" onClick={() => window.open('/resume.pdf')}>
                        Downlowad CV
                </button>
            </div>
        </div>
    )
}

export default Navbar