import { Toaster } from "react-hot-toast";
import Router from "./Router";
export default function App() {
  return (
    <div>
      <Router />
      <Toaster position="bottom-left" reverseOrder={true} />
    </div>
  );
}
