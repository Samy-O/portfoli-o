import ProjectCard from '../components/ui/ProjectCard'

// Import project MDX files to pull their metadata
import { meta as projectOne } from '../content/projects/project-one.mdx'

const projects = [projectOne]

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
