import nav from '../../content/menu.json'

export default function Sidebar({ currentPage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand" onClick={() => onNavigate('home')}>
        Your Name
      </div>
      <nav className="sidebar-nav">
        {nav.map(({ group, items }) => (
          <div key={group ?? '_root'} className="nav-group">
            {group && <span className="nav-group-label">{group}</span>}
            <ul>
              {items.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
