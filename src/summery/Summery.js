import {useContext} from "react";
import GlobalContext from "../ValueContext";
import Expense from "../Expense";

function Summery() {
    let balance = useContext(GlobalContext)
    let expense = {name:"test", value:balance.summery[0].balance}
  return (
    <div>
       <Expense expense = {expense}/>
    </div>
  );
}

export default Summery;