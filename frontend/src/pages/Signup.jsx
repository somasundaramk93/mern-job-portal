import { useState } from "react";
import { API } from "../api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "seeker" });

  const signup = async () => {
    try {
      await API.post("/auth/signup", form);
      alert("Registered! Now login.");
      window.location = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="seeker">Job Seeker</option>
        <option value="recruiter">Recruiter</option>
      </select>
      <button onClick={signup}>Signup</button>
    </div>
  );
}
