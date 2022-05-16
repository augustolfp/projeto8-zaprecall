import "./style.css"

import TopLogo from "../TopLogo/TopLogo";

export default function GameScreen(props) {
    return(
        <>
            <TopLogo />
            <div className="questionContainer">
                {props.children}
            </div>
            
        </>
    );
}