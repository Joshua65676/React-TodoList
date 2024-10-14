import React, { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import UpdateTask from "./UpdateIcon";
import DeleteIcon from "./DeleteIcon";
import { Button } from "./ui/Button";
// import { useAuth } from '../context/AuthContext'

// beige !important;
interface Todo {
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  // const { currentUser } = useAuth()
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);


  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const updateTask = (index: number, newText: string) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
  };
  
  return (
    <div className="max-w-md p-4 pt-10 pb-8 mx-auto mt-20 bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-center">What are the plan for today?</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex pl-5 border-2 rounded w-[30rem] h-[2.6rem] shadow-sm focus:outline-none focus:ring focus:ring-blue-700"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What is the task today?"
        />
        <Button
          onClick={addTask}
          className="absolute p-2 ml-[19rem] text-lg font-semibold text-white uppercase bg-blue-700 rounded-r hover:bg-blue-500 h-[2.6rem]"
        >
          Add Task
        </Button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            {editingIndex === index ? (
              <UpdateTask
                currentText={task.text}
                onUpdate={(newText) => updateTask(index, newText)}
              />
            ) : (
              <>
                <span
                  className={`flex-1 pl-3 font-medium text-base ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                  onClick={() => toggleTaskCompletion(index)}
                >
                  {task.text}
                </span>
                <div className="flex flex-row gap-3">
                  <button onClick={() => setEditingIndex(index)}>
                    <CiEdit />
                  </button>
                  <button>
                    <DeleteIcon onDelete={() => deleteTask(index)} />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
