import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";

const Student = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/Dashboard/AddStudent`;
    navigate(path);
  };

  const updateStudent = (data) => {
    navigate("/Dashboard/AddStudent", { state: { student: data } });
  };

  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    axios
      .get("http://localhost:8080/students")
      .then((response) => {
        console.log(response, "console from get student method");
        setStudents(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteStudents = (id) => {
    axios
      .delete(`http://localhost:8080/students/${id}`, { mode: "cors" })
      .then((response) => {
        // toast.success('Student deleted successfully ...');
        alert("Student deleted successfully...");
        getStudents();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  {
    console.log(students, "from api data");
  }
  return (
    <div className="dataContainer">
      {/* <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            /> */}
      <button className="button" onClick={routeChange}>
        {" "}
        <IoMdPersonAdd size={20} color="white" />
        Add Student
      </button>

      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>

          <td>Contact No</td>
          <td>College Id</td>
          <td>Course Id</td>
          <td></td>
        </tr>
        {students.map((student, index) => {
          console.log(student, "from student table data");
          return (
            <tr>
              <td>{student.student_id}</td>
              <td>{student.student_first_name + " " + student.student_last_name}</td>
              <td>{student.student_email}</td>
              <td>{student.student_phone_no}</td>
              <td>{student.student_college_id}</td>
              <td>{student.student_course_id}</td>
              <td>
                <div className="buttonSectionTdDiv">
                  <button className="deleteButton" onClick={() => updateStudent(student)}>
                    Update
                  </button>
                  <button className="deleteButton" onClick={() => deleteStudents(student.student_id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Student;
