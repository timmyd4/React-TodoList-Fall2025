import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ToDoList from "./TodoList.jsx";
import React from "react";



export default function App()
{

    const [state, setState] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    return(
        <>
            <Header/>
                <ToDoList state={state} setState={setState} todos={todos} setTodos={setTodos} />
            <Footer/>
        </>
    )
}