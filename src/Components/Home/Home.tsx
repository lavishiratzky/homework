import "./Home.css";
import home from "../../Assets/Images/home.jpg";
function Home(): JSX.Element {
    return (
        <div className="Home">
			<h1>this is home</h1>
            <img src={home} alt="home"/>

        </div>
    );
}

export default Home;
