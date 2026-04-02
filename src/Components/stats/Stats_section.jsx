import { useEffect, useState } from "react";

function StatsSection() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/stats")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <h3>{stats.yearsOfExperience} Years of Experience</h3>
      <h3>{stats.projectsCompleted} Projects Completed</h3>
      <h3>{stats.happyClients} Happy Clients</h3>
    </div>
  );
}

export default StatsSection;
