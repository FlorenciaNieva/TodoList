import "./App.css";
import Header from "./components/Header/Header";
import ContainerForm from "./components/Main/ContainerForm";
import ContainerLists from "./components/Main/ContainerLists";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("tasks"))) {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);

  const onDelete = (id) => {
    const originalTasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = originalTasks.filter((task) => task.id !== id);
    const render = tasks.filter((task) => task.id !== id);
    setTasks(render);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editComplete = (id, newTask, tasks) => {
    return tasks.map((task) => (task.id === id ? { ...newTask } : task));
  };

  const setCompleted = (homework, key, completed) => {
    const originalTasks = JSON.parse(localStorage.getItem("tasks"));
    const updateTask = editComplete(
      key,
      {
        id: key,
        task: homework,
        complete: !completed,
      },
      originalTasks
    );
    setTasks(updateTask);
    localStorage.setItem("tasks", JSON.stringify(updateTask));
    setSelectedFilter("all");
  };

  const filterTasks = (filterOption) => {
    const originalTasks = JSON.parse(localStorage.getItem("tasks"));
    setSelectedFilter(filterOption);
    filterOption === "Complete"
      ? setTasks(originalTasks.filter((task) => task.complete === true))
      : filterOption === "Incomplete"
      ? setTasks(originalTasks.filter((task) => task.complete === false))
      : setTasks(originalTasks);
  };

  return (
    <>
      <Header />
      <main>
        <ContainerForm
          tasks={tasks}
          setTasks={setTasks}
          filterTasks={filterTasks}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <ContainerLists
          tasks={tasks}
          onDelete={onDelete}
          setCompleted={setCompleted}
        />
      </main>
    </>
  );
}

export default App;
