import { useEffect, useState } from "react";
import { API } from "../api";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const role = localStorage.getItem("role");

  useEffect(() => {
    API.get("/jobs").then(res => setJobs(res.data));
  }, []);

  const apply = async (id) => {
    await API.post(`/applications/${id}`);
    alert("Applied!");
  };

  return (
    <div className="container">
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <div key={job._id} className="card">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          {role === "seeker" && <button onClick={() => apply(job._id)}>Apply</button>}
        </div>
      ))}
    </div>
  );
}
