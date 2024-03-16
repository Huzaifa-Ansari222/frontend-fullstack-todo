import React from 'react'

const TodoItem = ({
    title,
    description,
    isCompleted,
    updateHandler,
    deleteHandler,
    id,
    }) => {
return (
    <div className='todo'>
        <div style={{width:'65%'}}>
            <h4>{title}</h4>
            <p style={{wordWrap:'break-word'}}>{description}</p>
        </div>
        <div className='rightBtn'>
            <input onChange={()=>updateHandler(id)}
            style={{transform: 'scale(1.5)',marginRight:'10px'}}
            type="checkbox" checked={isCompleted} />
            <button style={{padding:'10px',border:'none',backgroundColor:'rgb(199 0 0 / 38%)'}}
            onClick={()=>deleteHandler(id)} className='btn'>Delete</button>
        </div>
    </div>
    )
}

export default TodoItem
