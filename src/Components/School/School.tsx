import "./School.css";
import jb1 from "../../Assets/Images/jb.png";
interface SchoolProps{
  name:string
  Phone:string
}
function School(props:SchoolProps): JSX.Element {
    return (
        <div className="School">
            <p>The school name is:</p>
            <img src={jb1}alt="schoollogo" />
			<p>{props.name}</p>
            <p>Tel.{props.Phone}</p>
            
        </div>
    );
}

export default School;
