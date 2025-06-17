import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useState  } from "react";
import { useNavigate } from "react-router-dom";
import StudentRegister from "./StudentRegister";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
  const submitHandle = (e) => {
    e.preventDefault();
    // console.log(email);
      navigate("/studentregister");
    
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
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
              
              />
            </div>
            <div className="mb-4">
              <TextField
                fullWidth
                label="Password"
                type="password"
                required
                onChange={(e)=>{
                    setPassword(e.target.value)
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
                  Register
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
