export default function ProjectCard({ title, description, tags = [], href }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {href && (
        <a href={href} target="_blank" rel="noopener noreferrer">
          View project →
        </a>
      )}
    </article>
  )
}
