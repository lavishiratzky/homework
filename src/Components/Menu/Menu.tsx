import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<Link to="home" className="a">Home</Link>
            <Link to="/school"  className="a">School</Link>
            <Link to="/teacherlist" className="a">Teachers</Link>
            <Link to="/map" className="a">Map</Link> 
        </div>
    );
}

export default Menu;
