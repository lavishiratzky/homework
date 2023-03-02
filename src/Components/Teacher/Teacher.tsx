import "./Teacher.css";
interface TeacherProps {
    name:string
    description: string
}

function Teacher(props:TeacherProps): JSX.Element {
    return (
        <div className="Teacher">
			<p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default Teacher;
