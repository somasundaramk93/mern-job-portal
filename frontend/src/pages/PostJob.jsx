import { useState } from "react";
import { API } from "../api";

export default function PostJob() {
  const [job, setJob] = useState({ title: "", company: "", location: "", salary: "", description: "" });

  const submit = async () => {
    await API.post("/jobs", job);
    alert("Job Posted!");
    window.location = "/dashboard";
  };

  return (
    <div className="form-container">
      <h2>Post Job</h2>
      <input placeholder="Title" onChange={e => setJob({ ...job, title: e.target.value })} />
      <input placeholder="Company" onChange={e => setJob({ ...job, company: e.target.value })} />
      <input placeholder="Location" onChange={e => setJob({ ...job, location: e.target.value })} />
      <input placeholder="Salary" onChange={e => setJob({ ...job, salary: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setJob({ ...job, description: e.target.value })}></textarea>
      <button onClick={submit}>Post Job</button>
    </div>
  );
}
