import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/images/logo.png";
import Title from "../Title/Title";
import StartButton from "../StartButton/StartButton";



export default function Login() {
    return (
        <div className="loginContainer">
            <img src={logo} />
            <Title />
            <Link to="/gamescreen">
                <StartButton />
            </Link>
        </div>
    );
}