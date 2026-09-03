import { useReducer, useState } from "react"

export const UseReducerCounter = () => {
    const initialState = {
        count: 0,
        message: "",
    };

    const reducer = (state, action) => {

        switch (action.type) {
            case "INCREMENT":
                if (state.count + action.by > 10) {
                    return {
                        ...state,
                        message: "You can't increase above 10.",
                    };
                }
                return {
                    count: state.count + action.by,
                    message: ""
                };

            case "DECREMENT":
                if (state.count - action.by < 0) {
                    return {
                        ...state,
                        message: "You can't decrease below 0."
                    }
                }
                return {
                    count: state.count - action.by,
                    message: ""
                };

            case "RESET":
                return initialState;

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const [message, setMessage] = useState('')

    return (
        <div className="counter-box mt-4 mb-5">
            <div className="border-bottom border-2 pb-2">
                <p className="fs-1 fw-semibold text-danger ps-3">Counter (useReducer Hook) = {state.count}</p>
            </div>
            <div className="d-flex justify-content-between mt-3 gap-1 flex-wrap">
                <button className="btn btn-outline-danger fw-bold" onClick={() => { dispatch({ type: "INCREMENT", by: 1 }) }} >Increment By 1</button>
                <button className="btn btn-outline-danger fw-bold" onClick={() => { dispatch({ type: "DECREMENT", by: 1 }) }} >Decrement By 1</button>
                <button className="btn btn-outline-danger fw-bold" onClick={() => { dispatch({ type: "INCREMENT", by: 2 }) }} >Increment By 2</button>
                <button className="btn btn-outline-danger fw-bold" onClick={() => { dispatch({ type: "DECREMENT", by: 2 }) }} >Decrement By 2</button>
                <button className="btn btn-outline-danger fw-bold" onClick={() => { dispatch({ type: "RESET" }) }} >Reset</button>
            </div>
            {
                state.message && <p className="text-danger fw-bold mt-2 position-absolute start-50  fs-5">{state.message}</p>
            }
        </div>
    )

}