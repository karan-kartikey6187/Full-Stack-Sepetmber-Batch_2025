// Import Required Components
import { UseStateCounter } from "./UseStateCounter"
import { UseReducerCounter } from "./UseReducerCounter"

export const Counter = () => {
    return (
        <div className="mb-3 d-flex flex-column align-items-center">
            <UseStateCounter />
            <UseReducerCounter />
        </div>
    )
}
