import { createBrowserRouter, redirect } from "react-router-dom"
import App from "./App"
import LandingPage from "./Pages/LandingPage"
import WaitList from "./Pages/WaitList"
import { LandingPageAction } from "./Routes/LandingPageRoute"
import { waitlistLoader } from "./Routes/WaitlistRoutes"
import Error from "./Components/ErrorElement"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        action: LandingPageAction,
        element: <LandingPage />,
      },
      {
        path: "waitlist",
        loader: waitlistLoader,
        element: <WaitList />,
      },
    ],
  },
  {
    //* Any path that does not exist will redirect to this
    path: "*",
    loader: () => redirect("/"),
  },
])

export default router
