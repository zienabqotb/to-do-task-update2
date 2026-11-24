import AddButton from "../Components/AddButton";
import DeleteIcon from "../Components/DeleteIcon";
import EditIcon from "../Components/EditIcon";
import { useEffect } from "react";
import { useContext } from "react";
import { globalStore } from "../stores/MainStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Skeleton from "../Components/Skeleton";
import ErrorMessage from "../Error/ErrorMessage";
import toast from "react-hot-toast";

export default function Home() {
  const { token, user, base_url } = useContext(globalStore);
  // state
  const [todos, setTodos] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState("");
  const [formBtn, setFormBtn] = useState("Create");
  const [idForUpdate,setIdForUpdate]=useState(null)

  const navigate = useNavigate();
  // vars
  const endpoint = "/todos";

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  // fuction
  // get todos "هنعرض"
  async function getTodos() {
    setIsLoading(true);
    try {
      const res = await axios.get(`${base_url}${endpoint}`);
      setTodos(res.data.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(true);
      } else {
        (console, log("Network Error"));
      }
    }
    setIsLoading(false);
  }
  useEffect(() => {
    getTodos();
  }, []);

  // create todo "هننشء"
  const handleSubmit = async (e) => {
    e.preventDefault();
    // المتغير اللي هبعته للباك
    const newTodo = {
      name: todo,
    };
    try {
      if (formBtn.toLowerCase() == "create") {
        await axios.post(`${base_url}${endpoint}`, {
          data: newTodo,
        });
        toast.success("Task created successfully", {
          duration: 3000,
        });
      } else {
        axios.put(`${base_url}${endpoint}/${idForUpdate}`, {
          data: newTodo,
        });
        setFormBtn("create");
        setIdForUpdate(null)
        toast.success("Task Ubpated successfully", {
          duration: 3000,
        });
      }
      setTodo("");
      getTodos();
    } catch (err) {
      toast.error(
        err?.response?.data?.error?.message ||
          err?.message ||
          "Something went wrong",
        {
          duration: 5000,
        }
      );
    }
  };

  // delete todo "هنمسح"
  async function deleteTodo(documentId) {
    try {
      await axios.delete(`${base_url}${endpoint}/${documentId}`);
      toast.success("Task deleted successfully", {
        duration: 3000,
      });
      getTodos();
    } catch (err) {
      toast.error(
        err?.response?.data?.error?.message ||
          err?.message ||
          "Failed to delete task",
        {
          duration: 5000,
        }
      )
    }
  }

  // get todo for update
  function getTodo(documentId) {
    const todo = todos.find((todo) => todo.documentId == documentId);
    setTodo(todo.name);
    setFormBtn("Update");
    setIdForUpdate(documentId);
  }

  // loading skeleton "لو النت بطيء هيظهر "
  function displaySkeleton() {
    return (
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-content">
      <h1 className="text-3xl text-rose-800 font-bold hover:text-rose-500  items-center">
        Welcome {user?.username}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="h-full flex md-gap-5 gap-1 items-center  mt-10"
      >
        <input
          // on change عشان الحاجة اللي هكتبها تبان
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          // { new todo }عشان ابعته للباك في  {todo} خليت اللي يتكتب متخزن في
          value={todo}
          type="text"
          placeholder="What needs to be done?"
          className="border grow border-rose-800 rounded-md py-2 px-4 md:w-110 w-50 outline-none focus:border-rose-600 "
        />
        <AddButton>{formBtn}</AddButton>
      </form>
      <div className="  flex w-full flex-col gap-5 mt-10 ">
        {IsLoading ? (
          displaySkeleton()
        ) : error ? (
          <ErrorMessage onRetry={getTodos} />
        ) : (
          todos?.map((todo) => (
            <div
              key={todo.name}
              className=" border-2 border-rose-800 rounded-2xl px-5 py-1 capitalize  flex gap-4 justify-between items-center"
            >
              <h2 className="text-rose-800 text-xl font-semibold hover:underline cursor-pointer">
                {" "}
                {todo.name}{" "}
              </h2>
              <div className="flex gap-4 items-center">
                <EditIcon documentId={todo.documentId} handleClick={getTodo} />
                <DeleteIcon
                  documentId={todo.documentId}
                  handleClick={deleteTodo}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
