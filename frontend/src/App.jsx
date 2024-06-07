import { RouterProvider } from "react-router-dom"
import { router } from "./routers/router"
import UserContextProvider from "./contexts/context"

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App
