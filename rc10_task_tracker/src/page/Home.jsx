import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import axios from "axios"

const Home = () => {
  const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";
  const [task, setTask] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [text, settext] = useState("Show Task Bar");

  const toggle = (e) => {
    setIsOpen(!isOpen);

    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    settext(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url)
    setTask(data);
    console.log(task);
  }

  useEffect(() => {
    getTask();
    
  
  }, [])
  

  







  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
        onClick={(e) => {
          toggle();
        }}
        variant="danger"
      >
        {text}
      </Button>
      {isOpen && <AddTask getTask={getTask} />}
      

      <TaskList getTask={getTask} task={task} />
    </div>
  );
};

export default Home;
