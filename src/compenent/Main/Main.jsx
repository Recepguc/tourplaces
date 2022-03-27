import "./Main.scss";
import {data} from "../../helpers/data";
import Card from "./card.jsx"


const Main = ()=>{
    console.log(data);
    return(
        <div className="Main">
           {data.map((item,index)=>(<Card {...item} key={index}/> ))}
        </div>
    )
}
export default Main