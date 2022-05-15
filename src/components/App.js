
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import React from "react";
import "../assets/styles/reset.css";
import "../assets/styles/styles.css";
import Login from "./Login/Login";
import GameScreen from "./GameScreen/GameScreen";


const deck = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        question: "O que é o React?",
        answer: "Uma biblioteca JavaScript para construção de sites"
    },
    {
        question: "Componentes devem iniciar como?",
        answer: "Com letra maiúscula"
    },
    {
        question: "O que podemos colocar dentro do JSX?",
        answer: "Expressões!"
    },
    {
        question: "O que o ReactDOM faz por nós?",
        answer: "Interage com o DOM para colocar componentes React nele"
    },
    {
        question: "Para que serve o npm?",
        answer: "Para gerenciar pacotes e suas dependências"
    },
    {
        question: "Para que servem as props?",
        answer: "Para passar informações entre componentes"
    }
]



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