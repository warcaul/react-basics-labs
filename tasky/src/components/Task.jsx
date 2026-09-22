const Task = (props) => {

    return (
        <div  className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p>{props.description}</p>
            <p><b>{props.priorityLevel}</b></p>
            <button onClick={props.markDone} className='doneButton'>Done</button>

        </div>
    )
}

export default Task;
