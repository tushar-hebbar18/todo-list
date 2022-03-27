import React, { useEffect, useState } from "react";

const TodoArrayItems = (props) => { 
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
    return (
        <div>
        <input type="checkbox"
        checked={todoArrayItems.isDone}
        onChange={updateCheck}/>
        <span>{todoArrayItems.taskName}</span>
        </div>
    );
};

export default TodoArrayItems;