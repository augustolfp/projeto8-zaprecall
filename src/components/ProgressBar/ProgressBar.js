import "./style.css"

export default function ProgressBar(props) {
    return(
        <div className="progressBar">
            {props.numerator}/{props.denominator} CONCLUÍDOS
        </div>
    );    
}