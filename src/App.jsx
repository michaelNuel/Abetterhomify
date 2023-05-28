import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements

} from "react-router-dom";
import LandingpageRoot from "./layout/LandingpageRoot";
import LandingPage from "./Pages/LandingPages/LandingPage";
import LoginSignup from "./layout/LoginSignup";
import Loginpage from "./Components/LoginSignInSignUpComp/LoginComp/Loginpage";
import SignIn from "./Components/LoginSignInSignUpComp/SignupComp/SignIn";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingpageRoot />}>
          <Route index element={<LandingPage />}/>
          <Route path="login" element={<LoginSignup />}>
            <Route index element={<Loginpage/>}/>
            <Route path="signin" element={<SignIn />}/> 
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
