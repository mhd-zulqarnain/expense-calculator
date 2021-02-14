import {useContext} from "react";
import ValueContext from "../ValueContext";

function Summery() {
    let balance = useContext(ValueContext)
  return (
    <div>
     Balance : {balance[0]}
    </div>
  );
}

export default Summery;