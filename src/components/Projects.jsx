import livingrom from "/img/LIvingrom.png"
import workspace from "/img/Workspace.png"
import library from "/img/Library.png"

function Projects() {
  return (
    <section className="projects py-16 text-center">
      <h2 className="projects_title">Our project</h2>
      <p className="projects_subtitle">Introducing our first official project</p>
      <div className="projects_underline"></div>

      <div className="projects_grid">
        <div className="project_card">
          <h3 className="project_title">Project Livingroom</h3>
          <p className="project_text">
            A simple guide to create the perfect livingroom. Night Watc works beautifully in a wide gamut of arrangements.
          </p>
          <div className="project_img">
            <img src={livingrom} alt="Project Livingroom" />
          </div>
        </div>

        <div className="project_card">
          <div className="project_img">
            <img src={workspace} alt="Project Workspace" />
          </div>
          <h3 className="project_title">Project Workspace</h3>
          <p className="project_text">
            A simple guide to create the perfect livingroom. Night Watc works beautifully in a wide gamut of arrangements.
          </p>
        </div>

        <div className="project_card">
          <h3 className="project_title">Library</h3>
          <p className="project_text">
            A simple guide to create the perfect livingroom. Night Watc works beautifully in a wide gamut of arrangements.
          </p>
          <div className="project_img">
            <img src={library} alt="Library" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
