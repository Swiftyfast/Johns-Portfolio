export default function WorkExperiencePage() {
  return (
    <div className="work-experience-page">
      <section aria-labelledby="revlogical-heading">
        <h1 id="revlogical-heading">Revlogical/Segistics</h1>
        <p>September 2021-November 2026</p>
        <ul>
          <li>
            Maintained and updated the Revlogical point-of-sale system as its
            only engineer until end of life.
            <ul className="work-tech-list" aria-label="Technologies used">
              <li>React</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </li>
          <li>
            Worked on the Revlogical mobile auction app.
            <ul className="work-tech-list" aria-label="Technologies used">
              <li>React Native</li>
              <li>Node.js</li>
              <li>Cloud Firestore</li>
            </ul>
          </li>
          <li>
            After the tech team split off into Segistics, worked on the auction
            app, admin web application, and web bidding application.
            <ul className="work-tech-list" aria-label="Technologies used">
              <li>React</li>
              <li>Node.js</li>
              <li>Cloud Firestore</li>
            </ul>
          </li>
          <li>
            Helped create an inventory management system incorporated into the
            admin application. Assisted with quality assurance of all Segistics
            products.
            <ul className="work-tech-list" aria-label="Technologies used">
              <li>React</li>
              <li>Node.js</li>
              <li>Cloud Firestore</li>
              <li>Claude</li>
              <li>Copilot</li>
            </ul>
          </li>
        </ul>
      </section>

      <section aria-labelledby="non-software-heading">
        <h2 id="non-software-heading">Non-software work experience</h2>
        <ul>
          <li>Insurance adjuster licensing - AIG</li>
          <li>School-age substitute - Johnson County Parks and Recreation</li>
          <li>Part time election worker - Johnson County Election Office</li>
        </ul>
      </section>
    </div>
  );
}
