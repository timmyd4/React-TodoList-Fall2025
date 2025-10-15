export default function ListItems(props)
{
    return(
        <div className="listed-todos">
            {props.todos.map((item) => (
                
                    <p className="list-items" key={item}> {item} </p>
                
            ))}
        </div>
    )
}