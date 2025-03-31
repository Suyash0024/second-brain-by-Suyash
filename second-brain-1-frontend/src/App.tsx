import { Home } from "./pages/home";
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dasboard from "./pages/dashboard"


function App() {
  return <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dasboard />} />
      {/* <Route path="/share/shareId" element={<Dasboard />} /> */}
   </Routes>
  </BrowserRouter>

  return  <Signin />
  
}

export default App
 
