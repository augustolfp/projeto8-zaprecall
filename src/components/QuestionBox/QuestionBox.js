import "./style.css";
import { PlayOutline } from 'react-ionicons'
import { RepeatOutline } from 'react-ionicons'
import RecallButton from "../RecallButton/RecallButton";
export default function QuestionBox(props) {
    if(props.estado===null) {
        return(
            <div className="closedQuestion" onClick={props.onClick}>
                <div>
                    <span>Pergunta {props.index + 1}</span>
                    <PlayOutline width="20px" />
                </div>
            </div>
        );
    }
    if(props.estado==="showQuestion") {
        return(
            <div className="openQuestion">
                <div>
                    <span>{props.question.question}</span>
                    <div className="iconContainer">
                        <span onClick={props.onClick}><RepeatOutline width="20px" /></span>
                    </div>
                </div>
            </div>
        );
    }
    if(props.estado==="showAnswer") {
        return(
            <div className="openAnswer">
                <div>
                    <span>{props.question.answer}</span>
                    <div className="buttonContainer">
                        <div onClick={props.noPoint}><RecallButton color="#FF3030">Não lembrei</RecallButton></div>
                        <div onClick={props.halfPoint}><RecallButton color="#FF922E">Quase não lembrei</RecallButton></div>
                        <div onClick={props.fullPoint}><RecallButton color="#2FBE34">Zap!</RecallButton></div>
                    </div>
                </div>
            </div>
        );
    }
}