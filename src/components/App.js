
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import React from "react";
import "../assets/styles/reset.css";
import "../assets/styles/styles.css";
import Login from "./Login/Login";
import GameScreen from "./GameScreen/GameScreen";

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/gamescreen" element={<GameScreen />} />
            </Routes>
        </BrowserRouter>
    );
}