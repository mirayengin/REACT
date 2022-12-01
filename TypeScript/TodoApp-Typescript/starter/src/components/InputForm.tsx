import React, { useState } from 'react'


// interface IInputForm  {
//   addTodo:(text:string)=>void
// }

interface IInputForm  {
  addTodo: AddFn;
}

type Task = string


const InputForm: React.FC<IInputForm> = ({ addTodo }) => {
  
  const [task, setTask] = useState<Task>("")
  
  const handleClick = () => {
    addTodo(task)
    setTask("")
  }




  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        maxLength={40}
        onChange={(e) => setTask(e.target.value)}
        value={task}
        
        />
      <button
        className="btn-hover btn-color"
        type="submit"
        onClick={handleClick}
        //! Boş ken ekleme yapmayacak
        disabled={!task.trim()}
      >
        Add New Todo
      </button>
    </div>
  )
}

export default InputForm