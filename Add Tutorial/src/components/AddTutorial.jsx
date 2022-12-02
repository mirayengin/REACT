import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("second");

  const handleSubmit = (e) => {
    e.preventDefault() //! sayfa yenilemeyi otomatikten çıkardık kendisi sayfa yenileme yapmayacak
    // const newTutor = {"title":title, "description":description} //? değişkenler ve keyler aynı isimli ise aşağıdaki gibi kısay ol kullanılabilir.
    const newTutor = { title, description };

    AddTutorial(newTutor);

    //! preventten sonra inputların temizlenmesi için yaptık bu set leri
    setTitle("");
    setDescription("")
  };

  //? POST- CRD (CREAT)
  const AddTutorial = async (newTutor) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

    try {
      await axios.post(url, newTutor); //? burada api ye veri gönderdik
    } catch (error) {
      console.log(error);
    }

    //? güncel api verilerini çektik ve tutorials ı güncelledik
    getTutorials() //! her post işleminden sonra tutorials değerlerini alanların render edilmesi için bu yapıldı.
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
