import { useState } from "react";
import areas from "../data/exploringCityAreas";

export default function ExploringTheCityPage() {
  const [selectedArea, setSelectedArea] = useState(null);
  const selectedAreaCategories = selectedArea ? areas[selectedArea] : null;

  return (
    <div className="exploring-city-page">
      <h1>Exploring the City</h1>
      <div className="exploring-city-content">
        <ul className="exploring-city-list" aria-label="Select an area">
          {Object.keys(areas).map((area) => (
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
            {Object.entries(selectedAreaCategories).map(
              ([category, places]) => (
                <section className="exploring-city-category" key={category}>
                  <h3>{category}</h3>
                  <ul>
                    {places.map((place, index) => (
                      <li key={`${place}-${index}`}>{place}</li>
                    ))}
                  </ul>
                </section>
              ),
            )}
          </aside>
        )}
      </div>
    </div>
  );
}
