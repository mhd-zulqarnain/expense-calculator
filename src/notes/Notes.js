import {useContext} from "react";
import Expense from "../Expense";
import GlobalContext from "../ValueContext";

function Notes() {
    let balance = useContext(GlobalContext)
    let list = useContext(GlobalContext)
    let data = list.data[0]

    function add(){
        data.push({value:23,name:"test"})
        list.data[1](data)
        
        console.log(data.lenght)
    }
    function show(){
       
    }
  return (
    <div>
        { JSON.stringify(data)}
        
        <br/>
       <button onClick={()=>{add()}}>Add</button>
    </div>
  );
}

export default Notes;