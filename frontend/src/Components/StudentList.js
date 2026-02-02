import axios from "axios";
import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";

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
      {students.map((s, i) => (
        <StudentCard
          key={i}
          name={s.name}
          course={s.course}
        />
      ))}
    </div>
  );
}

export default StudentList;