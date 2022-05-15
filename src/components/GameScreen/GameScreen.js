import Title from "../Title/Title";
import logo from "../../assets/images/logo.png";
import "./style.css"
import QuestionBox from "../QuestionBox/QuestionBox";
function TopLogo() {
    return(
        <div className="topLogo">
            <img src={logo} />
            <Title />
        </div>
    );
}

function ProgressBar(props) {
    return(
        <div className="progressBar">
            {props.numerator}/{props.denominator} CONCLUÍDOS
        </div>
    );    
}

export default function GameScreen() {
    return(
        <>
            <TopLogo />
            <ProgressBar numerator="0" denominator="4" />
            <QuestionBox index="1" />
        </>
    );
}