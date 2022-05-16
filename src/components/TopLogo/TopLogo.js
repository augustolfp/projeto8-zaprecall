import Title from "../Title/Title";
import logo from "../../assets/images/logo.png";
import "./style.css";

export default function TopLogo() {
    return(
        <div className="topLogo">
            <img src={logo} />
            <Title />
        </div>
    );
}