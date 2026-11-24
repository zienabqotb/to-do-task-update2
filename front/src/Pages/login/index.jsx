import { Field, Form, Formik, ErrorMessage } from "formik";
import Button from "../../Components/Button";
import { loginValidation } from "../login/validation";
import { useContext, useEffect } from "react";
import { globalStore } from "../../stores/MainStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
export default function index() {
  const { token, setToken, user, setUser,base_url } = useContext(globalStore);
  const navigate = useNavigate();
  const endpoint = "/auth/local";
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post(`${base_url}${endpoint}`, values);
      setUser(res.data.user);
      setToken(res.data.jwt);
      localStorage.setItem("token", res.data.jwt);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("Logged in successfully", {
        duration: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message,{
        duration: 5000,
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 justify-center h-80">
      <h1 className="text-4xl font-bold mb-7  text-rose-800">Welcome</h1>
      <Formik
        initialValues={{ identifier: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginValidation}
      >
        <Form className="flex flex-col gap-4 md:w-96">
          <Field
            className="outline-0 border focus:border-2 border-gray-300 focus:border-rose-500 rounded-lg py-1 px-2 "
            name="identifier"
            type="text"
            placeholder="Username or Email"
          />
          <ErrorMessage
            className="text-red-700 font-bold"
            name="identifier"
            component={"p"}
          />
          <Field
            className="outline-0 border focus:border-2 border-gray-300 focus:border-rose-500 rounded-lg py-1 px-2"
            name="password"
            type="password"
            placeholder="password"
          />
          <ErrorMessage
            className="text-red-700 font-bold"
            name="password"
            component={"p"}
          />
          <Button style="w-full" type="submit">
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
