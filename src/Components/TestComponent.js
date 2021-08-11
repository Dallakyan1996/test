// import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ChangeValue = (props) => {
    const state = useSelector(function (state) {
        return {
            name: state.name,
            value: state.value
        }
    })
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{state.value}</h1>
            <button onClick={() => {
                dispatch({
                    type: 'CHANGE-VALUE',
                    payload: {
                        value: state.value + 1
                    }
                })
            }}>count</button>
            <button onClick={() => {
                dispatch({
                    type: "RESET",
                    payload: {
                        value: 0
                    }
                })
            }}>reset</button>
            <h1>{state.name}</h1>
            <input type="text" value={state.name} onChange={(evt) => {
                dispatch({
                    type: "CHANGE-NAME",
                    payload: {
                        name: evt.target.value
                    }
                })
            }
            } />
            <button onClick={() => {
                dispatch({
                    type: 'CLEAR-NAME',
                    payload: {
                        name: ' '
                    }
                })
            }}>Clear</button>
        </div>
    )
}

export default ChangeValue;


