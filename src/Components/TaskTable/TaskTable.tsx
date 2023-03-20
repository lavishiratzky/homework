import { TaskModel } from "../../Models.ts/TaskModel";
import "./TaskTable.css";
interface TaskTableProps{task:TaskModel}
function TaskTable(props:TaskTableProps): JSX.Element {
    return (
        <div className="TaskTable">
            <tr>
            <td>id</td>
            <td>Title</td>
            <td>Description</td>
            <td>Group</td>
            <td>When</td>
            </tr>
			<p> id: {props.task.id}</p>
            <p> Title: {props.task.title}</p>
            <p> Description: {props.task.description}</p>
            <p> Group: {props.task.group}</p>
            <p> when: {props.task.when}</p>
        </div>
    );
}

export default TaskTable;
