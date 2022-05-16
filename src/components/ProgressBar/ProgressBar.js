import "./style.css"
import SadFace from "../../assets/images/sad.png";
import PartyFace from "../../assets/images/party.png"

export default function ProgressBar(props) {

    function noErrors() {
        const numErrors = props.estado.filter(elemento => elemento==="noPoint").length;
        if(numErrors===0) {
            return true;
        }
        else {
            return false;
        }
    }


    if(props.gameState===false) {
        return(
            <div className="progressBar">
                {props.numerator}/{props.denominator} CONCLUÍDOS
            </div>
        );  
    }
    if(props.gameState===true && noErrors()===true) {
        return(
            <>
            <div className="progressBar">
                <div className="titleResult">
                    <img src={PartyFace} />
                    Parabéns!
                </div>
                <div className="resultDescription">
                    Você não esqueceu de nenhum flashcard!
                </div>
                {props.numerator}/{props.denominator} CONCLUÍDOS
            </div>
            </>
        );  
    } 
    if(props.gameState===true && noErrors()===false) {
        return(
            <>
            <div className="progressBar">
                <div className="titleResult">
                    <img src={SadFace} />
                    Putz...
                </div>
                <div className="resultDescription">
                    Ainda faltam alguns...Mas não desanime!
                </div>
                {props.numerator}/{props.denominator} CONCLUÍDOS
            </div>
            </>
        );  
    } 
}