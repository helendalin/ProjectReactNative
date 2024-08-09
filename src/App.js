import React from "react";
import Login from "./Login"
import Signup from "./Signup"
import Homepage from "./Homepage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/homepage" element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App