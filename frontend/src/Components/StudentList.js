import axios from "axios";
import { useEffect, useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/students")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((s, i) => (
          <li key={i}>
            <span className="student-name">{s.name}</span>
            <span className="student-course">{s.course}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;