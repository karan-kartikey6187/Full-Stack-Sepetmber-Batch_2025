import { useState } from "react"

export const UseState = () => {

    const [count, setCount] = useState(0)

    const counterIncrement = () => {
        if (count >= 10) {
            alert("You Can,t Increase 10");
            return;
        }
        setCount((num) => num += 1)
    }

    const counterDecrement = () => {
        if (count <= 0) {
            alert("You Can,t Decrease 0");
            return;
        }
        setCount((num) => num -= 1)
    }
    return (
        <div className="counter-container d-flex flex-column justify-content-center align-items-center border border-3 border-primary p-1 rounded-4 mt-5">
            <div className="px-2 mt-2 d-flex flex-column justify-content-center align-items-center">
                <p className="count-text text-uppercase fs-2 fw-bold text-white px-3 border border-3 border-primary">Counter</p>
                <p className="count-number text-bg-dark fs-1 fw-bolder rounded rounded-circle d-grid border border-3 border-primary">
                    {count}
                </p>
            </div>
            <div className="d-flex justify-content-between gap-5 mt-3 mb-2 px-3">
                <button className="btn btn-primary border border-2 border-black fs-5 text-uppercase fw-bold" onClick={counterIncrement}>Increase</button>
                <button className="btn btn-danger border border-2 border-black fs-5 text-uppercase fw-bold" onClick={counterDecrement}>Decrease</button>
            </div>
        </div>
    )
}
