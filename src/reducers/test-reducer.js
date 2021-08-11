
let initialState = {
    value: 0,
    name: "Jhon Smith"
}

let testReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CHANGE-VALUE':
            return {
                ...state,
                value: action.payload.value
            }
        case 'CHANGE-NAME':
            return {
                ...state,
                name: action.payload.name
            }
        case 'RESET':
            return {
                ...state,
                value: action.payload.value
            };
        case 'CLEAR-NAME':
            return {
                ...state,
                name: action.payload.name
            }
        default: return state
    }
}

export default testReducer;