const projects = [
  {
    name: "Inventory System",
    timeframe: "January 2025 - November 2026",
    description:
      "Added an inventory workflow to the admin web application so shipments, manifests, and items could be tracked and sent to auction.",
    highlights: [
      "Inventory data had to be synced to Cloud Firestore so the admin UI interacted with a single database.",
      "Regularly tested other engineers' tickets by reading the ticket and validating the behavior without a scripted QA plan.",
    ],
  },
  {
    name: "Mobile Auction",
    timeframe: "September 2022 - November 2026",
    description:
      "Built and maintained the bidding platform for the North Kansas City and Liberty warehouse auctions. The app supported 1,000-2,000 lots per auction and handled roughly 1,000 concurrent bidders at peak traffic.",
    highlights: [
      "In-person bidders scanned QR codes and had lots added to a list after placing a bid.",
      "Remote bidding displayed lot titles, descriptions, and photos for each item.",
      "Auctions were created and lots were managed through an admin web application.",
      "Web bidding was added later to expand the platform's reach.",
    ],
  },
  {
    name: "Point of Sale System",
    timeframe: "September 2021 - January 2026",
    description:
      "Built and maintained custom point of sale software for in-store and auction operations across seven Midwest locations, processing card and cash payments and supporting revenue from Facebook Marketplace.",
    highlights: [
      "Developed a React and JavaScript POS experience for store transactions and auction checkouts.",
      "Handled the processing flow for both card and cash payments in a real-world retail environment.",
      "Supported a high-volume operation, with weekly sales reaching roughly $100,000 per location.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>

      {projects.map((project) => (
        <article key={project.name} className="project-card">
          <h2>{project.name}</h2>
          <p className="project-timeframe">{project.timeframe}</p>
          <p>{project.description}</p>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
