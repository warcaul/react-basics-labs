const Task = (props) => {

    const priorityColor =
        props.priorityLevel === 'High' ? 'red' :
        props.priorityLevel === 'Medium' ? 'goldenrod' :
        'green';

    return (
        <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p>{props.description}</p>
            <p style={{ backgroundColor: priorityColor, color: 'white', borderRadius: '4px', padding: '6px' }}>
                {props.priorityLevel}
            </p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;