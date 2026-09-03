import { useState } from "react"

export const UseStateCounter = () => {
    const initialState = 0;

    const updateCount = (value) => {

        setCount((prev) => {

            if (prev + value > 10) {
                setMessage("You Can,t Increase 10");
                return prev;
            }

            if (prev + value < 0) {
                setMessage("You Can,t Decrease 0");
                return prev;
            }

            setMessage('')
            return prev + value
        });
    };

    const resetCounter = () => {
        setCount(0);
        setMessage("");
    };


    const [count, setCount] = useState(initialState)

    const [message, setMessage] = useState('')

    return (
        <div className="counter-box mb-3 mt-5">
            <div className="border-bottom border-2 pb-2">
                <p className="fs-1 fw-semibold text-primary ps-3">Counter (useState Hook) = {count}</p>
            </div>
            <div className="d-flex justify-content-between mt-3 gap-1 flex-wrap">
                <button className="btn btn-outline-primary fw-bold" onClick={() => updateCount(1)} >Increment By 1</button>
                <button className="btn btn-outline-primary fw-bold" onClick={() => updateCount(-1)} >Decrement By 1</button>
                <button className="btn btn-outline-primary fw-bold" onClick={() => updateCount(2)} >Increment By 2</button>
                <button className="btn btn-outline-primary fw-bold" onClick={() => updateCount(-2)} >Decrement By 2</button>
                <button className="btn btn-outline-primary fw-bold" onClick={resetCounter} >Reset</button>
            </div>
            {
                message && <p className="text-danger fw-bold mt-2 position-absolute start-50 fs-5">{message}</p>
            }
        </div>
    )

}