import { Bookmark } from "lucide-react";
import Cards from "./component/cards";

const cardPropDrill = (props) => {    
  return (
    <div className="parentProject flex">
        <div className="cards flex">
            <Cards job={props.job} />
        </div>
    </div>
  );
}

export default cardPropDrill;