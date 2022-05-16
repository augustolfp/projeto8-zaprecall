import "./style.css";
import { PlayOutline } from 'react-ionicons'
export default function QuestionBox(props) {
    if(props.estado===null) {
        return(
            <div className="closedQuestion" onClick={props.onClick}>
                <div>
                    <span>Pergunta {props.index}</span>
                    <PlayOutline width="20px" />
                </div>
            </div>
        );
    }
    if(props.estado==="showQuestion") {
        return(
            <div className="closedQuestion" onClick={props.onClick}>
                <div>
                    <span>{props.question.question}</span>
                    <PlayOutline width="20px" />
                </div>
            </div>
        );
    }
    if(props.estado==="showAnswer") {
        return(
            <div className="closedQuestion" onClick={props.onClick}>
                <div>
                    <span>{props.question.answer}</span>
                    <PlayOutline width="20px" />
                </div>
            </div>
        );
    }
}