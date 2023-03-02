import "./Header.css";
import logo from "../../Assets/Images/logo.png";
function Header(): JSX.Element {
    return (
        <div className="Header">
		<h1> clalit fullstack course</h1>
        <img src={logo} alt="ClalitLogo" />
        </div>
    );
}

export default Header;
