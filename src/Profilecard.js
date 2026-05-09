function ProfileCard({ student, onToggle }) {
  return (
    <div
      className={`card ${student.isActive ? "card-active" : "card-inactive"}`}
    >
      <h2 className="card-name">{student.name}</h2>
      <p className="card-track">{student.track}</p>

      <p className="card-bio">{student.bio}</p>

      <p className="card-skill">
        Skill Level: <strong>{student.skillLevel}</strong>
      </p>

      {student.isActive ? (
        <p className="status status-active">● Active</p>
      ) : (
        <p className="status status-inactive">● Inactive</p>
      )}

      <button className="toggle-btn" onClick={() => onToggle(student.id)}>
        {student.isActive ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
}

export default ProfileCard;