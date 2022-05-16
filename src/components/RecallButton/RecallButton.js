import "./style.css";

export default function RecallButton(props) {
    return(
        <button className="recallButton" style={{backgroundColor: props.color}}>
            {props.children}
        </button>
    );
}