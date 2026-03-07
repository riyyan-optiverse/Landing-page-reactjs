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
            rollNumber: 125,
            name: "Ayesha",
            age: 23,
            email: "ayesha@gmail.com",
            marks: "1040/1100",
          },
          {
            rollNumber: 126,
            name: "Talha",
            age: 18,
            email: "talha@gmail.com",
            marks: "920/1100",
          },
          {
            rollNumber: 127,
            name: "Muqeet",
            age: 21,
            email: "muqeet@gmail.com",
            marks: "1010/1100",
          },
          {
            rollNumber: 109,
            name: "Zain",
            age: 19,
            email: "zain@gmail.com",
            marks: "1020/1100",
          },
        ];
  });
  const [editStudent, setEditStudent] = useState(null);
  const [formData, setFormData] = useState({
    rollNumber: "",
    name: "",
    age: "",
    email: "",
    marks: "",
  });
  const handleEdit = (student) => {
    setEditStudent(student);
    setFormData(student);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleUpdate = () => {
    const updatedStudents = students.map((s) =>
      s.rollNumber === editStudent.rollNumber ? formData : s,
    );

    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    setEditStudent(null);
  };

  const handleDelete = (rollNumber) => {
    const updated = students.filter((s) => s.rollNumber !== rollNumber);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  return (
    <div className="bg-white w-11/12 h-auto max-w-6xl mx-auto shadow-xl p-4">
      <p className="text-2xl font-semibold text-center mb-4">
        Welcome! {username}
      </p>

      <div className="mt-2 flex flex-wrap justify-center items-center pt-6 px-6 sm:px-6 md:px-24 ">
        {editStudent && (
          <div className="mb-4 p-4 border rounded bg-gray-100">
            <h2 className="font-bold mb-2">Edit Student</h2>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-1 m-1 outline-none"
            />

            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="border p-1 m-1 outline-none"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-1 m-1 outline-none"
            />

            <input
              name="marks"
              value={formData.marks}
              onChange={handleChange}
              placeholder="Marks"
              className="border p-1 m-1 outline-none"
            />

            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white px-3 py-1 rounded m-1 hover:bg-green-600"
            >
              Save
            </button>

            <button
              onClick={() => setEditStudent(null)}
              className="bg-gray-400 px-3 py-1 rounded m-1 hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        )}
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
                    onClick={() => handleEdit(s)}
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
