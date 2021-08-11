
let initialState = [
    {
        checked: false,
        taskText: "task1",
    },
    {
        checked: false,
        taskText: "task2",
    },
    {
        checked: false,
        taskText: "task3",
    }
]

let toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TASK': return [
            ...state,
            action.payload
        ]
        default: return state
    }
}

export default toDoReducer;