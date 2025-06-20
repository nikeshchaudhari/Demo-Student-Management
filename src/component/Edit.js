import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams(); 
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate();

  // Load data by ID
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const res = await axios.get(`http://localhost:8080/student/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data.data;
        setFullName(data.fullName);
        setAddress(data.address);
        setPhone(data.phone);
        setCourse(data.course);
      } catch (err) {
        toast.error("Failed to load student data");
        console.error(err);
      }
    };

    fetchStudent();
  }, [id]);

  // Submit updated data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = sessionStorage.getItem("token");

      await axios.put(
        `http://localhost:8080/student/update/${id}`,
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

      toast.success("Student updated successfully!");
      navigate("/viewdetail");
    } catch (err) {
      toast.error("Update failed");
      console.error(err);
    }
  };

  return (
    <div className="w-full lg:w-full h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-white border-2 rounded-xl w-[350px] md:w-[550px] lg:h-[480px] flex justify-center p-10">
          <Box sx={{ width: 500, maxWidth: "100%", border: "none" }}>
            <h2 className="text-center mb-4 font-semibold text-[30px]">
              Edit Student
            </h2>

            <div className="mb-4">
              <TextField
                fullWidth
                label="Fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <TextField
                fullWidth
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <TextField
                fullWidth
                label="Phone"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <TextField
                fullWidth
                label="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <Stack spacing={2} direction="row">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: "100%", padding: "10px" }}
                >
                  Update Student
                </Button>
              </Stack>
            </div>
          </Box>
        </div>
      </form>
    </div>
  );
};

export default Edit;
