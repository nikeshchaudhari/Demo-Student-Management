import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentRegister from "./StudentRegister";
import{toast} from "react-toastify"
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
useEffect(()=>{
const token = sessionStorage.getItem("token")
if(token){
  navigate("/login");
}
},[navigate])
  const submitHandle = async (e) => {
    e.preventDefault();
    // console.log(email);
    try {
      const login = await axios.post("http://localhost:8080/student/login", {
        email,
        password,
      });
      const token = login.data.token;
      if(token){

      }
      const fullName = login.data.fullName
      sessionStorage.setItem("token",token)
      sessionStorage.setItem("user",fullName)
      toast.success("Login Sucessfully..")
      navigate("/viewdetail");
    } catch (err) {
      toast.error("Somthing wrong")
      console.log(err);
      
      
    }
  };

  return (
    <div className="w-full lg:w-full h-screen flex justify-center items-center register-wrapper ">
      <form onSubmit={submitHandle}>
        <div className="bg-white border-2  rounded-xl w-[350px] md:w-[550px] lg:h-[350px]  flex justify-center p-10">
          <Box sx={{ width: 500, maxWidth: "100%", border: "none" }}>
            <h2 className="text-center mb-4 font-semibold text-[30px]">
              Login
            </h2>

            <div className="mb-4">
              <TextField
                fullWidth
                label="Email"
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Password"
                type="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
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
                  Login
                </Button>
              </Stack>
            </div>
          </Box>
        </div>
      </form>
    </div>
  );
};

export default Login;
