import { Outlet } from "react-router-dom";
import Routing from "../Routing/Routing";
// import School from "../School/School";
// import Teacher from "../Teacher/Teacher";
import "./Main.css";
function Main(): JSX.Element {
    // const map:string ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.232246587495!2d34.78840081505377!3d32.06405485315399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b70c925e5ed%3A0x9e629a46351e04c3!2z15In15XXnyDXkdeo15nXmdehINeU15PXqNeb15QgLSDXnNeZ157XldeT15kg15TXmdeZ15jXpyAtINeq15wg15DXkdeZ15E!5e0!3m2!1siw!2sil!4v1677440902394!5m2!1siw!2sil";
    return (
        
        <div className="Main">
        <Routing/>
		<Outlet/>
            </div>
            
            
    );
    }
export default Main;

