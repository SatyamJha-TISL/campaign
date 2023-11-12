import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { ListDataContextProvider } from "./context/ArrayContext"

function App() {

  return <ListDataContextProvider>
    <RouterProvider router={router} />
  </ListDataContextProvider>
}

export default App
