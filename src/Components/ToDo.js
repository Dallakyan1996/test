import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import "./toDo.css";
import ToDoInput from "./ToDoInput";

const ToDo = (props) => {
    const [state, setState] = useState()
    const todo = useSelector((state) => state.toDoReducer)
    console.log(todo)
    return <div className="toDoWrapper">
        <div className="toDoDiv">
            {
                todo.map(i => <div><p>{i.taskText}</p>
                    <input defaultChecked={i.checked} type="checkbox"></input></div>)
            }
        </div>
        <ToDoInput />
    </div>
}

export default ToDo;