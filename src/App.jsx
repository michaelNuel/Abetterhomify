import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements

} from "react-router-dom";
import LandingpageRoot from "./layout/LandingpageRoot";
import LandingPage from "./Pages/LandingPages/LandingPage";
import Login from "./layout/Login";
import Signin from "./Pages/LoginPages/SignIn/Signin";
import Signup from "./Pages/LoginPages/SignUp/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingpageRoot />}>
          <Route index element={<LandingPage />}/>
          <Route path="login" element={<Login />}>
             <Route index element={<Signin />}/>
             <Route path="signup" element={<Signup />} />
          </Route>
    </Route>
  )
)

function App() {
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
