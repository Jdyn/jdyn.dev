import { createBrowserRouter } from "react-router-dom";
import Home from "@/app/Home/Home";

const router = createBrowserRouter([
	{
		index: true,
		path: '/',
		element: <Home />,
		// children: [
		// 	{
		// 		path: "projects",
		// 		element: <Projects />,
		// 	}
		// ]
	}
])


export default router;
