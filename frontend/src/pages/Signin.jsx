import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleSignIn = async () => {
    try {
      // Make a POST request to your login endpoint
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          username: username,
          password: password,
        }
      );

      // Assuming your backend returns a token upon successful login,
      // you can store the token in local storage or session storage
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");

      // Redirect the user to the dashboard or perform any other action upon successful login
      // Example: window.location.href = '/dashboard';
    } catch (error) {
      // Handle login error here
      console.error("Login failed:", error);
      console.log(error);
      setAlert(error.response.data.message);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder="SujalK"
            label={"Username"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            placeholder="sujal@123"
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleSignIn} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-4 bg-white shadow-md p-4 rounded-md z-50 ">
        {alert}
      </div>
    </div>
  );
};

// In named exports (e.g., export const, export function),
// you need to use curly braces when importing to specify
// which named exports you want to import. However, with
// export default, you don't need curly braces when importing,
// as it exports a single value as the default export of the module.

// apart from anker tag we could have used link atag where to would be the prop which is a predefined prop for routing
