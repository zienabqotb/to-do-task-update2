import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/profile";
import Login from "../Pages/login";
import Register from "../Pages/Register";
import NotFound from "../Error/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";



export default function index() {
  return (
   <>
  <BrowserRouter>
   <Routes>
   <Route path="/" element={<MainLayout/>}>
    <Route index  element={<Home/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    </Route>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}
