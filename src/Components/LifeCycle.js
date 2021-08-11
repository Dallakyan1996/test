import React from "react";
import { useEffect, useState } from "react";

const LifeCycleComponent = (props) => {

    const [state, setState] = useState({
        count: 0,
        amount: 2
    })
    useEffect(() => {
        console.log("Barev")
    }, [state.count])
    useEffect(() => {
        console.log("Hello")
    }, [state.amount])
    return <>
        <div>
            <h3>
                {state.count}
            </h3>
        </div>
        <button onClick={() => {
            setState({
                ...state,
                count: state.count + 1
            })
        }}>click 1</button>
        <div>
            <h3>
                {state.amount}
            </h3>
        </div>
        <button onClick={() => {
            setState({
                ...state,
                amount: state.amount + 2
            })
        }}>click 2</button>
    </>
}

// class LifeCycleComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//     componentDidMount() {
//         console.log("Barev")
//     }
//     render() {
//         return <>
//             <div>
//                 <h3>{this.state.count}</h3>
//                 <button onClick={() => this.setState({
//                     count: this.state.count + 1
//                 })}>Click</button>
//             </div>
//         </>
//     }
// }

export default LifeCycleComponent;