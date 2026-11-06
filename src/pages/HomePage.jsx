import { Link } from "react-router";

const headshot = new URL("../assets/john_portfolio_1.jpg", import.meta.url).toString();

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="home-copy">
          <h1>Hello, I'm John!</h1>
          <p className="home-intro">
            I am a software engineer who likes to work as part of a team to build solutions. I have experience in React, React Native, Node.js, among other technologies.
          </p>
          <p className="home-intro">I am open to the greater Kansas City area in office or hybrid, or remote opportunities.</p>
          <p className="home-projects-link">
            <Link to="/projects">Explore my projects</Link>
          </p>

          <section aria-labelledby="home-contact-heading" className="home-contact">
            <h2 id="home-contact-heading">Contact</h2>
            <ul>
              <li>
                Email: <a href="mailto:jdavidswift@gmail.com">jdavidswift@gmail.com</a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/john-swift-b20730137/"
                  rel="noreferrer"
                  target="_blank"
                >
                  linkedin.com/in/john-swift-b20730137
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="https://github.com/Swiftyfast" rel="noreferrer" target="_blank">
                  github.com/Swiftyfast
                </a>
              </li>
              <li>Phone: 913-488-9388</li>
            </ul>
          </section>
        </div>
        <div className="home-photo-wrap">
          <img
            alt="John standing in front of a bookshelf"
            className="home-photo"
            src={headshot}
          />
        </div>
      </div>
    </div>
  );
}
