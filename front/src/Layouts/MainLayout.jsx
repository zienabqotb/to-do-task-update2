import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
export default function MainLayout() {
  return (
    <div>
      <Nav/>
      <div className=" w-170 max-w-full mx-auto bg-white rounded-2xl mt-4 p-4">
        <Outlet />
      </div>
    </div>
  )
}
