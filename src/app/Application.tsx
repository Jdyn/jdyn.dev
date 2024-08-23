import { RouterProvider } from "react-router-dom";
import router from "./Router";

const Application = () => {
	return ( <RouterProvider router={router}/> );
}

export default Application;
