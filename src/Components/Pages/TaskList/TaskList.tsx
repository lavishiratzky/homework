import axios from "axios";
import { useEffect, useState } from "react";
import { TaskModel } from "../../../Models.ts/TaskModel";
import TaskTable from "../../TaskTable/TaskTable";
import "./TaskList.css";

function TaskList(): JSX.Element {
    const [tasks,SetTasks]=useState<TaskModel[]>([])
    useEffect(()=>{
        axios.get<TaskModel[]>('https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks')
        .then(res =>{SetTasks(res.data) })
        .catch(err => { console.log(err);})
    },[])
    return (
        <div className="TaskList">
		<h1>TaskList</h1>
       <table>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Group</th>
            <th>When</th>
        </tr>
       
        {tasks.map(t=><tr key={'task'+t.id}>
            <td>{t.id}</td>
            <td>{t.title}</td>
            <td>{t.description}</td>
            <td>{t.group}</td>
            <td>{t.when.split('T')}</td>
        </tr>)}
     
       </table>
        </div>
    );
}

export default TaskList;
