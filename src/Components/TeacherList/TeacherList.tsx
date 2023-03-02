import Teacher from "../Teacher/Teacher";
import "./TeacherList.css";

function TeacherList(): JSX.Element {
    return (
        <div className="TeacherList">
			  <Teacher name={"Kobi Shasha"} description={"React"}/>
            <Teacher name={"Amit Assor"} description={"Typescript"}/>
        </div>
    );
}

export default TeacherList;
