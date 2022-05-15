import "./style.css";
import { PlayOutline } from 'react-ionicons'
export default function QuestionBox(props) {
    return(
        <div className="closedQuestion">
            <div>
                <span>Pergunta {props.index}</span>
                <PlayOutline width="20px" />
            </div>
        </div>
    );
}