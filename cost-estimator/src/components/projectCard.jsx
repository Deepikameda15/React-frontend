import StatusBadge from "./statusBadge";

function ProjectCard({ project }) {


  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };


  const formatCurrency = (amount) => {
    if (amount === 0 || amount === null || amount === undefined) {
      return "Not estimated";
    }

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="project-card">

      <h2>{project.name}</h2>

      <p>
        <strong>Client:</strong> {project.client}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <StatusBadge status={project.status} />
      </p>

      <p>
        <strong>Owner:</strong> {project.owner}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {formatDate(project.startDate)} - {formatDate(project.endDate)}
      </p>

      <p>
        <strong>Hours:</strong> {project.hours}
      </p>

      <p>
        <strong>Final Cost:</strong>{" "}
        {formatCurrency(project.finalCost)}
      </p>

    </div>
  );
}

export default ProjectCard;