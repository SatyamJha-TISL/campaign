import Campaign from "./pages/campaign/campaign";
import { Dashboard } from "./pages/dashboard/dashboard";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    { path: "/", element: < Dashboard /> },
    { path: "/campaign/:id", element: < Campaign /> }
]

export const router = createBrowserRouter(routes)

