import axios from "axios";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

const TaskList = ({ task, getTask }) => {

  
  const deleteTask = async (id) => {
    const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";

    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }

    getTask();
  };

  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;

        return (
          <div
            key={id}
            className="d-flex justify-content-between mt-2 bg-secondary rounded-3 p-2"
          >
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>

            <div>
              <AiFillDelete
                onClick={() => deleteTask(id)}
                style={{
                  cursor: "pointer",
                  marginRight: "20px",
                  fontSize: "1.5rem",
                  boxShadow: "2px 2px 2px #ECAB9E",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
