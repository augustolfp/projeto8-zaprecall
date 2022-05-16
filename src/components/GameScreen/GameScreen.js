import "./style.css"
import ProgressBar from "../ProgressBar/ProgressBar";
import TopLogo from "../TopLogo/TopLogo";

export default function GameScreen(props) {
    return(
        <>
            <TopLogo />
            <div className="questionContainer">
                {props.children}
            </div>
            <ProgressBar numerator="0" denominator="4" />
        </>
    );
}