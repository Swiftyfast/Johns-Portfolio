import { NavLink, Outlet } from "react-router";

const pages = [
  { label: "Home", to: "/" },
  { label: "Resume", to: "/resume" },
  { label: "Work Experience", to: "/work-experience" },
  { label: "Education", to: "/education" },
  { label: "Projects", to: "/projects" },
  { label: "Hobbies", to: "/hobbies" },
  { label: "Exploring the City", to: "/exploring-the-city" },
];

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="site-brand" to="/" end>
          John&apos;s Portfolio
        </NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          {pages.map((page) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
              end={page.to === "/"}
              key={page.to}
              to={page.to}
            >
              {page.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
