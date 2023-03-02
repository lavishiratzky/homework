import "./Routing.css";
import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Teacher from "../Teacher/Teacher";
import School from "../School/School";
import TeacherList from "../TeacherList/TeacherList";
import Map from "../Map/Map";
import Page404 from "../Page404/Page404";
import Menu from "../Menu/Menu";
function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="teacherlist" element={<TeacherList />} />
                <Route path="map" element={<Map />} />
                <Route path="*" element={<Page404/>}/>
                <Route path="menu" element={<Menu/>}/>
                <Route path="school" element={<School name={"jhonbryce"} Phone={"035344850"}/>}/>
                

            </Routes>
        </div>
    );
}

export default Routing;