
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import React from "react";
import "../assets/styles/reset.css";
import "../assets/styles/styles.css";
import Login from "./Login/Login";
import GameScreen from "./GameScreen/GameScreen";
import QuestionBox from "./QuestionBox/QuestionBox";


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
    },
    {
        question: "que dia é hoje?",
        answer: "Domingo"
    }
];

export default function App() {

    const [estado, setEstado] = React.useState(Array(deck.length).fill(null));
    const [contador, setContador] = React.useState(0);

    function HandleClick(index,score) {
        if(estado[index]===null) {
            setEstado(estado.map((elemento, i) => i===index? "showQuestion" : elemento));
        }
        if(estado[index]==="showQuestion") {
            setEstado(estado.map((elemento, i) => i===index? "showAnswer" : elemento));
        }
        if(estado[index]==="showAnswer") {
            setContador(contador+1);
            setEstado(estado.map((elemento, i) => i===index? score : elemento));
        }
    }

    function CheckGameState() {
        if(contador===estado.length) {
            console.log("cabou")
        }
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/gamescreen" element={
                    <GameScreen 
                        denominator={estado.length} 
                        numerator={contador}>

                        {deck.map((question, index) => <QuestionBox 
                        index={index} 
                        question={question} 
                        estado={estado[index]} 
                        onClick={() => HandleClick(index)} 
                        noPoint={() => HandleClick(index,"noPoint")} 
                        halfPoint={() => HandleClick(index, "halfPoint")}
                        fullPoint={() => HandleClick(index,"fullPoint")}
                        />)}
                        {CheckGameState()}
                    </GameScreen>
                } />
            </Routes>
        </BrowserRouter>
    );
}   