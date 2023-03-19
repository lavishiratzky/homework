import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<Link to="home" className="a">Home</Link>
            <Link to="/school"  className="a">School</Link>
            <Link to="/teacherlist" className="a">Teachers</Link>
            <Link to="/map" className="a">Map</Link> 
            <Link to="/CatList" className="a">CatList</Link> 
            <Link to="/TaskList" className="a">TaskList</Link> 
            <Link to="/UserList" className="a">UserList</Link> 
            <Link to="/CommentList" className="a">CommentList</Link> 
            
        </div>
    );
}

export default Menu;
