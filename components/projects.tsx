import texts from "./utils/sections.json";

function Projects() {
  return (
    <main className="">
      {/* header */}
      <div className="max-w-3xl mx-auto text-center pb-4 md:pb-10 mt-20">
        <h1 className="text-5xl font-bold " style={{ color: "#212121" }}>
          {texts["section-eight"].title}
        </h1>
      </div>

      {/* Members */}
      <section className="flex flex-between gap-20 justify-center">
        {texts["section-eight"].body.map((project) => (
          <div key={project.id}>
            <div
              className="rounded"
              style={{
                backgroundColor: "#212121",
                minHeight: "453px",
                overflow: "hidden",
              }}
            >
              <img
                src={project.picture}
                alt="projectImg"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="text-center">
              <h1
                className="font-bold mt-5 text-xl"
                style={{ color: "#212121" }}
              >
                {project.name}
              </h1>
              <p>{project.role}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
export default Projects;
