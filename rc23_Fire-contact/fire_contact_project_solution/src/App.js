import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import {useState} from "react"
import {AddUser} from "./utils/functions"

const initialValues={
  username:"",
  phoneNumber:"",
  gender:""
}
function App() {
  const [info, setInfo] = useState(initialValues)
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (info.id) {
      UpdateUser(info)
    } else {
      
      AddUser(info)
    }
  }

  const edtUser = (id, username, gender, phoneNumber) => {
    setInfo({id, username, gender, phoneNumber})
  }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      <Contacts edit = {editUser} />
    </div>
  );
}

export default App;
