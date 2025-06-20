import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const AddStudent = () => {
  const [fullName,setFullname]= useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const token = sessionStorage.getItem("token");

      await axios.post(
        "http://localhost:8080/student/add-student",
        {
          fullName,
          address,
          phone,
          course,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(" Student Add Sucessfully...");
      navigate("/viewdetail");
    } catch (err) {
      toast.error("Failed to add students...");
      console.log(err);
    }
    console.log(fullName,address,phone,course);
  };

  return (
    <div className="w-full lg:w-full h-screen flex justify-center items-center register-wrapper ">
      <form onSubmit={submitHandle}>
        <div className="bg-white border-2  rounded-xl w-[350px] md:w-[550px] lg:h-[460px]  flex justify-center p-10">
          <Box sx={{ width: 500, maxWidth: "100%", border: "none" }}>
            <h2 className="text-center mb-4 font-semibold text-[30px]">
              Add Students
            </h2>
            <div className="mb-4 ">
              <TextField
                fullWidth
                label="Fullname"
                id="fullname"
                required
                //   value={student}
               onChange={(e)=>{
                setFullname(e.target.value)
               }}
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Address"
                id="address"
                type="text"
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Phone"
                type="number"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Course"
                type="text"
                required
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              />
            </div>

            <div className="mb-4 ">
              <Stack spacing={2} direction="row">
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{
                    width: "500px",
                    padding: "10px",
                  }}
                >
                ADD Student
                </Button>
              </Stack>
            </div>
          </Box>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
