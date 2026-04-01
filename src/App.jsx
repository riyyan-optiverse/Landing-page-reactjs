import { useState, useEffect, useRef } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
const APP = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef(null);

  const addToDo = () => {
    if (input.trim() === "") return;
    if (
      todos.some((todo) => todo.toLowerCase() === input.trim().toLowerCase())
    ) {
      alert("To-do already exist");
      return;
    }
    let updatedTodos;

    if (editIndex !== null) {
      updatedTodos = todos.map((todo, index) =>
        index === editIndex ? input.trim() : todo,
      );
      setEditIndex(null);
    } else {
      updatedTodos = [...todos, input.trim()];
    }
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setInput("");
  };

  useEffect(() => {
    const updatedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(updatedTodos);
  }, []);

  const deleteTodo = (index) => {
    const updatedtodos = todos.filter((_, i) => i !== index);
    setTodos(updatedtodos);
    localStorage.setItem("todos", JSON.stringify(updatedtodos));
  };
  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
    inputRef.current?.focus();
  };

  return (
    <>
      <div className=" bg-slate-100 h-screen flex  justify-center">
        <div className="w-96  min-h-96 max-h-96  bg-white shadow-md rounded-md mt-10 hover:shadow-xl transition-shadow duration-300 ">
          <div className="p-4">
            <div className="flex justify-center">
              <p className="text-3xl font-semibold">To-Do-List</p>
            </div>
            <div className="flex justify-start  mt-5">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter to-do"
                className="w-full h-10 border outline-none border-b-gray-300 rounded-l-md px-5"
              />
              <button
                onClick={addToDo}
                className="bg-orange-500 text-white border px-3 py-1 rounded-r-md hover:bg-orange-600"
              >
                ADD
              </button>
            </div>
            <div className="mt-3 w-full min-h-64 max-h-64 overflow-y-auto">
              <ul className="flex flex-col justify-start gap-2  ">
                {todos.map((todo, index) => (
                  <li
                    key={index}
                    className="flex justify-between bg-slate-100 p-1 pl-2 items-center rounded-sm"
                  >
                    <span>{todo}</span>
                    <div>
                      <button
                        onClick={() => editTodo(index)}
                        className="bg-blue-500 text-white px-2 py-1 mr-1 hover:bg-blue-600"
                      >
                        <MdEdit/>
                      </button>
                      <button
                        onClick={() => deleteTodo(index)}
                        className="bg-red-500 text-white border px-2 py-1 hover:bg-red-600"
                      >
                        <MdDelete/>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default APP;
