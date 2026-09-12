export default function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-image-wrap">
      <img src={project.image} alt={project.title} className="project-image"/>
      <div className="project-index">ARCHIVE {project.id}</div>
    </div>
    <div className="project-meta">
      <div><p>{project.type}</p><h3>{project.title}</h3></div>
      <div className="project-side-meta"><span>{project.artist}</span><span>{project.year}</span></div>
    </div>
  </article>;
}
