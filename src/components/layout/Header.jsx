export default function Header({ currentPage, onNavigate }) {
  const links = ['home', 'about', 'projects']

  return (
    <header>
      <nav>
        {links.map((link) => (
          <button
            key={link}
            onClick={() => onNavigate(link)}
            aria-current={currentPage === link ? 'page' : undefined}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  )
}
