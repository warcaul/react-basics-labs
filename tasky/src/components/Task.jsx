const Task = (props) => {

    return (
        <div  className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p>{props.description}</p>
            <p><b>{props.priorityLevel}</b></p>
        </div>
    )
}

export default Task;
