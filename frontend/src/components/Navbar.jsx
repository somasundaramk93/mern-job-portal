export default function Navbar() {
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    window.location = "/login";
  };

  return (
    <div className="navbar">
      <h2>Job Portal</h2>
      <div>
        <a href="/dashboard">Dashboard</a>
        {role === "recruiter" && <a href="/post-job">Post Job</a>}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
