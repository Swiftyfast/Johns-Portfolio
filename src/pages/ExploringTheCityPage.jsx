import { useState } from "react";

const areas = ["Crossroads", "Martini Corner", "Plaza", "River Market"];

export default function ExploringTheCityPage() {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <div className="exploring-city-page">
      <h1>Exploring the City</h1>
      <p className="exploring-city-note">
        <em>More coming soon...</em>
      </p>
      <div className="exploring-city-content">
        <ul className="exploring-city-list" aria-label="Select an area">
          {areas.map((area) => (
            <li key={area}>
              <button
                aria-pressed={selectedArea === area}
                className={
                  selectedArea === area
                    ? "exploring-city-area exploring-city-area-selected"
                    : "exploring-city-area"
                }
                onClick={() => setSelectedArea(area)}
                type="button"
              >
                {area}
              </button>
            </li>
          ))}
        </ul>
        {selectedArea && (
          <aside
            aria-live="polite"
            className="exploring-city-info"
            aria-labelledby="selected-area-heading"
          >
            <h2 id="selected-area-heading">{selectedArea}</h2>
            <p>Placeholder content for {selectedArea}.</p>
          </aside>
        )}
      </div>
    </div>
  );
}
