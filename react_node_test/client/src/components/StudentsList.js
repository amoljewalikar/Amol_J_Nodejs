import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiArrowToLeft, BiArrowToRight, BiTrash } from 'react-icons/bi';


import CreateStudent from './CreateStudent';
import StudentMarks from './StudentMarks';
import UpdateEmail from './UpdateEmail';
// import DeleteStudent from './DeleteStudent';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/students?page=${currentPage}&limit=${pageSize}`);
      const data = await response.json();
      setStudents(data.students);
      setCount(data.count);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  const handleStudentCreated = async () => {
    fetchData();
  };

  const handleStudentMarksEntered = () => {
    fetchData();
  };

  const handleStudentCityUpdated = () => {
    fetchData();
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDeleteStudent = async (stud_id) => {
    try {
      const response = await fetch(`http://localhost:4000/students/delete/${stud_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete student.');
      }

      // updating list after deletion
      setStudents(students.filter(student => student.stud_id !== stud_id));
      setCount(count - 1);
      alert('Student deleted successfully!');
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Failed to delete student. Please try again.');
    }
  };

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-10">
            <div className="card shadow-lg">
              <div className="card-body">
                <h2 className="mb-2 text-center">Student List</h2>
                {error ? (
                  <div className="alert alert-danger">{error}</div>
                ) : (
                  <>
                    <table className="table table-hover">
                      <thead className="thead-dark">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Surname</th>
                          <th>Email</th>
                          <th>Age</th>
                          <th>Mark ID</th>
                          <th>Maths</th>
                          <th>Physics</th>
                          <th>Geology</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student, index) => (
                          <tr key={index}>
                            <td>{student.stud_id}</td>
                            <td>{student.first_name}</td>
                            <td>{student.last_name}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                            <td>{student.mark_id}</td>
                            <td>{student.maths}</td>
                            <td>{student.physics}</td>
                            <td>{student.geology}</td>
                            <td>
                              <button className="btn btn-danger btn-sm me-2" onClick={() => handleDeleteStudent(student.stud_id)}>
                                <BiTrash/>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="mt-3 text-center">
                      <button className="btn btn-success me-2 mb-2 border border-dark" onClick={handlePrevPage} disabled={currentPage === 1}>
                      <BiArrowToLeft /> Previous
                      </button>
                      <button className="btn btn-success me-2 mb-2 border border-dark" onClick={handleNextPage} disabled={students.length < pageSize}>
                        Next <BiArrowToRight /> 
                      </button>
                      <h5 className="fw-bold mt-3">Page {currentPage}</h5>
                      <h4 className="fw-bold">Total : {count}</h4>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card shadow-lg">
              <div className="card-body">
                <CreateStudent onStudentCreated={handleStudentCreated} />
                <hr />
                <StudentMarks onStudentMarksEntered={handleStudentMarksEntered} />
                <hr />
                <UpdateEmail onStudentCityUpdated={handleStudentCityUpdated} />
                {/* <hr /> */}
                {/* <DeleteStudent onStudentDeleted={handleStudentDeleted} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsList;
