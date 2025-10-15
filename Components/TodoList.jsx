import ListItems from "./ListItems.jsx";
export default function TodoList(props)
{

    function HandleState(event)
    {
        return(
            props.setState(event.target.value)
        )
    }

    function HandleClick()
    {
        if(props.state.trim() === "") return;
        props.setTodos(prev => [...prev, props.state])
        props.setState("")
    }

    return(
        <div>
            <div className="input-text-styles">
                <input 
                    name="input-text"
                    value={props.state}
                    onChange={HandleState}
                    placeholder="Type Here"    
                />
            </div>
            <div className="add-button-stlyes">
                <button className="button-styles" onClick={HandleClick}> Add </button>
            </div>
            <div className="todo-list-items">
                <ListItems todos={props.todos}/>
            </div>
        </div>
    )
}