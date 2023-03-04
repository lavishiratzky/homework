import "./Footer.css";
import {FaFacebookF  } from "react-icons/fa";
import Sochialmedia from "../Sochialmedia/Sochialmedia";
function Footer(): JSX.Element {
    return (
        <div className="Footer">
			<p>all rights reserved to Lavi Shiratzky &copy;</p>
            <Sochialmedia/>
            
        </div>
    );
}

export default Footer;
