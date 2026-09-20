import "./App.css";
import ProjectCard from "./components/projectCard";

function App() {
  const projects = [
    {
      id: 1,
      name: "Website Development",
      client: "ABC Ltd",
      status: "Completed",
      owner: "Ravi",
      startDate: "2026-09-01",
      endDate: "2026-09-10",
      hours: 120,
      finalCost: 530332,
    },

    {
      id: 2,
      name: "Mobile Application",
      client: "XYZ Ltd",
      status: "In Progress",
      owner: "Priya",
      startDate: "2026-09-05",
      endDate: "2026-09-20",
      hours: 80,
      finalCost: null,
    },

    {
      id: 3,
      name: "CRM System",
      client: "PQR Ltd",
      status: "Pending",
      owner: "Arun",
      startDate: "2026-09-10",
      endDate: "2026-09-30",
      hours: 50,
      finalCost: 0,
    },
  ];

  return (
    <div>
      <h1>Projects</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default App;