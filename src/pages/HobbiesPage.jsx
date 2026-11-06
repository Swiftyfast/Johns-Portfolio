import { useState } from "react";
import { Link } from "react-router";

const readingOptions = ["Recommend fiction", "Recommended non-fiction"];
const tabletopOptions = ["Mothership", "Draw Steel", "DND"];
const fictionRecommendations = [
  { title: "Ancillary Justice", author: "Ann Leckie", coverId: 7355949 },
  { title: "The Topeka School", author: "Ben Lerner", coverId: 8909586 },
  { title: "The Gone World", author: "Tom Sweterlitsch", coverId: 8808811 },
];
const nonfictionRecommendations = [
  { title: "1491", author: "Charles C. Mann", coverId: 803118 },
  { title: "Grant", author: "Ron Chernow", coverId: 11521312 },
  { title: "Endurance", author: "Alfred Lansing", coverId: 542833 },
];

function BookRecommendation({ book }) {
  const [imageError, setImageError] = useState(false);

  return (
    <figure className="book-recommendation">
      {imageError ? (
        <div aria-label="Cover preview unavailable" className="book-cover-fallback" role="img">
          Cover preview unavailable
        </div>
      ) : (
        <img
          alt={`Cover of ${book.title}`}
          className="book-cover"
          loading="lazy"
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
          src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
        />
      )}
      <figcaption>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </figcaption>
    </figure>
  );
}

export default function HobbiesPage() {
  const [selectedDetail, setSelectedDetail] = useState(null);

  return (
    <div className="hobbies-page">
      <h1>Hobbies</h1>
      <div className="hobbies-layout">
        <div className="hobbies-list-panel">
          <section aria-labelledby="tabletop-rpgs-heading">
            <h2 id="tabletop-rpgs-heading">Tabletop RPGs</h2>
            <p>
              Has run DND 5e and Mothership, and played in other systems
              including Pathfinder, Savage Worlds, and Draw Steel.
            </p>
            <ul className="hobbies-list" aria-label="Tabletop RPGs">
              {tabletopOptions.map((option) => (
                <li key={option}>
                  <button
                    aria-pressed={selectedDetail?.title === option}
                    className="hobbies-button"
                    onClick={() =>
                      setSelectedDetail({
                        title: option,
                        description: "More details coming soon.",
                      })
                    }
                    type="button"
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="film-heading">
            <h2 id="film-heading">Film</h2>
            <p>Avid theater goer and physical media collector.</p>
            <p>
              <a
                className="hobbies-button hobbies-film-link"
                href="https://letterboxd.com/Swiftyfast/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Letterboxd
              </a>
            </p>
          </section>
          <section aria-labelledby="reading-heading">
            <h2 id="reading-heading">Reading</h2>
            <p>Enjoy reading fiction and non-fiction books alike.</p>
            <ul className="hobbies-list" aria-label="Reading recommendations">
              {readingOptions.map((option) => (
                <li key={option}>
                  <button
                    aria-pressed={selectedDetail?.title === option}
                    className="hobbies-button"
                    onClick={() => setSelectedDetail(
                      option === "Recommend fiction"
                        ? { title: option, books: fictionRecommendations }
                        : option === "Recommended non-fiction"
                          ? { title: option, books: nonfictionRecommendations }
                          : {
                              title: option,
                              description: "Book recommendations coming soon.",
                            },
                    )}
                    type="button"
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
        {selectedDetail !== null && (
          <aside
            aria-labelledby="selected-hobby-heading"
            aria-live="polite"
            className="hobbies-info"
          >
            <h2 id="selected-hobby-heading">{selectedDetail.title}</h2>
            {selectedDetail.books ? (
              <div className="book-recommendations">
                {selectedDetail.books.map((book) => (
                  <BookRecommendation book={book} key={book.title} />
                ))}
              </div>
            ) : (
              <p>{selectedDetail.description}</p>
            )}
          </aside>
        )}
      </div>
      <section aria-labelledby="exploring-city-heading">
        <h2 id="exploring-city-heading">Exploring the city</h2>
        <p>
          <Link to="/exploring-the-city">Explore the city</Link>
        </p>
      </section>
    </div>
  );
}
