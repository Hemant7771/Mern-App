function StudentCard({ name, course }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{course}</p>
    </div>
  );
}

export default StudentCard;
