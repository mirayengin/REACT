import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = ({getTask}) => {
  const [form, setForm] = useState([]);
  const [date, setDate] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { form, date };

    newTasks(newTask);
    setForm("");
    setDate("")
  };

  const newTasks = async (newTask) => {
    const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";

    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
    getTask()
  };


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task"
            onChange={(e) => setForm(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <div className="text-center">
          <Button className="btn-lg w-50" variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
