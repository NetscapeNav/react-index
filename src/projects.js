import "./projects.css";
import { projects } from "./projectsData";

function Projects() {
    return (
        <div className="Projects">
            {projects.map((project) => (
                <div key={project.id} className="Projects-div" onClick={() => window.location.href = project.location}>
                    <img src={project.img} className="Projects-img" alt={project.name}/>
                    <p className="Projects-p">{project.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;