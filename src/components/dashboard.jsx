import { useEffect, useState } from "react";

const DashBoard = () => {
  const [username, setUsername] = useState("");
  

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) setUsername(savedUser);
  }, []);

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved
      ? JSON.parse(saved)
      : [
          {
            rollNumber: 123,
            name: "Ali",
            age: 21,
            email: "ali@gmail.com",
            marks: "820/1100",
          },
          {
            rollNumber: 90,
            name: "Usama",
            age: 19,
            email: "usama@gmail.com",
            marks: "920/1100",
          },
          {
            rollNumber: 124,
            name: "Sara",
            age: 20,
            email: "sara@gmail.com",
            marks: "900/1100",
          },
          {
            rollNumber: 109,
            name: "Zain",
            age: 19,
            email: "zain@gmail.com",
            marks: "1020/1100",
          },
          {
            rollNumber: 125,
            name: "Ahmed",
            age: 22,
            email: "ahmed@gmail.com",
            marks: "780/1100",
          },
          {
            rollNumber: 126,
            name: "Ayesha",
            age: 19,
            email: "ayesha@gmail.com",
            marks: "950/1100",
          },
          {
            rollNumber: 127,
            name: "Hassan",
            age: 21,
            email: "hassan@gmail.com",
            marks: "860/1100",
          },
          {
            rollNumber: 128,
            name: "Zainab",
            age: 20,
            email: "zainab@gmail.com",
            marks: "890/1100",
          },
        ];
  });

  const handleDelete = (rollNumber) => {
    const updated = students.filter((s) => s.rollNumber !== rollNumber);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  return (
    <div className="bg-white w-11/12 h-screen max-w-6xl mx-auto shadow-xl p-4">
      <p className="text-2xl font-semibold text-center mb-4">
        Welcome! {username}
      </p>

     <div className="mt-2 flex flex-wrap justify-center items-center pt-6 px-28 ">
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.rollNumber} className="text-center border-t ">
              <td>{s.rollNumber}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.email}</td>
              <td>{s.marks}</td>
              <td className="space-x-2 p-1">
                <button
                
                  className="bg-yellow-400 hover:bg-yellow-500 px-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(s.rollNumber)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DashBoard;
