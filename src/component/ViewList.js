import React from "react";
const StudentDetails = [
  { id: 1, fullname: "Hari gautam", email: "hari@gmail.com", phone: "9800000",address:"ktm"},
  {
    id: 2,
    fullname: "sagar gautam",
    email: "hari@gmail.com",
    phone: "9800000",
    address:"ktm"
  },
  { id: 3, fullname: "mani gautam", email: "hari@gmail.com", phone: "9800000",address:"Birjung" },
];
const ViewList = () => {
const deleteHandle=()=>{
  
}
  return (
    <div className="bg-white max-w-4xl mx-auto p-6 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Student List</h1>
      {/* Searchbox */}
      <input
        type="text"
        placeholder="Search student by name..."
        className="w-full border border-gray-500 p-2 mb-4  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Table  */}
      <table className="w-full border border-collapse  border-x-gray-500">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border border-gray-300">#</th>
            <th className="p-3 border border-gray-300">Fullname</th>
            <th className="p-3 border border-gray-300">Email</th>
            <th className="p-3 border border-gray-300">Address</th>
            <th className="p-3 border border-gray-300">Phone</th>
            <th className="p-3 border border-gray-300">Action</th>

          </tr>
        </thead>
        <tbody>
          {StudentDetails.map((student) => (
            <tr>
              <td>{student.id}</td>
              <td>{student.fullname}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td className="text-center ">
                <button className="bg-green-600 mx-3 p-2 mb-2 rounded-sm text-white mt-2">Edit</button>
                <button className="bg-red-600 mx-6 p-2 mb-2 rounded-sm text-white mt-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewList;
