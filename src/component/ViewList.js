import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ViewList = () => {
  const [student, setStudent] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const viewData = async () => {
      try {
        const view = await axios.get(
          "http://localhost:8080/student/viewstudent",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(view.data);
        setStudent(view.data.data);
      } catch (err) {
        console.error("Error Data....");
      }
    };
    viewData();
  }, []);
  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/student/delete/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      toast.success("Student delete Successfull");
      console.log("Delete Data...");
      setStudent(oldData => oldData.filter(s=>s._id !== id));
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete..");
    }
  };

  return (
    <div className="bg-white max-w-4xl sm:w-[full] mx-auto p-6 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Student List</h1>
      {/* Searchbox */}
      <input
        type="text"
        placeholder="Search student by name..."
        className="w-full sm:w-[full] border border-gray-500 p-2 mb-4  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Table  */}
      <table className="w-full border border-collapse  border-x-gray-500">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border border-gray-300">S.N.</th>
            <th className="p-3 border border-gray-300">Fullname</th>
            <th className="p-3 border border-gray-300">Address</th>
            <th className="p-3 border border-gray-300">Phone</th>
            <th className="p-3 border border-gray-300">Course</th>
            <th className="p-3 border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {student.map((s, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{s.fullName}</td>
              <td>{s.address} </td>
              <td>{s.phone} </td>
              <td>{s.course} </td>

              <td className="text-center ">
                <button className="bg-green-600 hover:bg-green-800 mx-3 p-2 mb-2 rounded-lg text-white mt-2">
                  Edit
                </button>
                <button
                  onClick={()=>deleteData(s._id)}
                  className="bg-red-600 hover:bg-red-800 mx-6 p-2 mb-2 rounded-lg text-white mt-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewList;
