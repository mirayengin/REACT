import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";

const TutorialList = ({ tutor, getTutorials }) => {

  //! DELETE (CRUD- Delete)
  const deleteTutorial = async (id) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  //!PUT (CRUD-Update)
  //!PATCH (CRUD-Update FAKAT PARÇALI )
  const editTutorial = async (item) => {

    const { title, description, id } = item;
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

    try {
      await axios.put(`${url}/${id}`, {title, description});
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  }

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutor?.map((item) => {
            const { id, title, description } = item; {/* burdan id title desc verilerini alıyoruz */}
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"  /* modal daki açılışı yapmak için burada bunu ve alttakini ekledik buraya çünkü modal ile aynı olmalı bu değerler*/
                    className="me-2 text-warning"
                    onClick={() =>
                      editTutorial({
                        id: "1581",
                        title: "UPDATE",
                        description: "UPDATE",
                      })
                    }
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditTutorial editTutorial={editTutorial} tutor={tutor} /> {/* edit iconuna tıklanınca bu gelecek */}
    </div>
  );
};

export default TutorialList;
