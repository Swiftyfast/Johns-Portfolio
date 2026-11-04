import { Link } from "react-router";

export default function HobbiesPage() {
  return (
    <div className="hobbies-page">
      <h1>Hobbies</h1>
      <section aria-labelledby="tabletop-rpgs-heading">
        <h2 id="tabletop-rpgs-heading">Tabletop RPGs</h2>
        <p>Placeholder paragraph.</p>
      </section>
      <section aria-labelledby="film-heading">
        <h2 id="film-heading">Film</h2>
        <p>Placeholder paragraph.</p>
      </section>
      <section aria-labelledby="reading-heading">
        <h2 id="reading-heading">Reading</h2>
        <p>Placeholder paragraph.</p>
      </section>
      <section aria-labelledby="exploring-city-heading">
        <h2 id="exploring-city-heading">Exploring the city</h2>
        <p>
          <Link to="/exploring-the-city">Explore the city</Link>
        </p>
      </section>
    </div>
  );
}
