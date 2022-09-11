import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import GoogleSignin from "./Components/GoogleSignin";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import styled from "styled-components";
import FindHospital from "./pages/FindHospital";
import BuyPage from "./pages/BuyPage/BuyPage";
import Checkout from "./pages/BuyPage/Checkout";
import FindDoctor from "./pages/FindDoctor";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/verified" element={<GoogleSignin />}></Route>
          <Route path="/findhospital" element={<FindHospital />}></Route>
          <Route path="/finddoctor" element={<FindDoctor />}></Route>
          <Route path="/buypage" element={<BuyPage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
`;

export default App;
