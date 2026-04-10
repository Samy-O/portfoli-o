export default function Home({ onNavigate }) {
  return (
    <section>
      <h1>Your Name</h1>
      <p>Software Engineer · Building things for the web.</p>
      <button onClick={() => onNavigate('projects')}>See my work</button>
    </section>
  )
}
