import { useState } from "react";
import { Link } from "react-router";
import dndPlayersHandbook from "data-url:../assets/dnd-players-handbook-preview.jpg";
import drawSteelHeroes from "data-url:../assets/draw-steel-heroes-preview.jpg";
import mothershipCover from "data-url:../assets/mothership-cover-preview.jpg";

const readingOptions = ["Recommend fiction", "Recommended non-fiction"];
const tabletopOptions = ["Mothership", "Draw Steel", "DND"];
const tabletopDetails = {
  Mothership: {
    cover: mothershipCover,
    coverAlt: "Mothership Player's Survival Guide cover",
    paragraphs: [
      "Mothership is a science fiction horror game. Think Alien or the Thing, not Return of the Jedi or Star Trek.",
      "I have run both one shots and small campaigns in this system. As someone coming from 5e, I really enjoy how this game stretches a completely different set of muscles.",
      "I knew it was going well the first time I ran when my players all jumped at an innocous sound.",
    ],
  },
  "Draw Steel": {
    cover: drawSteelHeroes,
    coverAlt: "Draw Steel: Heroes cover",
    paragraphs: ["Draw steel is a heroic, cinematic, tactical fantasy ttrpg.",
      "I have only been a player, but have througouly enjoyed my time and would recommend this game to anyone."
    ],
  },
  DND: {
    cover: dndPlayersHandbook,
    coverAlt: "Dungeons & Dragons Player's Handbook cover",
    paragraphs: ["DND 5e is a fantasy ttrpg that was, and still is, the fulcrum to the hobby expanding greatly.",
      "I have run one long campaign that took several years to finish (covid and player availability slowed things down).",
      "As a player I have done several shorter campaigns, and enjoyed my time playing"
    ],
  },
};
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
                        ...tabletopDetails[option],
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
            {selectedDetail.cover && (
              <img
                alt={selectedDetail.coverAlt}
                className="tabletop-cover"
                src={selectedDetail.cover}
              />
            )}
            <h2 id="selected-hobby-heading">{selectedDetail.title}</h2>
            {selectedDetail.books ? (
              <div className="book-recommendations">
                {selectedDetail.books.map((book) => (
                  <BookRecommendation book={book} key={book.title} />
                ))}
              </div>
            ) : selectedDetail.paragraphs ? (
              selectedDetail.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))
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
