import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transfromTask = (taskObj) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://customhook-d4e12-default-rtdb.firebaseio.com/tasks.json",
      },
      transfromTask
    );
  }, [fetchTasks]);
  // const transfromTask = useCallback((taskObj) => {
  //   const loadedTasks = [];

  //   for (const taskKey in taskObj) {
  //     loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
  //   }

  //   setTasks(loadedTasks);
  // }, []);

  // const {
  //   isLoading,
  //   error,
  //   sendRequest: fetchTasks,
  // } = useHttp(
  //   {
  //     url: "https://customhook-d4e12-default-rtdb.firebaseio.com/tasks.json",
  //   },
  //   transfromTask
  // );

  // useEffect(() => {
  //   fetchTasks();
  // }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
