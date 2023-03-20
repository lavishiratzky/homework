
import { useEffect, useState } from "react";
import "./CatList.css";
import { CatModel } from "../../../Models.ts/CatModel"
import axios from "axios";
import CatCard from "../CatCard/CatCard";
function CatList(): JSX.Element {
  const[cats,SetCats]=useState<CatModel[]>([]);
    useEffect(()=>{
        axios.get<CatModel[]>('https://raw.githubusercontent.com/KobiShashs/CATS-JSON/main/cats.json')
        .then(res =>{ SetCats(res.data) })
        .catch(err => { console.log(err);})
    },[])
    return (
        <div className="CatList">
			<h1>CatList</h1>
<div className="cards-display">
{cats.map(c=><CatCard key={'cat'+c.id} cat={c}/>)}
</div>
        </div>
    );
}

export default CatList;
