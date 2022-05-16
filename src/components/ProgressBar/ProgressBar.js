import "./style.css"

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
                <div>
                    Parabéns!!!!
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
                <div>
                    Precisa treinar mais!!!!
                </div>
                {props.numerator}/{props.denominator} CONCLUÍDOS
            </div>
            </>
        );  
    } 
}