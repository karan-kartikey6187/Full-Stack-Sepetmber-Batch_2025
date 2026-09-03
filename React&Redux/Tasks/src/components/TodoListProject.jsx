import { useReducer } from "react";
import GreenCheck from "../assets/icons/green-check.png";
import PendingCheck from "../assets/icons/pending-check.png";

const initialState = {
    input: "",
    todos: [
        {
            id: Math.floor(Math.random() * 100000),
            text: "Learn HTML CSS and JavaScript",
            completed: true,
        },
        {
            id: Math.floor(Math.random() * 100000),
            text: "Learn React",
            completed: false,
        },
        {
            id: Math.floor(Math.random() * 100000),
            text: "Create Projects",
            completed: false,
        },
        {
            id: Math.floor(Math.random() * 100000),
            text: "Upload on Github",
            completed: false,
        },
        {
            id: Math.floor(Math.random() * 100000),
            text: "Create Portfolio Website",
            completed: false,
        },
        {
            id: Math.floor(Math.random() * 100000),
            text: "Create Resume",
            completed: false,
        },
        {
            id: Math.floor(Math.random() * 100000),
            text: "Apply for Job",
            completed: false,
        }
    ],
}

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? {
                            ...todo,
                            completed: !todo.completed,
                        }
                        : todo
                ),
            };

        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload
                ),
            };

        case 'ADD_TODO':

            if (!state.input.trim()) return state;

            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: state.input.trim(),
                        completed: false,
                    },
                ],
                input: "",
            };

        case 'SET_INPUT':
            return {
                ...state,
                input: action.payload,
            };

        default:
            return state;
    }
}




function AddTodoItem({ todos, dispatch }) {
    return (
        <>
            {todos.map((todo, index) => (
                <li key={index} className="d-flex justify-content-between g-2 border-top pt-2 pb-2 ps-4 pe-3">
                    <div className="d-flex g-2 justify-content-center align-items-center">
                        <img
                            src={todo.completed ? GreenCheck : PendingCheck}
                            alt="Todo Status"
                            style={{ cursor: "pointer", width: "20px", height: "20px" }}
                            onClick={() =>
                                dispatch({
                                    type: "TOGGLE_TODO",
                                    payload: todo.id,
                                })
                            }
                        />

                        <p
                            className="mb-0 ms-2 fw-semibold"
                            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                        >
                            {todo.text}
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "REMOVE_TODO",
                                payload: todo.id,
                            })
                        }
                        className="btn btn-outline-danger fw-semibold"
                    >
                        Remove
                    </button>
                </li>
            ))
            }
        </>
    );
}

function TodoListProject() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ width: '600px' }} className="border px-4 py-4 rounded-2 mb-4 mx-auto">
            <p className="mb-3 fw-semibold fs-5 ms-3">Todo List</p>
            <div className="input-group mb-3">
                <input
                    className="form-control fw-medium fs-6"
                    aria-label="Todo Input"
                    aria-describedby="button-addon2"
                    type="text"
                    value={state.input}
                    onChange={(e) =>
                        dispatch({
                            type: "SET_INPUT",
                            payload: e.target.value,
                        })
                    }
                    placeholder="Enter list item name"
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() =>
                        dispatch({
                            type: "ADD_TODO",
                        })
                    }
                >Add Todo Item</button>
            </div>
            <ul className="ps-0">
                {state.todos.length === 0 ? (
                    <p className="ps-3 text-danger fw-medium">No items available.</p>
                ) : (
                    <AddTodoItem
                        todos={state.todos}
                        dispatch={dispatch}
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoListProject