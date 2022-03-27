import React, { useEffect, useState } from "react";

const TodoArrayItems = (props) => { 
    const{emitDeleteItem} = props;
    const[todoArrayItems, setTodoItem] = useState(props.data);
    const[isDirty, setDirty] = useState(false); 

    useEffect(() => {
        if(isDirty){
            fetch(`http://localhost:8080/api/todoArrayItems/${todoArrayItems.id}` , {
                method: 'PUT',
                headers: {
                    "content-type":"application/json",
                },
                body: JSON.stringify(todoArrayItems),
            })
            .then((response) => response.json())
            .then((data) => {
                setDirty(false);
            setTodoItem(data);
            });
        }
    },[todoArrayItems,isDirty]);

    function updateCheck(){
        setDirty(true);
        setTodoItem({ ...todoArrayItems, isDone: !todoArrayItems.isDone})
    }
    function updateTask(e){
        setDirty(true);
        setTodoItem({ ...todoArrayItems, taskName: e.target.value});
    }
    function deleteTodoItem() {
        fetch(`http://localhost:8080/api/todoArrayItems/${todoArrayItems.id}` , {
                method: "DELETE",
                headers: {
                    "content-type":"application/json",
                },
            })
            .then((response) => {
                emitDeleteItem(todoArrayItems);
            });
    }
    return (
        <div>
        <input type="checkbox"
        checked={todoArrayItems.isDone}
        onChange={updateCheck}/>
        {
            todoArrayItems.isDone ? (
                <span style={{textDecoration: "line-through"}}>{todoArrayItems.taskName}</span>
                ) : (
                <input type="text" value={todoArrayItems.taskName} onChange={updateTask}/>
            )
        }
        <span 
            style={{marginLeft: "2rem",cursor:"pointer"}}
            onClick={deleteTodoItem} >
                🗑️
            </span>
        </div>
    );
};

export default TodoArrayItems;