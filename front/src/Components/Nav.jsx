import { User } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { globalStore } from "../stores/MainStore";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Nav() {
  const { token, setToken, user, setUser } = useContext(globalStore);
  const nevigate = useNavigate();
  const { pathname } = useLocation();
  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nevigate("/login");
  };
  return (
    <div className=" mt-4 rounded-2xl flex w-170 max-w-full mx-auto items-center  p-4 bg-white">
      <Link
        to="/"
        className="md:text-3xl text-xl  text-rose-800 font-bold hover:text-rose-500  md:ml-10"
      >
        Home
      </Link>
      <div className="flex w-full justify-end items-center gap-5 md:gap-9">
        {token ? (
          <>
            <Link to="/profile">
              <User className="  py-2 w-11 h-11 border border-b-pink-700 rounded-3xl text-rose-800 font-bold hover:text-rose-500 ml-4" />
            </Link>
            <Button handleClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            {
              pathname == "/register" && (
                <Link to="/login">
                  <Button> Login</Button>
                </Link>
              )
            }

            {
              pathname == "/login" && (
                <Link to="/register">
                  <Button> Register</Button>
                </Link>
              )
            }
          </>
        )}
      </div>
    </div>
  );
}
