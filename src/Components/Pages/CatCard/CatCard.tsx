import { CatModel } from "../../../Models/CatModel";
import "./CatCard.css";
interface CatCardProps{cat:CatModel}
function CatCard(props:CatCardProps): JSX.Element {
    return (
        <div className="CatCard">
			<p> id: {props.cat.id}</p>
            <p> name: {props.cat.name}</p>
            <p> weight: {props.cat.weight}</p>
            <p> birthday: {props.cat.birthday}</p>
            <p> color: {props.cat.color}</p>
<img src ={props.cat.image} alt={props.cat.name}/>
        </div>
    );
}

export default CatCard;
