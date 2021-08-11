import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

const ToDoInput = () => {
    const dispatch = useDispatch()
    const [taskText, setTaskText] = useState("")
    const todoList = useSelector((state) => state.toDoReducer)

    return <div>
        <input type="text" onChange={
            (evt) => {
                setTaskText(evt.target.value)
            }
        } value={taskText} />
        <button onClick={() => {
            console.log(todoList)
            if (taskText) {
                dispatch({
                    type: 'ADD-TASK',
                    payload: [
                        ...todoList,
                    ].push({
                        checked: false,
                        taskText: taskText,
                    })
                })
            }
        }}>Add</button>
    </div>
}

export default ToDoInput;