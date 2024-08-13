import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import { MainPage } from "./LandingPage/MainPage";
import { TestPage } from "./TestPage/TestPage";
import { PreviousResaults } from "./Resaults/PreviousResaults";
import { SignIn } from "./Auth/SignIn";





export function App() {
  return (
    <div>

<Router>
<Routes>
   <Route exact path="/" element={<MainPage/>} /> 
   <Route path="/test" element={<TestPage/>} />
   <Route path="/previous-resaults" element={<PreviousResaults/>} />
   <Route path="/sign-in" element={<SignIn/>} />
</Routes>
</Router>
</div>
  );
}