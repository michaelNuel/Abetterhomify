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
import SignupPageform2 from "./Pages/LoginPages/SignUpPageQuestions/SignupPageform2";
import PicPage from "./Pages/LoginPages/Idpage.jsx/PicPage";
import RegistrationInfo from "./layout/RegistrationInfo";
import Proof from "./Pages/LoginPages/ProofOfIdentity/Proof";
import ProofofIdentity from "./layout/ProofofIdentity";









const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingpageRoot />}>
          <Route index element={<LandingPage />}/>
          <Route path="login" element={<LoginSignup />}>
            <Route index element={<Loginpage/>}/>
             <Route path="signuppageform2" element={<RegistrationInfo />}  >
               <Route index element={<SignupPageform2/>}/>
               <Route path="picpage" element={<ProofofIdentity/>}>
                  <Route index element={<PicPage />} />
                  <Route path="proof" element={<Proof />} />
                </Route>  
            </Route>
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
